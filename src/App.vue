<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
export default {
  Name: "App",
  components: {AppBar}
}
</script>
