<template>
  <q-select v-bind="$attrs" v-model="value" :class="{ 'required-label': showRequiredLabel }" outlined />
</template>

<script>
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
  name: 'BaseSelect',
  props: {
    name: {
      type: String,
      required: true,
    },
    showRequiredLabel: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { value } = useField(props.name);

    return {
      value,
    };
  },
});
</script>

<style lang="postcss" scoped>
:deep(.q-field) {
  &__control {
    @apply h-[42px]
        min-h-[42px]
        before:!border-solid before:!border-light-silver;
  }

  &__marginal {
    @apply h-[42px];
  }

  &__native {
    @apply min-h-[42px] text-sm md:text-base;
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
