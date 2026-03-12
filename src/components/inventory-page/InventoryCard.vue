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
        class="grid grid-cols-10 border-b border-t border-gray-300 p-3 text-center items-center"
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
        <li
          v-for="(item, index) in inventory"
          :key="item.id"
          class="grid grid-cols-10 border-b border-gray-200 p-3 text-center items-center hover:bg-gray-50"
        >
          <p class="text-[14px]">{{ index + 1 }}</p>
          <p class="text-[14px]">{{ item.name }}</p>
          <p class="text-[14px]">{{ item.category }}</p>
          <p class="text-[14px]">{{ item.quantity }}</p>
          <p class="text-[14px]">{{ item.unit }}</p>
          <p class="text-[14px]">{{ item.low_stock_threshold }}</p>
          <p class="text-[14px]">{{ item.supplier }}</p>
          <p class="text-[14px]">
            {{ new Date(item.updated_at).toLocaleDateString() }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
