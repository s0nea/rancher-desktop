<script lang="ts">
import Vue from 'vue';

import { ipcRenderer } from '@pkg/utils/ipcRenderer';

export default Vue.extend({
  data() {
    return { version: this.t('product.versionChecking') };
  },

  mounted() {
    ipcRenderer.on('get-app-version', (event, version) => {
      this.$data.version = version;
    });
    ipcRenderer.send('get-app-version');
  },
});
</script>

<template>
  <span class="versionInfo">
    <b v-html="t('product.version')"></b> {{ version }}
  </span>
</template>

<style scoped lang="scss">

</style>
