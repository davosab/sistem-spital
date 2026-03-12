<script setup>
const props = defineProps({
    model: String,
    labelText: String,
    inputType: String
})
</script>

<template>
<div class="flex flex-col">
    <label>{{labelText}}</label>
    <input 
    :v-model=model
    :type=inputType
    class=" w-[600px] h-[30px] border-1 rounded-md border-gray-400">
</div>
</template>