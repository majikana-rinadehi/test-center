<template>
  <div class="flex flex-col justify-center h-12">
    <button @click="generateAll" class="text-xl font-bold">generate all</button>
  </div>
  <div>
    <label for="fnSelect">select method >>></label>
    <select id="fnSelect" v-model="selectedFn">
      <option disabled value="---">---</option>
      <option v-for="funcUnit in funcUnitList" :value="funcUnit">
        {{ funcUnit.method.name }}
      </option>
    </select>
  </div>
  <div class="flex justify-center">
    <div class="flex flex-col mb-4 p-2 justify-center items-center">
      <div class="self-start text-base">input at all</div>
      <textarea v-model="allInputText" rows="15"
        class="mx-4 my-0 w-4/5 text-base p-1 border-2 border-gray-400 rounded-lg text-gray-500">
      </textarea>
    </div>
    <div class="flex flex-col justify-center">
      <button>>></button>
    </div>
    <div class="flex flex-col w-4/5">
      <div v-for="(inputText, i) in inputTextList">
        <Unit 
          ref="unitRef" 
          :fn="selectedFn" 
          :input-text="inputText" 
          :expected-text="expectedTextList[i] ? expectedTextList[i] : ''"/>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <!-- << を表記 -->
      <button>&lt&lt</button>
    </div>
    <div class="flex flex-col mb-4 p-2 justify-center items-center">
      <div class="self-start text-base">expected at all</div>
      <textarea v-model="allExpectedText" rows="15"
        class="mx-4 my-0 w-4/5 text-base p-1 border-2 border-gray-400 rounded-lg text-gray-500">
      </textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { funcUnitList } from '../composable/functions'
import Unit from './Unit.vue'

const unitRef = ref<typeof Unit | null>(null)
const selectedFn = ref(funcUnitList[0])
const allInputText = ref('')
const allExpectedText = ref('')

const generateAll = () => {
  unitRef.value!.forEach((v: typeof Unit) => v.generateBtnRef.click())
}

const inputTextList = computed(() => {
  return allInputText.value.split(`\n`)
})

const expectedTextList = computed(() => {
  return allExpectedText.value.split(`\n`)
})

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
