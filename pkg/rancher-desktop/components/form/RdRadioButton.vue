<script lang="ts">
import { RadioButton } from '@rancher/components';
import Vue from 'vue';

export default Vue.extend({
  name:         'rd-radio-button',
  components:   { RadioButton },
  inheritAttrs: false,
  props:        {
    isLocked: {
      type:    Boolean,
      default: false,
    },
    tooltip: {
      type:    String,
      default: null,
    },
  },
});
</script>

<template>
  <radio-button
    v-tooltip="{ content: tooltip }"
    :disabled="$attrs.disabled || isLocked"
    :class="{ 'locked' : isLocked && !$attrs.disabled }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template
      v-for="(_, name) in $slots"
      #[name]
    >
      <slot :name="name" />
    </template>
  </radio-button>
</template>

<style lang="scss" scoped>
  .locked.radio-container::v-deep span.radio-custom {
    &[aria-checked="true"] {
      opacity: 1;
    }

    &:not([aria-checked="true"]) {
      opacity: 1;
      background-color: var(--radio-locked-bg);
      box-shadow: var(--radio-locked-shadow);
    }
  }
</style>
