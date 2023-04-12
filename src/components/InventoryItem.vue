<template>
<v-card class="inventoryItem">
  <v-card-title></v-card-title>
</v-card>
</template>

<script>
import InventoryItem from "@/models/InventoryItem";

export default {
  name: "InventoryItem",
  props: {
    inventoryItem: {
      type: InventoryItem,
      required: true,
    }
  }
}
</script>

<style scoped>
.inventoryItem{

}

</style>
