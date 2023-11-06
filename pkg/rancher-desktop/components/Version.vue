<script lang="ts">
import Vue from 'vue';

import { ipcRenderer } from '@pkg/utils/ipcRenderer';

export default Vue.extend({
  props: {
    icon: {
      type:    String,
      default: '',
    },
    showIcon: {
      type:    Boolean,
      default: false,
    },
  },
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
    <i
      v-if="icon && showIcon"
      v-tooltip="{
        content: `<b> ${ t('product.version') } </b>: ${ version }`,
        placement: 'left'
      }"
      :class="icon"
    />
    <span v-else>
      <b v-html="t('product.version')"></b> {{ version }}
    </span>
  </span>
</template>
