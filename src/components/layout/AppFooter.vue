<template>
  <v-footer class="bg-primary text-center d-flex flex-column elevation-5 pt-6">

    <div class="pt-0">
      “Make a bucket list and fill it with dreams that have no boundaries.”<br>—Annette White
    </div>

    <v-divider></v-divider>
    <br>

    <div>
      {{ new Date().getFullYear() }} — <strong>Samuel Swanson</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
name: "AppFooter"
}
</script>

<style scoped>

</style>
