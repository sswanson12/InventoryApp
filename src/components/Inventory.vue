<template>
<v-sheet class="inventory">
  <div class="filter-sort-search">
    <app-button button-name="resetQueryButton"
                button-size="large"
                icon="mdi-restart"
                tool-tip="Reset Filters"
                tool-tip-location="bottom"
                class="filter-sort-search-button"
                :button-action="resetFilters">
    </app-button>
    <v-autocomplete
      class="filter-sort-bar"
      label="Filter By"
      :items="productCategories"
      multiple
      v-model="filteredCategories"
      variant="solo"
      persistent-clear
    ></v-autocomplete>
    <v-autocomplete
      class="filter-sort-bar"
      label="Sort By"
      :items="[sortCategories.NAME, sortCategories.QTY]"
      v-model="sortedBy"
      variant="solo"
    ></v-autocomplete>
    <v-text-field
      class="search-bar"
      label="Search"
      v-model="searchString">
    </v-text-field>
    <app-button button-name="searchButton"
                button-size="large"
                icon="mdi-magnify"
                tool-tip="Search"
                tool-tip-location="bottom"
                class="filter-sort-search-button">
    </app-button>
  </div>

  <div v-for="inventoryItem in currentlyShownItems">
    <div class="item-container">
      <inventory-item @delete-item="deleteItem" @edit-item="openEditModal" class="inventory-item" :inventory-item="inventoryItem"></inventory-item>
    </div>
    <edit-modal :inventory-item="inventoryItem"></edit-modal>
  </div>

  <div class="addItemButtonContainer">
    <app-button class="bg-primary rounded-circle d-block float-end"
                icon="mdi-plus"
                button-size="xxx-large"
                tool-tip="Add new inventory items!"
                tool-tip-location="left"
                :button-action="openAddItemModal">
    </app-button>
    <add-item-modal></add-item-modal>
  </div>
</v-sheet>
</template>

<script>
import InventoryItem from "@/components/InventoryItem";
import Inventory from "@/models/Inventory";
import AppButton from "@/components/utility/AppButton";
import {productCategoriesArray} from "@/models/data/initData";
import EditModal from "@/components/EditModal";
import AddItemModal from "@/components/AddItemModal";

export default {
  name: "Inventory",
  components: {EditModal, InventoryItem, AppButton, AddItemModal },
  props: {
    inventory: {
      type: Inventory,
      required: true,
    }
  },
  data: function() {
    return{
      searchString: '',
      shownItems: [...this.inventory.getInventory()],
      productCategories: productCategoriesArray,
      sortCategories: { NAME: 'name', QTY: 'quantity'},
      filteredCategories: [],
      sortedBy: '',
    }
  },
  methods: {
    resetFilters: function() {
      this.filteredCategories = [];
      this.sortedBy = '';
      this.searchString = '';
      this.shownItems = [...this.inventory.getInventory()]
    },
    deleteItem(item){
      console.log('Removing item: ', item);
      this.inventory.removeItem(item);
      this.shownItems = [...this.inventory.getInventory()];
    },
    openEditModal(item){
      console.log('Editing item: ', item);
      document.getElementById('editModal' + item.id).style.display = "block";
    },
    openAddItemModal(){
      document.getElementById('addItemModal').style.display = "block";
    }
  },
  computed: {
    currentlyShownItems(){
      return this.shownItems.filter((item) => {
        return item.product.name.toLowerCase().includes(this.searchString.toLowerCase())
          || item.product.description.toLowerCase().includes(this.searchString.toLowerCase());
      }).sort((a,b) => {
        if (this.sortedBy === this.sortCategories.NAME){
          if(a.product.name.toLowerCase() < b.product.name.toLowerCase()){
            return -1;
          }else if(a.product.name.toLowerCase() > b.product.name.toLowerCase()){
            return 1;
          }
          return 0;
        } else if (this.sortedBy === this.sortCategories.QTY){
          if(a.quantity < b.quantity){
            return -1;
          }else if(a.quantity > b.quantity){
            return 1;
          }
          return 0;
        }
        return 0;
      })
    }
  }
}
</script>

<style scoped>
.inventory{
  min-height: 85vh;
}

.filter-sort-search{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  max-height: 60px;
}

.filter-sort-search-button{
  margin-top: 7px;
}

.filter-sort-bar{
  max-width: 150px;
  margin-left: 5px;
}

.search-bar{
  max-width: 300px;
  margin-right: 5px;
  margin-left: 5px;
}

.item-container{
  display: flex;
  justify-content: center;
  flex-flow: nowrap row;
}

.addItemButtonContainer{
  position: fixed;
  right: 1vw;
  top: 10vh;
  margin-right: 5px;
}

.inventory-item{
  height: fit-content;
  width: 400px;
  margin: 10px;
  z-index: 0;
}
</style>
