import { DiagnosticsCategory, DiagnosticsChecker, DiagnosticsCheckerResult } from './types';

import Logging from '@/utils/logging';

const console = Logging.diagnostics;

/**
 * DiagnosticsResult is the data structure that will be returned to clients (as
 * part of a DiagnosticsResultCollection) over the HTTP API.
 */
export type DiagnosticsResult = DiagnosticsCheckerResult & {
  /** The diagnostics checker that produced this result. */
  id: string,
  /** Whether to avoid notifying the user about failures for this check. */
  mute: boolean,
  category: DiagnosticsCategory,
};

/**
 * DiagnosticsResultCollection is the data structure that will be returned to
 * clients over the HTTP API.
 */
export type DiagnosticsResultCollection = {
  last_update: string,
  checks: Array<DiagnosticsResult>,
};

/**
 * DiagnosticsManager manages the collection of diagnostics checkers, and is
 * used to run checks and fetch results.
 */
export class DiagnosticsManager {
  /** Checkers capable of running individual diagnostics. */
  readonly checkers: Promise<DiagnosticsChecker[]>;

  /** Time stamp of when the last check occurred. */
  lastUpdate = new Date(0);

  /** Last known check results, indexed by the checker id. */
  results: Record<DiagnosticsChecker['id'], DiagnosticsCheckerResult> = {};

  /** Mapping of category name to diagnostic ids */
  readonly checkerIdByCategory: Partial<Record<DiagnosticsCategory, string[]>> = {};

  constructor(diagnostics?: DiagnosticsChecker[]) {
    this.checkers = diagnostics ? Promise.resolve(diagnostics) : (async() => {
      const imports = (await Promise.all([
        import('./testCheckers'),
        import('./connectedToInternet'),
        import('./dockerCliSymlinks'),
        import('./rdBinInShell'),
        import('./kubeContext'),
      ])).map(obj => obj.default);

      return (await Promise.all(imports)).flat();
    })();
    this.checkers.then((checkers) => {
      for (const checker of checkers) {
        checker.trigger = async(checker) => {
          console.debug(`Triggering diagnostics ${ checker.id }`);
          this.results[checker.id] = await checker.check();
        };
        this.checkerIdByCategory[checker.category] ??= [];
        this.checkerIdByCategory[checker.category]?.push(checker.id);
      }
    });
  }

  /**
   * Returns the list of currently known category names.
   */
  getCategoryNames(): Array<string> {
    return Object.keys(this.checkerIdByCategory);
  }

  /**
   * Returns undefined if the categoryName isn't known, the list of IDs in that category otherwise.
   */
  getIdsForCategory(categoryName: string): Array<string> | undefined {
    return this.checkerIdByCategory[categoryName as DiagnosticsCategory];
  }

  protected async applicableCheckers(categoryName: string | null, id: string | null): Promise<DiagnosticsChecker[]> {
    const checkers = (await this.checkers)
      .filter(checker => categoryName ? checker.category === categoryName : true)
      .filter(checker => id ? checker.id === id : true);

    return (await Promise.all(checkers.map(async(checker) => {
      try {
        return [checker, await checker.applicable()] as const;
      } catch (ex) {
        console.error(`Failed to check ${ checker.id }: ${ ex }`);

        return [checker, false] as const;
      }
    })))
      .map(([checker, applicable]) => {
        console.debug(`${ checker.id } is ${ applicable ? '' : 'not ' }applicable`);

        return [checker, applicable] as const;
      })
      .filter(([, applicable]) => applicable)
      .map(([checker]) => checker);
  }

  /**
   * Fetch the last known results, filtered by given category and id.
   */
  async getChecks(categoryName: string | null, id: string | null): Promise<DiagnosticsResultCollection> {
    const checkers = (await this.applicableCheckers(categoryName, id))
      .filter(checker => checker.id in this.results);

    return {
      last_update: this.lastUpdate.toISOString(),
      checks:      checkers
        .map(checker => ({
          ...this.results[checker.id],
          id:       checker.id,
          category: checker.category,
          mute:     false,
        })),
    };
  }

  /**
   * Run all checks, and return the results.
   */
  async runChecks(): Promise<DiagnosticsResultCollection> {
    await Promise.all((await this.applicableCheckers(null, null)).map(async(checker) => {
      console.debug(`Running check ${ checker.id }`);
      this.results[checker.id] = await checker.check();
    }));
    this.lastUpdate = new Date();

    return this.getChecks(null, null);
  }
}
