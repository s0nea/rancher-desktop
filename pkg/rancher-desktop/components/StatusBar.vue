<script lang="ts">
import Vue from 'vue';

import BackendProgress from '@pkg/components/BackendProgress.vue';

export default Vue.extend({ components: { BackendProgress } });
</script>

<template>
  <footer>
    <div class="left-column"></div>
    <div class="right-column">
      <BackendProgress class="progress" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    display: flex;
    flex-direction: row;
    padding: 2px 18px 2px 18px;
    height: var(--footer-height);
    background-color: var(--footer-bg);

    .left-column {
      width: 70%;
    }

    .right-column {
      width: 30%;
    }
  }
</style>
