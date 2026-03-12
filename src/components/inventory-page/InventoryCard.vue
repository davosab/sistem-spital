<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "/src/lib/supabaseClient";

// array that will contain objects with database records
const inventory = ref([]);

// querry from supabase database
async function getInventory() {
  const { data } = await supabase.from("inventory").select("*");
  inventory.value = data;
}
onMounted(() => {
  getInventory();
});
</script>

<template>
  <div
    id="inventory-card"
    class="w-[full] bg-white mx-[30px] mb-[30px] rounded-[10px]"
  >
    <h1 class="text-[18px] font-semibold mt-3">Inventory</h1>

    <div class="grid grid-cols-1 mt-2 max-h-[800px] overflow-y-auto">
      <div
        class="grid grid-cols-9 border-b border-t border-gray-300 p-3 text-center items-center"
      >
        <p class="text-[16px] font-semibold">ID</p>
        <p class="text-[16px] font-semibold">Name</p>
        <p class="text-[16px] font-semibold">Category</p>
        <p class="text-[16px] font-semibold">Quantity</p>
        <p class="text-[16px] font-semibold">Unit</p>
        <p class="text-[16px] font-semibold">Alert at</p>
        <p class="text-[16px] font-semibold">Supplier</p>
        <p class="text-[16px] font-semibold">Updated</p>
      </div>
      <ul>
        <!-- get data from the database (inventory array)
                 
                <li v-for="item in inventory" :key="item.id">
                    {{ item.id }}
                </li>

                -->
      </ul>
    </div>
  </div>
</template>
