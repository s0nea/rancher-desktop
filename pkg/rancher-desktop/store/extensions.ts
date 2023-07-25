import { GetterTree } from 'vuex';

import { fetchAPI } from './credentials';
import { ActionContext, MutationsType } from './ts-helpers';

import type { ExtensionMetadata } from '@pkg/main/extensions/types';

export interface ExtensionState {
  version: string;
  metadata: ExtensionMetadata;
  labels: Record<string, string>;
}

interface ExtensionsState {
  extensions: Record<string, ExtensionState>;
}

const uri = (port: number, pathRemainder: string) => `http://localhost:${ port }/v1/${ pathRemainder }`;

export const state: () => ExtensionsState = () => ({ extensions: {} });

export const mutations: MutationsType<ExtensionsState> = {
  SET_EXTENSIONS(state: ExtensionsState, extensions: Record<string, ExtensionState>) {
    state.extensions = extensions;
  },
};

type ExtensionsActionContext = ActionContext<ExtensionsState>;

export const actions = {
  async fetch({ commit, rootState }: ExtensionsActionContext) {
    const response = await fetchAPI('/v1/extensions', rootState);

    if (!response.ok) {
      console.log(`fetchExtensions: failed: status: ${ response.status }:${ response.statusText }`);

      return;
    }
    const result: Record<string, ExtensionState> = await response.json();

    commit('SET_EXTENSIONS', result);
  },
  async uninstall({ commit, rootState }: ExtensionsActionContext, id: string) {
    const { port, user, password } = rootState.credentials.credentials;

    return await fetch(
      uri(port, `extensions/uninstall?id=${ id }`),
      {
        headers: new Headers({
          Authorization:  `Basic ${ window.btoa(`${ user }:${ password }`) }`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        method: 'POST',
      });
  },
  async install({ commit, rootState }: ExtensionsActionContext, id: string) {
    const { port, user, password } = rootState.credentials.credentials;

    return await fetch(
      uri(port, `extensions/install?id=${ id }`),
      {
        headers: new Headers({
          Authorization:  `Basic ${ window.btoa(`${ user }:${ password }`) }`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        method: 'POST',
      });
  },
};

export const getters: GetterTree<ExtensionsState, ExtensionsState> = {
  list(state: ExtensionsState): ({ id: string } & ExtensionState )[] {
    return Object.entries(state.extensions).map(([id, info]) => ({ id, ...info }));
  },
};
