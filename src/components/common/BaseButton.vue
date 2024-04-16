<template>
  <q-skeleton v-if="skeleton" type="QBtn" width="100%" />
  <q-btn v-else v-bind="$attrs" :class="{ 'w-full': fullWidth }" color="primary">
    <slot name="default" />
    <template #loading>
      <q-spinner-tail color="white" size="1.5rem" />
    </template>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    fullWidth: Boolean,
    skeleton: Boolean,
  },
});
</script>

<style lang="postcss" scoped>
.q-btn .q-icon {
  @apply text-sm;
}

.q-btn {
  @apply min-h-[42px] font-opensans text-base normal-case;
}
.q-btn.bg-primary {
  @apply !bg-primary-dark;
}

.q-skeleton {
  @apply rounded-full;
}
</style>
