<script setup>
import PatientsCard from "../components/patients-page/PatientsCard.vue";
import Button from "../components/Button.vue";
</script>
<template>
  <div class="ml-[200px] h-full">
    <div class="flex justify-self-end">
      <Button text="Add new patient" />
    </div>

    <div class="w-full h-full">
      <PatientsCard />
    </div>
  </div>
</template>
