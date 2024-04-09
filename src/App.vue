<template>
  <div id="app">
    <router-view :key="$route.fullPath" v-slot="{ Component }" class="h-full w-full">
      <transition enter-active-class="animated fadeIn" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
