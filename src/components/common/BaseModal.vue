<template>
  <q-dialog v-model="showModal" class="base-modal">
    <div class="form-container !w-full" :style="{ maxWidth: `${width || 600}px` }">
      <header class="form-header flex justify-between">
        <span v-if="title">{{ title }}</span>
        <q-btn v-close-popup icon="close" class="base-modal__close" dense flat rounded> </q-btn>
      </header>
      <div class="form-body">
        <slot />
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseModal',
  props: {
    modelValue: Boolean,
    title: {
      type: String,
      default: '',
    },
    width: [String, Number],
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const showModal = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        emit('update:modelValue', newValue);
      },
    });

    return {
      showModal,
    };
  },
});
</script>

<style lang="postcss" scoped>
.base-modal {
  &__content {
    @apply !w-full;
  }

  &__header {
    @apply flex items-center justify-between px-4 py-2;
  }

  &__title {
    @apply mb-0 text-primary;
  }

  &__close {
    @apply !min-h-[initial] p-0 text-gray before:!shadow-none;
  }

  &__body {
    @apply px-4 pb-4 pt-1;
  }
}
</style>
