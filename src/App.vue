<template>
  <router-view :key="$route.fullPath" v-slot="{ Component }" class="h-full w-full">
    <transition enter-active-class="animated fadeIn" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>
