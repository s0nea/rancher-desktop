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
    shortLabel: {
      type:    Boolean,
      default: false,
    },
  },
  data() {
    return { version: this.t('product.versionChecking') };
  },
  computed: {
    getLabel(): string {
      if (this.shortLabel) {
        return this.t('product.version').charAt(0);
      } else {
        return this.t('product.version');
      }
    },
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
        content: `<b>${ getLabel }</b>: ${ version }</div>`,
        placement: 'left',
        classes: 'tooltip-footer'
      }"
      :class="icon"
    />
    <span v-else>
      <b>{{ getLabel }}</b>: {{ version }}
    </span>
  </span>
</template>
