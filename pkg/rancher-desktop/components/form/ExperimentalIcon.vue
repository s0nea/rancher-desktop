<script>

import { EOS_MISCELLANEOUS_OUTLINED } from "eos-icons-vue2";

export default {
  components: { EOS_MISCELLANEOUS_OUTLINED }
};

</script>

<template>
    <i
      v-tooltip="{
        content: t('prefs.experimental'),
        placement: 'right',
      }"
      class="icon-experimental"
    >
      <EOS_MISCELLANEOUS_OUTLINED
        color="var(--body-text)"/>
    </i>
</template>

<style scoped>
  .icon-experimental {
    position: relative;
    top: 1px;
  }
</style>
