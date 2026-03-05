<script setup>
import Button from '../components/Button.vue';
import InvoicesCard from '../components/invoices-page/InvoicesCard.vue';
</script>
<template> 
    <div class="ml-[200px] h-full" >
    <div class="flex justify-self-end">
        <Button text="New Invoice" />
    </div>

    <div class="w-full h-full">
        <InvoicesCard />
    </div>
</div>
</template>