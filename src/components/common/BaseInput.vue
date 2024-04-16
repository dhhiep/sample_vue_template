<template>
  <q-input
    v-bind="$attrs"
    v-model="value"
    :class="{ 'required-label': showRequiredLabel }"
    bg-color="#fff"
    outlined
    :label="label === undefined ? name : label"
    :placeholder="placeholder">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </q-input>
  <ul v-if="showErrors && meta.dirty && errors.length > 0">
    <li v-for="(error, i) in errors" :key="`${error}_${i}`" class="text-danger text-xs my-1">
      {{ error }}
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
      default: 'md',
    },
    label: {
      type: String,
      default: '',
    },
    showRequiredLabel: {
      type: Boolean,
      default: false,
    },
    showErrors: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { value, meta, errors } = useField(props.name);
    return {
      value,
      meta,
      errors,
    };
  },
});
</script>

<style lang="postcss" scoped>
:deep(.q-field) {
  &__control {
    @apply h-[40px]
        !rounded-[4px]
        before:!border-solid
        before:!border-light-silver;
  }
  &__marginal {
    @apply h-[40px];
  }
  &__control-container {
    @apply relative;
  }

  &__native {
    @apply p-0 text-base text-sm;
  }

  &__label {
    @apply absolute
        top-[0]
        z-10
        -translate-y-1/2
        transform
        bg-[#fff]
        text-base
        text-xs
        text-disabled;
  }

  &--float .q-field__label {
    @apply top-[35%] font-bold text-granite-gray;
  }
}
</style>
