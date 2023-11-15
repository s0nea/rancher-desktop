<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import BackendProgress from '@pkg/components/BackendProgress.vue';
import NetworkStatus from '@pkg/components/NetworkStatus.vue';
import StatusBarItem from '@pkg/components/StatusBarItem.vue';
import Version from '@pkg/components/Version.vue';

export default Vue.extend({
  components: { BackendProgress, StatusBarItem },
  data() {
    return {
      items: [
        {
          name: 'version', component: Version, icon: 'icon icon-question-mark',
        },
        {
          name: 'network', component: NetworkStatus, icon: 'icon icon-backup-restore',
        },
        {
          name: 'kubernetesVersion', component: null, icon: 'icon icon-fleet',
        },
        {
          name: 'containerEngine', component: null, icon: 'icon icon-cis',
        },
      ],
      showIcons: false,
    };
  },
  computed: {
    ...mapGetters('preferences', ['getPreferences']),
    kubernetesVersion(): string {
      return this.getPreferences.kubernetes.version;
    },
    kubernetesEnabled(): boolean {
      return this.getPreferences.kubernetes.enabled;
    },
    containerEngine(): string {
      return this.getPreferences.containerEngine.name;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.showIcons = window.innerWidth <= 800;
    },
    getItemData(itemName: string): { label: string, value: string } | undefined {
      let data;

      switch (itemName) {
      case 'kubernetesVersion':
        if (this.kubernetesEnabled && this.kubernetesVersion) {
          data = {
            label: 'product.kubernetesVersion',
            value: this.kubernetesVersion,
          };
        }
        break;
      case 'containerEngine':
        data = this.containerEngine ? { label: 'product.containerEngine', value: this.containerEngine } : undefined;
        break;
      }

      return data;
    },
  },
});
</script>

<template>
  <footer>
    <div class="left-column">
      <template
        v-for="item in items"
      >
        <status-bar-item
          :key="item.name"
          :icon="item.icon"
          :data="getItemData(item.name)"
          :show-icon="showIcons"
          :has-component="!!item.component"
          class="status-bar-item"
        >
          <template #content>
            <component
              :is="item.component"
              :icon="item.icon"
              :show-icon="showIcons"
              :short-label="true"
            />
          </template>
        </status-bar-item>
      </template>
    </div>
    <div class="right-column">
      <BackendProgress class="progress" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 2px 18px 2px 18px;
    height: var(--footer-height);
    background-color: var(--footer-bg);
    font-size: 12px;

    .left-column {
      display: flex;
      flex-direction: row;
      white-space: nowrap;
      width: 70%;
    }

    .right-column {
      width: 30%;
    }

    .status-bar-item {
      padding-right: 18px;
    }
  }
</style>
