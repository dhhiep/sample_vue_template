<template>
  <div class="search-input">
    <q-input
      v-model="keyword"
      :outlined="outlined"
      :class="{ 'required-label': showRequiredLabel }"
      :label="label === undefined ? name : label"
      :placeholder="placeholder"
      :debounce="debounceWait">
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps || {}" />
      </template>
    </q-input>
    <template v-if="showList">
      <q-list
        v-if="options.length > 0"
        class="shadow-md absolute w-full z-10 bg-white max-h-[300px] overflow-y-auto pb-5">
        <q-item v-for="option in options" :key="option.id" clickable @click="onSelectItem(option)">
          <q-item-section>{{ option[optionLabel] }}</q-item-section>
        </q-item>
      </q-list>
      <q-item v-else>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  name: 'BaseSearchAutosuggestion',
  props: {
    debounceWait: {
      type: Number,
      default: 500,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    showRequiredLabel: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    options: Array,
    optionLabel: {
      type: String,
    },
  },
  emits: ['search', 'select'],
  setup(props, { emit }) {
    const keyword = ref('');
    const currentSelectedItem = ref('');
    const showList = ref(true);

    const onSelectItem = (item) => {
      emit('select', item);
      showList.value = false;
      keyword.value = item[props.optionLabel];
      currentSelectedItem.value = item[props.optionLabel];
    };

    watchEffect(() => {
      if (keyword.value.length > 0 && keyword.value !== currentSelectedItem.value) {
        showList.value = true;
        emit('search', keyword.value);
      } else {
        showList.value = false;
      }
    });

    return {
      keyword,
      onSelectItem,
      showList,
    };
  },
});
</script>

<style lang="postcss" scoped>
.search-input {
  width: 100%;
  position: relative;
  :deep(.q-field) {
    &__control {
      @apply !rounded-[4px]
        before:!border-solid
        before:!border-light-silver;
    }
    &__native {
      @apply p-0 text-lg leading-6;
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
  }
}
</style>
