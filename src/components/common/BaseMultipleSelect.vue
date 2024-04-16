<template>
  <q-select
    v-model="value"
    :outlined="outlined"
    :rounded="rounded"
    class="custom-select"
    :display-value="displayOptionSelected"
    :loading="loading"
    :options="options"
    :option-label="optionLabel"
    :input-debounce="debounceWait">
    <template #append>
      <q-icon v-if="value !== null" class="cursor-pointer" name="clear" @click.stop.prevent="value = null" />
    </template>
    <template #no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </q-select>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { debounce } from 'quasar';
import { truncate } from '@/helpers/string';

export default defineComponent({
  name: 'BaseQSelect',
  props: {
    modelValue: Object,
    debounceWait: {
      type: Number,
      default: 500,
    },
    truncateLength: {
      type: Number,
      default: 25,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    displayValue: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
    },
    options: {
      type: Array,
    },
    optionLabel: {
      type: String,
      default: 'name',
    },
  },
  emits: ['update:modelValue', 'onChange'],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        emit('update:modelValue', newValue);
        debounceInput(newValue);
      },
    });
    const displayOptionSelected = computed(() => {
      return props.displayValue?.length > props.truncateLength
        ? truncate(props.displayValue, props.truncateLength)
        : props.displayValue;
    });
    const debounceInput = debounce((newValue) => {
      emit('onChange', newValue);
    }, props.debounceWait);
    return {
      value,
      displayOptionSelected,
    };
  },
});
</script>

<style lang="postcss" scoped>
.custom-select {
  width: 100%;
  :deep(.q-field__inner) {
    .q-field__marginal {
      height: 48px !important;
    }
    .q-field__control {
      border-radius: 5px;
      border: 1px solid #ddeaf3;
      background: white;
      height: 48px !important;
      min-height: unset !important;
      .q-field__native {
        min-height: unset !important;
        color: black;
        font-size: 0.925rem;
        &::placeholder {
          color: #adbcce;
          opacity: 1; /* Firefox */
        }
      }
    }
  }
}
</style>
