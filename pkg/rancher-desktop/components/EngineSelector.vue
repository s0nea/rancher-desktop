<script>
import { RadioGroup } from '@rancher/components';

import RdRadioButton from '@pkg/components/form/RdRadioButton.vue';
import { ContainerEngine } from '@pkg/config/settings';

export default {
  components: { RdRadioButton, RadioGroup },
  props:      {
    containerEngine: {
      type:    String,
      default: 'containerd',
    },
    row: {
      type:    Boolean,
      default: false,
    },
    isLocked: {
      type:    Boolean,
      default: false,
    },
  },
  computed: {
    options() {
      return Object.values(ContainerEngine)
        .filter(x => x !== ContainerEngine.NONE)
        .map((x) => {
          return {
            label:       this.t(`containerEngine.options.${ x }.label`),
            value:       x,
            description: this.t(`containerEngine.options.${ x }.description`),
          };
        });
    },
    groupName() {
      return 'mountType';
    },
  },
  methods: {
    updateEngine(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<template>
  <div class="engine-selector">
    <radio-group
      :name="groupName"
      class="container-engine"
      :options="options"
      :row="row"
    >
      <template
        v-for="(option, index) in options"
        #[index]
      >
        <rd-radio-button
          :key="groupName+'-'+index"
          :name="groupName"
          :value="containerEngine"
          :val="option.value"
          :is-locked="isLocked"
          :description="option.description"
          @input="updateEngine"
        >
          <template #label>
            {{ option.label }}
          </template>
        </rd-radio-button>
      </template>
    </radio-group>
  </div>
</template>

<style lang="scss" scoped>
.container-engine::v-deep label {
  color: var(--input-label);
}
</style>
