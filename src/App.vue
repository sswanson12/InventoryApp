<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>
      <inventory></inventory>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import Inventory from "@/components/Inventory";
export default {
  Name: "App",
  components: {AppBar, Inventory, AppFooter}
}
</script>
