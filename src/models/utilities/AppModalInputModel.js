import randomIdGenerator from "@/models/utilities/randomIdGenerator";

class InventoryItemInputModel {
  constructor(inventoryItem) {
    this.id = randomIdGenerator();
    this.inventoryItem = inventoryItem;
    this.inputtedName = inventoryItem.product.name;
    this.inputtedCategories = [...inventoryItem.product.getCategories()];
    this.inputtedDescription = inventoryItem.product.description;
    this.inputtedQty = inventoryItem.quantity;
  }


}
