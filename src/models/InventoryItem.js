import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class InventoryItem {
  constructor(product, quantity) {
    this.id = randomIdGenerator();
    this.product = product;
    this._quantity = quantity;
  }

  setQuantity(quantity){
    if (isNaN(quantity)){
      return false;
    } else {
      this._quantity = quantity;
      return this._quantity;
    }
  }

  addQuantity(quantity){
    if (isNaN(quantity)){
      return false;
    } else {
      this._quantity += quantity;
      return this._quantity;
    }
  }

  removeQuantity(quantity){
    if (isNaN(quantity)){
      return false;
    } else {
      this._quantity -= quantity;
      return this._quantity;
    }
  }
}
