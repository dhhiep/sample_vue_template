<template>
  <q-layout view="lHh Lpr lFf" class="overflow-hidden">
    <q-drawer v-model="leftDrawerOpen" show-if-above :breakpoint="400">
      <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="30px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
        </div>
      </q-img>

      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Inbox </q-item-section>
          </q-item>

          <q-item v-ripple active clickable>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Star </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Send </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Drafts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="flex w-full">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(true);
</script>

<style lang="scss" scoped>
.q-btn {
  &::before {
    box-shadow: none;
  }
}
</style>
