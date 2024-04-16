<template>
  <div v-if="plain" class="flex items-start font-semibold leading-tight text-primary">
    <q-icon v-if="icon" :name="icon" class="mt-[2px] mr-2" />
    <div>
      <slot />
    </div>
  </div>
  <q-banner v-else :class="`banner-${type}`" class="min-h-9 px-3 text-white" rounded dense>
    <div class="flex items-center space-x-1">
      <q-icon v-if="icon" :name="icon" size="1rem" />
      <span class="font-bold text-xs sm:text-sm">
        <slot />
      </span>
    </div>
  </q-banner>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseAlert',
  props: {
    type: {
      type: String,
      default: 'danger',
      validator: (value) => ['success', 'danger', 'warning', 'info'].includes(value),
    },
    icon: {
      type: String,
      default: 'error',
    },
    plain: Boolean,
  },
});
</script>

<style lang="postcss" scoped>
.banner-success {
  @apply bg-success;
}
.banner-danger {
  @apply bg-primary;
}
.banner-warning {
  @apply bg-tuscany;
}
.banner-info {
  @apply bg-info;
}
</style>
