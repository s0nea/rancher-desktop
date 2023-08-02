<script lang="ts">

import { shell } from 'electron';
import Vue from 'vue';

export default Vue.extend({
  name:  'help',
  props: {
    url: {
      type:    String,
      default: null,
    },
    tooltip: {
      type:    String,
      default: null,
    },
    disabled: {
      type:    Boolean,
      default: false,
    },
  },
  methods: {
    openUrl() {
      if (this.url) {
        shell.openExternal(this.url);
      } else {
        this.$emit('open:url');
      }
    },
  },
});
</script>

<template>
  <div class="help-button">
    <i
      v-tooltip="{
        content: tooltip,
        placement: 'left'
      }"
      class="icon icon-question-mark"
      :class="{
        disabled
      }"
      @click="openUrl"
    />
  </div>
</template>

<style lang="scss" scoped>

  .help-button {
    .icon {
      font-size: 1.3rem;
      background-color: var(--primary);
      color: var(--body-bg);
      border-radius: 50%;
      text-align: center;
      padding: 0.085rem;
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;

      &:hover {
        background: var(--primary-hover-bg);
      }
    }

    .disabled {
      background: transparent !important;
      color: var(--body-text);
      opacity: 0.2;
      cursor: default;
    }
  }
</style>
