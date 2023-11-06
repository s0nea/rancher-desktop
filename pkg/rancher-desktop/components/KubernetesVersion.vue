<script lang="ts">

import Vue from 'vue';

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
  computed: {
    kubernetesVersion(): string {
      return this.preferences.kubernetes.version;
    },
  },
});
</script>

<template>
  <span class="versionInfo">
    <i
      v-if="icon && showIcon"
      v-tooltip="{
        content: `<b> ${ t('product.kubernetesVersion') } </b>: ${ kubernetesVersion }`,
        placement: 'left'
      }"
      :class="icon"
    />
    <span v-else>
      <b v-html="t('product.kubernetesVersion')"></b> {{ kubernetesVersion }}
    </span>
  </span>
</template>
