<template>
  <div class="flex flex-col justify-center h-12">
    <button 
      @click="generatingAll"
      class="text-xl font-bold">generate all</button>
  </div>
  <div v-for="fn in funcUnitList">
    <Unit
      ref="unitRef"
      :fn="fn"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref} from 'vue'
import { funcUnitList } from '../composable/functions'
import Unit from '../components/Unit.vue'

const unitRef = ref<typeof Unit | null>(null)

const generatingAll = () => {
  unitRef.value!.forEach((v: typeof Unit) => v.generateBtnRef.click())
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  /* margin: 0 1em; */
  /* width: 80%; */
  font: inherit;
  /* font-size:1em; */
  color: rgb(104, 103, 103);
  /* padding: 0.3em; */
}

input:focus {
  outline: none;
}
</style>
