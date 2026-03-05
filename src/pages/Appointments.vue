   <script setup>
import AppointmentsCard from '../components/appointments-page/AppointmentsCard.vue';
import Button from '../components/Button.vue';
</script>
<template> 
<div class="ml-[200px] h-full" >
    <div class="flex justify-self-end">
        <Button text="New Appointment" />
    </div>

    <div class="w-full h-full">
        <AppointmentsCard/>
    </div>
</div>
</template>
 

