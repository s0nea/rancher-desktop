<script lang="ts">
import os from 'os';

import {BadgeState, RadioButton, RadioGroup} from '@rancher/components';
import Vue from 'vue';

import RdFieldset from '~/components/form/RdFieldset.vue';
import {
  CacheMode, MountType, ProtocolVersion, SecurityModel, Settings,
} from '~/config/settings';

import type { PropType } from 'vue';

export default Vue.extend({
  components: { RadioGroup, RdFieldset, RadioButton, BadgeState },
  props:      {
    preferences: {
      type:     Object as PropType<Settings>,
      required: true,
    },
  },
  data() {
    return {
      mountType:       this.preferences.experimental.virtualMachine.mount.type,
      cacheMode:       this.preferences.experimental.virtualMachine.mount['9p'].cacheMode,
      mSizeInKb:       this.preferences.experimental.virtualMachine.mount['9p'].msizeInKB,
      protocolVersion: this.preferences.experimental.virtualMachine.mount['9p'].protocolVersion,
      securityModel:   this.preferences.experimental.virtualMachine.mount['9p'].securityModel,
    };
  },
  computed: {
    options() {
      const firstOption = 'reverse-sshfs';
      return Object.values(MountType)
        .filter((x) => {
          if (x === MountType.VIRTIOFS) {
            return os.platform() === 'darwin';
          }

          return true;
        })
        .sort((x, y) => {
          return x === firstOption ? -1 : y === firstOption ? 1 : 0;
        })
        .map((x) => {
          return {
            label:       this.t(`virtualMachine.mount.type.options.${ x }.label`),
            value:       x,
            description: this.t(`virtualMachine.mount.type.options.${ x }.description`, {}, true),
          };
        });
    },
    groupName() {
      return 'mountType';
    },
    ninePSelected(): boolean {
      return this.mountType === MountType.NINEP;
    },
  },
  methods: {
    ninePOptions(setting: string) {
      let items: CacheMode[] | ProtocolVersion[] | SecurityModel[] = [];

      switch (setting) {
      case 'cacheMode':
        items = Object.values(CacheMode);
        break;
      case 'protocolVersion':
        items = Object.values(ProtocolVersion);
        break;
      case 'securityModel':
        items = Object.values(SecurityModel);
        break;
      }

      return items
        .map((x) => {
          return {
            label: this.t(`virtualMachine.mount.type.options.9p.options.${ setting }.options.${ x.replace('.', '') }`),
            value: x,
          };
        });
    },
    updateVal(value: MountType) {
      this.$emit('change', value);
    },
  },
});
</script>

<template>
  <div class="mount-type-selector">
    <div class="row">
      <div class="col span-6">
        <rd-fieldset
          data-test="mountType"
          :legend-text="t('virtualMachine.mount.type.legend')"
        >
          <radio-group
            v-model="mountType"
            :name="groupName"
            :options="options"
            @input="updateVal"
          >
            <template #0="{ option, index, mode }">
              <radio-button
                :key="groupName+'-'+index"
                :name="groupName"
                :value="mountType"
                :label="option.label"
                :val="option.value"
                :description="option.description"
                :mode="mode"
                v-on="$listeners"
              >
                <template #label>
                  {{ option.label }}
                  <sup>
                    <badge-state
                      color="bg-info"
                      class="experimental-badge"
                      label="Experimental"
                    />
                  </sup>
                </template>
              </radio-button>
            </template>
          </radio-group>
        </rd-fieldset>
      </div>
      <div
        v-if="ninePSelected"
        class="col span-6 mount-type-sub-options"
      >
        <rd-fieldset
          data-test="mountType"
          class="width-sub-options"
          :legend-text="t('virtualMachine.mount.type.options.9p.options.cacheMode.legend')"
        >
          <select
            v-model="cacheMode"
          >
            <option
              v-for="item in ninePOptions('cacheMode')"
              :key="item.label"
              :value="item.value"
              :selected="item.value === cacheMode"
            >
              {{ item.label }}
            </option>
          </select>
        </rd-fieldset>
        <rd-fieldset
          data-test="msizeInKb"
          class="width-sub-options"
          :legend-text="t('virtualMachine.mount.type.options.9p.options.mSizeInKb.legend')"
        >
          <input
            v-model="mSizeInKb"
            type="number"
          />
        </rd-fieldset>
        <rd-fieldset
          data-test="protocolVersion"
          class="width-sub-options"
          :legend-text="t('virtualMachine.mount.type.options.9p.options.protocolVersion.legend')"
        >
          <select
            v-model="protocolVersion"
          >
            <option
              v-for="item in ninePOptions('protocolVersion')"
              :key="item.label"
              :value="item.value"
              :selected="item.value === protocolVersion"
            >
              {{ item.label }}
            </option>
          </select>
        </rd-fieldset>
        <rd-fieldset
          data-test="securityModel"
          class="width-sub-options"
          :legend-text="t('virtualMachine.mount.type.options.9p.options.securityModel.legend')"
        >
          <select
            v-model="securityModel"
          >
            <option
              v-for="item in ninePOptions('securityModel')"
              :key="item.label"
              :value="item.value"
              :selected="item.value === securityModel"
            >
              {{ item.label }}
            </option>
          </select>
        </rd-fieldset>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experimental-badge {
  line-height: initial;
  letter-spacing: initial;
  font-size: 0.7rem;
}

.mount-type-sub-options {
  border-left: 1px solid var(--border);
  padding-left: 1rem;
  padding-top: 0.6rem;
  display: flex;
  flex-direction: column;
}

.width-sub-options {
  max-width: 20rem;
  min-width: 20rem;
  padding-bottom: 0.8rem;
}
</style>
