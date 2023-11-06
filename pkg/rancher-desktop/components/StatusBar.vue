<script lang="ts">
import Vue from 'vue';

import BackendProgress from '@pkg/components/BackendProgress.vue';
import NetworkStatus from '@pkg/components/NetworkStatus.vue';
import Version from '@pkg/components/Version.vue';

export default Vue.extend({
  components: { BackendProgress },
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
          name: 'kubernetesVersion', component: null, icon: '',
        },
      ],
      showIcons: false,
    };
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
  },
});
</script>

<template>
  <footer>
    <div class="left-column">
      <div
        v-for="item in items"
        :key="item.name"
        class="status-bar-item"
      >
        <component
          :is="item.component"
          :icon="item.icon"
          :show-icon="showIcons"
        />
      </div>
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
