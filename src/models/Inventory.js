import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class Inventory {
  constructor(name) {
    this.id = randomIdGenerator();
    this._name = name;
    //Designed to hold a list of the InventoryItem class.
    this._inventory = [];
  }

  getInventory(){
    return this._inventory;
  }

  addItem(inventoryItem){
    //TODO implement validation
    this._inventory.push(inventoryItem);
  }

  removeItem(inventoryItem){
    this._inventory.splice(this._inventory.indexOf(inventoryItem), 1);
  }
}


