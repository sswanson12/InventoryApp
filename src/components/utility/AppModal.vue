<template>
<v-sheet :id="'modal' + modalId" class="appModal">
  <app-button icon="mdi-close"
              tool-tip="Close"
              tool-tip-location="left"
              :button-action="closeModal"
              id="addGoalFormCloseButton"
              class="elevation-0 px-0">
  </app-button>
  <header class="font-weight-medium appModalHeader">{{modalTitle}}</header>
  <v-form>
    <div v-for="requiredInput in requiredInputs">
      <v-input v-if="requiredInput.inputType === 'string'" v-model="requiredInput.inputName" :rules="requiredStringRules"></v-input>
      <v-input v-else-if="requiredInput.inputType === 'number'" v-model="requiredInput.inputName" :rules="requiredNumberRules"></v-input>
    </div>
    <div v-for="input in inputs">
      <v-input v-if="input.inputType === 'string'" v-model="input.inputName" :rules="stringRules"></v-input>
      <v-input v-else-if="input.inputType === 'number'" v-model="input.inputName" :rules="numberRules"></v-input>
    </div>
    <div v-for="dropdownInput in dropdownInputs">
      <v-select
        :label="dropdownInput.name"
        :items="dropdownInput.selections"
        multiple
      ></v-select>
    </div>
    <div class="d-flex flex-column">
      <app-button button-text="Submit&nbsp"
                  icon="mdi-pencil"
                  color="primary"
                  :button-action="submitForm">
      </app-button>

      <app-button button-text="Clear Form&nbsp"
                  icon="mdi-restart"
                  :button-action="clearForm"
                  color="warning"
                  class="mt-3">
      </app-button>
    </div>
  </v-form>
</v-sheet>
</template>

<script>
import {inputTypes} from "@/models/data/initData";
import AppButton from "@/components/utility/AppButton";
import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default {
  name: "AppModal",
  components: { AppButton, },
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
    requiredInputs: {
      type: Array,
    },
    inputs: {
      type: Array,
    },
    dropdownInputs: {
      type: Array,
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal", 'modal' + this.modalId)
    },
    submitForm() {
      //TODO submit form function
    },
    clearForm() {
      //TODO clear form function
    },
  },
  data: () => ({
    modalId: randomIdGenerator(),
    requiredRules: [
      value => !!value || 'Required.',
    ],
    stringRules: [
      value => (value.typeof === inputTypes.STRING) || 'Must be a string value.'
    ],
    numberRules: [
      value => (value.typeof === inputTypes.NUMBER) || 'Must be a number value.'
    ],
  }),
  computed: {
    requiredStringRules: function () {
      return [...this.requiredRules, ...this.stringRules];
    },
    requiredNumberRules: function () {
      return [...this.requiredRules, ...this.numberRules];
    }
  }
}
</script>

<style scoped>
.appModal{

}
</style>
