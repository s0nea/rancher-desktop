<script lang="ts">
import { RadioGroup } from '@rancher/components';
import Vue from 'vue';

import RdRadioButton from '@pkg/components/form/RdRadioButton.vue';
import { PathManagementStrategy } from '@pkg/integrations/pathManager';

interface pathManagementOptions {
  label: string,
  value: PathManagementStrategy,
  description: string
}

export default Vue.extend({
  components: {
    RdRadioButton,
    RadioGroup,
  },
  props: {
    value: {
      type:    String,
      default: PathManagementStrategy.RcFiles,
    },
    row: {
      type:    Boolean,
      default: false,
    },
    showLabel: {
      type:    Boolean,
      default: true,
    },
    isLocked: {
      type:    Boolean,
      default: false,
    },
  },
  computed: {
    options(): pathManagementOptions[] {
      return [
        {
          label:       this.t('pathManagement.options.rcFiles.label'),
          value:       PathManagementStrategy.RcFiles,
          description: this.t('pathManagement.options.rcFiles.description', { }, true),
        },
        {
          label:       this.t('pathManagement.options.manual.label'),
          value:       PathManagementStrategy.Manual,
          description: this.t('pathManagement.options.manual.description', { }, true),
        },
      ];
    },
    groupName(): string {
      return 'pathManagement';
    },
    label(): string {
      return this.showLabel ? this.t('pathManagement.label') : '';
    },
    tooltip(): string {
      return this.showLabel ? this.t('pathManagement.tooltip', { }, true) : '';
    },
  },
  methods: {
    updateVal(value: PathManagementStrategy) {
      this.$emit('input', value);
    },
  },
});
</script>

<template>
  <radio-group
    :name="groupName"
    :tooltip="tooltip"
    :options="options"
    :row="row"
    class="path-management"
  >
    <template v-if="showLabel" #label>
      <slot name="label" />
    </template>
    <template
      v-for="(option, index) in options"
      #[index]
    >
      <rd-radio-button
        :key="groupName+'-'+index"
        :name="groupName"
        :value="value"
        :label="option.label"
        :val="option.value"
        :is-locked="isLocked"
        @input="updateVal"
      >
        <template #description>
          <span v-html="option.description" />
        </template>
      </rd-radio-button>
    </template>
  </radio-group>
</template>

<style lang="scss" scoped>
.path-management::v-deep code {
  user-select: text;
  cursor: text;
  padding: 2px;
}

.path-management::v-deep label {
  color: var(--input-label);
}
</style>
