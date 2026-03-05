<script>
import { ref, onMounted } from "vue";
import { supabase } from "/src/lib/supabaseClient";

const patients = ref([]);

async function getPatients() {
    const { data } = await supabase.from("patients").select("*");
    patients.value = data;
}
onMounted(() => {
    getPatients();
});
</script>

<template>
    <div
        id="patients-card"
        class="w-[full] bg-white mx-[30px] mb-[30px] rounded-[10px]"
    >
        <h1 class="text-[18px] font-semibold mt-3">Patients</h1>

        <div class="grid grid-cols-1 mt-2 max-h-[800px] overflow-y-auto">
            <div
                class="grid grid-cols-9 border-b border-t border-gray-300 p-3 text-center items-center"
            >
                <p class="text-[16px] font-semibold">ID</p>
                <p class="text-[16px] font-semibold">First Name</p>
                <p class="text-[16px] font-semibold">Last Name</p>
                <p class="text-[16px] font-semibold">CNP</p>
                <p class="text-[16px] font-semibold">Date of Birth</p>
                <p class="text-[16px] font-semibold">Gender</p>
                <p class="text-[16px] font-semibold">Status</p>
            </div>
            <ul>
                <li v-for="patient in patients" :key="patient.id">
                    {{ patient.first_name }}
                </li>
            </ul>
        </div>
    </div>
</template>
