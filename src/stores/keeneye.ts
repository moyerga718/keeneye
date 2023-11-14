import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { IConsumableItem } from '@/constants'
import { ITEM_TYPES } from '@/constants'

export const useKeeneyeStore = defineStore('keeneye', () => {
  const proficiency = ref<number>(4)
  const usedProficiency = ref<number>(0)
  const allFlatRolls = ref<number[]>([])
  const numItemsFoundByBod = ref<number[]>([])
  const crits = ref<number>(0)
  const bods = ref<number>(0)
  const totalItems = ref<number>(0)
  const foundItems = ref<IConsumableItem[]>([])
  const upgraded = ref<boolean>(false);

  const divisor = ref<number>(5)
  const maxFindableItems = ref<number>(4)
  const critReward = ref<number>(5)

  watch(upgraded, (newVal) => {
    if (newVal.valueOf()) {
      divisor.value = 4;
      maxFindableItems.value = 5;
      critReward.value = 6;
    } else {
      divisor.value = 5;
      maxFindableItems.value = 4;
      critReward.value = 5;
    }
  })

  /**
   * Roll a d20.
   * @returns {number} A random number between 1 and 20.
   */
  function rollD20 () {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  }

  /**
   * Calculate the # of items found on a body by rolling a d20 + int mod.
   * If the roll is a 20, return 0 and increment crits.
   * Return X/5 rounded up, with a minimum of 1 and a maximum of 4. 
   * @returns 
   */
  function calculateItemsOnBody () {
    const roll = rollD20();
    allFlatRolls.value.push(roll);
    if (roll === 20) {
      crits.value += 1;
      return 0;
    }
    const result = (roll + proficiency.value);
    const dividedResult = result / divisor.value;
    if (dividedResult < 1) return 1;
    if (dividedResult > maxFindableItems.value) return maxFindableItems.value;
    return Math.ceil(dividedResult);
  }

  /**
   * Calculate the total number of items found on several bods.
   * Run calculateItemsOnBody() for each bod.
   * Add the result to totalItems.
   * @returns 
   */
  function calculateTotalItems() {
    for (let i = 0; i < bods.value; i++) {
      const numItemsFound = calculateItemsOnBody();
      numItemsFoundByBod.value.push(numItemsFound);
      totalItems.value += numItemsFound;
    }
  }

  /**
   * Update the foundItems array with the item found.
   * If the item is already in the array, increment the quantity.
   * @param item 
   */
  function updateInventory(item: IConsumableItem) {
    const foundItem = foundItems.value.find((i => i.code === item.code));
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      foundItems.value.push({ ...item, quantity: 1 });
    }
  }

  /**
   * Roll a d20 for each item found.
   * Find which item was found by comparing the roll to the item's diceValues.
   */
  function findItems() {
    for (let i = 0; i < totalItems.value; i++) {
      const roll = rollD20();
      const foundItem = ITEM_TYPES.find((item => item.diceValues.includes(roll)))
      if (foundItem) {
        updateInventory(foundItem);
      }
    }
  }

  /**
   * Sort the foundItems array by id.
   */
  function sortItems() {
    foundItems.value.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  /**
   * Run the Keen-Eyed Scavenger algorithm.
   * Reset all values.
   * Calculate the total number of items found.
   * Find the items.
   * Sort the items.
   */
  function runKeenEyedScavenger() {
    usedProficiency.value = proficiency.value;
    totalItems.value = 0;
    crits.value = 0;
    foundItems.value = [];
    allFlatRolls.value = [];


    calculateTotalItems();
    findItems();
    sortItems();
  }


    
  return { 
    allFlatRolls,
    bods, 
    crits,
    critReward,
    proficiency,
    foundItems,
    numItemsFoundByBod,
    rollD20,
    runKeenEyedScavenger,
    totalItems,
    upgraded,
    usedProficiency
  }
})
