<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    data: {
      type:    Object as PropType<{ label: string, value: string }>,
      default: null,
    },
    icon: {
      type:     String,
      required: true,
    },
    showIcon: {
      type:     Boolean,
      required: true,
    },
    hasComponent: {
      type:     Boolean,
      required: true,
    },
  },
});
</script>

<template>
  <div
    v-if="hasComponent || data"
    class="item"
  >
    <span v-if="!hasComponent">
      <i
        v-if="showIcon"
        v-tooltip="{
          content: `<b>${ t(data.label) }</b>: ${ data.value }`,
          placement: 'left',
          classes: 'tooltip-footer',
        }"
        :class="icon"
      />
      <span v-else>
        <b v-html="t(data.label)"></b>: {{ data.value }}
      </span>
    </span>
    <slot v-else name="content"></slot>
  </div>
</template>
