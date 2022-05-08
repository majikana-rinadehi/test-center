<template>
    <div class="flex justify-center">
        <div class="flex flex-col h-16 mb-4 p-2 items-center">
            <div class="self-start text-base h-40">input</div>
            <input v-model="inputText" type="text"
                class="mx-4 my-0 w-4/5 text-base p-1 border-2 border-gray-400 rounded-lg text-gray-500">
        </div>
        <div class="flex flex-col justify-center mt-8">
            <button ref="generateBtnRef" @click="generate(fn.method)" class="text-xl">=> {{ fn.method.name }} =>
            </button>
            <div class="italic text-xs">
                {{ fn.comment }}
            </div>
        </div>
        <div class="flex flex-col h-16 mb-4 p-2 items-center">
            <div class="self-start text-base h-40">result</div>
            <input v-model="resultValue" disabled type="text"
                class="mx-4 my-0 w-4/5 text-base p-1 border-2 border-gray-400 rounded-lg text-gray-500"
                :class="resultInputClass">
        </div>
        <div class="flex flex-col h-16 mb-4 p-2 items-center">
            <div class="self-start text-base h-40">expected</div>
            <input v-model="expectedText" id="user"
                class="mx-4 my-0 w-4/5 text-base p-1 border-2 border-gray-400 rounded-lg text-gray-500">
        </div>
    </div>
    <div class="text-red-500">
        {{ errorMsgValue }}
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { defineProps, defineExpose } from 'vue'
import { FunctionUnit } from '@/composable/types'

const props = defineProps<{
    fn: FunctionUnit,
    inputText: string,
    expectedText: string
}>()
// ↓↓↓this doesn't work (changing value in parent isn't detected here)
// const { fn } = props
// const { fn } = reactive(props)
const { fn, inputText, expectedText } = toRefs(props)
const resultValue = ref('')
const expectedValue = ref('')
const errorMsgValue = ref('')
const generateBtnRef = ref('')

const generate = (fn: (input: string) => string) => {
    try {
        errorMsgValue.value = ''
        resultValue.value = fn(inputText.value)
    } catch (error) {
        console.log(error)
        errorMsgValue.value = error as string
    }
}

defineExpose({
    generateBtnRef
})

const resultInputClass = computed((): string => {
    return resultValue.value && expectedText.value === resultValue.value
        ? 'border-green-500'
        : !resultValue.value
            ? ''
            : 'border-red-500'
})
</script>

<style scoped>
</style>
