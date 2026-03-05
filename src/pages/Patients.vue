<script setup>
import PatientsCard from '../components/patients-page/PatientsCard.vue';
</script>
<template> 
<div class="ml-[200px] h-full" >
    <div class="flex justify-self-end">
        <button class=" mr-[50px] mt-[25px] text-[16px] font-semibold px-[15px] py-[10px] bg-[#56D788] rounded-[10px]"> Add new patient </button>
    </div>

    <div class="w-full h-full">
        <PatientsCard />
    </div>
</div>



</template>
