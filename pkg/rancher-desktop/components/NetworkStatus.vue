<script>
import { ipcRenderer } from '@pkg/utils/ipcRenderer';
import { networkStatus } from '@pkg/utils/networks';

export default {
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
    return { networkStatus: true };
  },
  computed: {
    networkStatusLabel() {
      return this.networkStatus ? networkStatus.CONNECTED : networkStatus.OFFLINE;
    },
  },
  mounted() {
    this.onNetworkStatusUpdate(window.navigator.onLine);

    ipcRenderer.on('update-network-status', (event, status) => {
      this.onNetworkStatusUpdate(status);
    });
    window.addEventListener('online', () => {
      this.onNetworkStatusUpdate(true);
    });
    window.addEventListener('offline', () => {
      this.onNetworkStatusUpdate(false);
    });
    // This event is triggered when the Preferences page is revealed (among other times).
    // If the network status changed while the window was closed, this will update it.
    window.addEventListener('pageshow', () => {
      this.onNetworkStatusUpdate(window.navigator.onLine);
    });
  },

  methods: {
    onNetworkStatusUpdate(status) {
      this.$data.networkStatus = status;
    },
  },
};
</script>

<template>
  <span class="networkStatusInfo">
    <i
      v-if="icon && showIcon"
      v-tooltip="{
        content: `<b>${ t('product.networkStatus') }</b>: ${ networkStatusLabel }`,
        placement: 'left',
        classes: 'tooltip-footer'
      }"
      :class="icon"
    />
    <span v-else>
      <b v-html="t('product.networkStatus')"></b>: {{ networkStatusLabel }}
    </span>
  </span>
</template>
