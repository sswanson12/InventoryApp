<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>
      <inventory :inventory="mainInventory"></inventory>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import Inventory from "@/components/Inventory";
import AppFooter from "@/components/layout/AppFooter";
import {initialInventory} from "@/models/data/initData";
export default {
  Name: "App",
  components: {AppBar, Inventory, AppFooter},
  data: function () {
    return {
      mainInventory: initialInventory,
    }
  }
}
</script>
