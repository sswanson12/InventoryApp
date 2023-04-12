import randomIdGenerator from "@/models/utilities/randomIdGenerator";
import {inputTypes} from "@/models/data/initData";

class AppModalInputModel {
  constructor(inputName, inputType, isRequired) {
    this.id = randomIdGenerator();
    this.inputName = inputName;
    this.inputType = inputType;
  }
}

class StringInputModel extends AppModalInputModel {
  constructor(inputName) {
    super(inputName, inputTypes.STRING);
  }
}

class NumberInputModel extends AppModalInputModel {
  constructor(inputName) {
    super(inputName, inputTypes.NUMBER);
  }
}

class DropdownInputModel extends AppModalInputModel {
  constructor(inputName, selections) {
    super(inputName, inputTypes.DROPDOWN);
    this.selections = selections;
  }
}

export {AppModalInputModel, StringInputModel, NumberInputModel, DropdownInputModel};
