<template>
  <div>
    <v-card :id="'inventoryItem-' + inventoryItem.id" class="inventoryItem">
      <v-card-title>{{inventoryItem.product.name}}</v-card-title>
      <v-card-subtitle>{{inventoryItem.product.productCategoriesString()}}</v-card-subtitle>
      <v-card-text>
        <div>{{inventoryItem.product.description}}</div>
        <div>{{inventoryItem.quantity}}</div>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <app-button :id="'editButton-' + inventoryItem.id"
                    icon="mdi-pencil"
                    tool-tip="Edit"
                    tool-tip-location="bottom"
                    :button-action="editItem">
        </app-button>
        <app-button :id="'deleteButton-' + inventoryItem.id"
                    icon="mdi-delete"
                    tool-tip="Delete"
                    tool-tip-location="bottom"
                    :button-action="deleteItem">
        </app-button>
      </v-card-actions>
    </v-card>
    <app-modal :modal-title="'Editing -' + inventoryItem.product.name"
               :required-inputs="requiredInputs"
               :inputs="nonRequiredInputs"
    ></app-modal>
  </div>
</template>

<script>
import InventoryItem from "@/models/InventoryItem";
import AppButton from "@/components/utility/AppButton";
import AppModal from "@/components/utility/AppModal";
import {StringInputModel} from "@/models/utilities/AppModalInputModel";

export default {
  name: "InventoryItem",
  emits: ["delete-item"],
  components: { AppButton, AppModal},
  props: {
    inventoryItem: {
      type: InventoryItem,
      required: true,
    }
  },
  methods: {
    editItem: function() {
      //TODO
    },
    deleteItem: function() {
      //TODO
    }
  },
  data: function() {
    return{
      requiredInputs: [new StringInputModel()],
      nonRequiredInputs: {

      },
    }
  }
}
</script>

<style scoped>
.inventoryItem{

}

</style>
