import InventoryItem from "@/models/Product";

export default function noArgsInventoryItemFactory(){
  return new InventoryItem("", [], "", -1);
}
