<script setup>
import Button from '../components/Button.vue';
import WardsCard from '../components/wards-page/WardsCard.vue';
</script>
<template>
    <div class="ml-[200px] h-full">
    <div class="flex justify-self-end">
      <Button text="New Ward" />
    </div>

    <div class="w-full h-full">
      <WardsCard />
    </div>
  </div>
</template>
