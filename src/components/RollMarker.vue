<template>
  <div>
    <div 
      :class="`roll-marker ${colorClass} d-flex justify-content-center align-items-center`"
      v-tooltip.bottom="`${roll} + ${keenEyeStore.usedProficiency}`" type="text" placeholder="Bottom"
    >
      <p :id="`roll-${positionInArray}`" class="p-0 m-0">{{ roll + keenEyeStore.usedProficiency }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useKeeneyeStore } from "../stores/keeneye";

export default defineComponent({
  name: "RollMarker",
  props: {
    roll: {
      type: Number,
      required: true,
    },
    positionInArray: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const keenEyeStore = useKeeneyeStore();

    const colorClass = computed(() => {
      if (props.roll === 1) {
        return "botch-color";
      } else if (props.roll < 6) {
        return "bad-color";
      } else if (props.roll < 14) {
        return "average-color";
      } else if (props.roll < 20) {
        return "good-color";
      } else {
        return "crit-color";
      }
    })

    return {
      colorClass,
      keenEyeStore
    };
  },
});
</script>

<style scoped>
.roll-marker {
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10%;
  display: inline-block;
  margin: 0 5px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: black;
}

.crit-color {
  background-color: green;
  color: white;
}

.botch-color {
  background-color: red;
  color: white;
}

.bad-color {
  background-color: orange;
  color: white;
}

.average-color {
  background-color: yellow;
  color: black;
}

.good-color {
  background-color: lightgreen;
  color: black;
}
</style>