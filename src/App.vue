<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';

const { theme } = storeToRefs(useUserStore())
const { toggleTheme } = useUserStore()

</script>

<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-btn href="/">
        <v-app-bar-title>My App </v-app-bar-title>
      </v-btn>
      <v-spacer>  </v-spacer>
      <v-btn href="/about">About</v-btn>
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="toggleTheme"
      />
      <v-btn>
        <v-avatar>
          <v-img src="https://www.melivecode.com/users/1.png"/>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <RouterView />
  </v-app>
</template>


