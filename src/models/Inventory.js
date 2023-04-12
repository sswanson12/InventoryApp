import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class Inventory {
  constructor(name) {
    this.id = randomIdGenerator();
    this._name = name;
    //Designed to hold a list of the InventoryItem class.
    this.inventory = [];
  }

  addItem(inventoryItem){
    this.inventory.push(inventoryItem);
  }

  removeItem(inventoryItem){
    this.inventory.splice(this.inventory.indexOf(inventoryItem), 1);
  }
}


