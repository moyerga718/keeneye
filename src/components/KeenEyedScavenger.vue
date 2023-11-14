<template>
  <div>
    <!-- TITLE -->
    <h1>KEEN EYED SCAVENGER</h1>
    <!-- INPUTS -->
    <div class="d-flex">
      <!-- BOD COUNT -->
      <div class="w-50">
        <p class="p-0 m-0">Bod Count</p>
        <b-form-input type="number" v-model.number="keenEyeStore.bods"/> 
      </div>
      <!-- PROFICIENCY -->
      <div class=" w-50">
        <p class="p-0 m-0">Proficiency</p>
        <b-form-input type="number" v-model.number="keenEyeStore.proficiency"/> 
      </div>
    </div>
    <div class="d-flex my-2 align-items-center">
      <b-form-checkbox class="" size="md" v-model="keenEyeStore.upgraded"/>
      <p class="p-0 my-0">Upgraded</p>
    </div>
    <!-- BUTTON AND ROLL DIV -->
    <div class="d-flex align-items-center w-100">
      <!-- CALC BUTTON -->
      <b-button class="my-3" variant="success" @click="keenEyeStore.runKeenEyedScavenger">GO!</b-button>
      <!-- ROLLS -->
      <div class="ml-5 d-flex align-items-center">
        <div v-for="roll in keenEyeStore.allFlatRolls" :key="`roll-${keenEyeStore.allFlatRolls.indexOf(roll)}`">
          <RollMarker :roll="roll" :positionInArray="keenEyeStore.allFlatRolls.indexOf(roll)"/>
        </div>
      </div>
    </div>
  
    <!-- RESULT DIV-->
    <div v-if="keenEyeStore.foundItems.length" class="border mt-5 p-3 d-flex justify-content-between">
      <!-- ITEM LIST -->
      <div>
        <div v-for="item in keenEyeStore.foundItems" :key="`item-${item.code}`">
          <p>{{item.name}}: {{ item.quantity }}</p>
        </div>
      </div>
      <!-- TOTAL # OF ITEMS -->
      <div class="text-end">
        <p class="p-0 m-0">Found items: {{ keenEyeStore.totalItems }}</p>
        <p class="p-0 m-0">Items to choose: {{ keenEyeStore.crits * keenEyeStore.critReward }}</p>
        <p class="p-0 m-0">Total: {{ keenEyeStore.totalItems + (keenEyeStore.crits * keenEyeStore.critReward) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useKeeneyeStore } from '../stores/keeneye'
import RollMarker from './RollMarker.vue'

export default defineComponent({
  name: "KeenEyedScavenger",
  components: {
    RollMarker
  },
  setup() {
    // EVERYTHING IS IN THE STORE
    const keenEyeStore = useKeeneyeStore()

    return {
      keenEyeStore
    }
  }
})
</script>
