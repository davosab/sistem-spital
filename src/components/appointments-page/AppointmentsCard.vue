<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "/src/lib/supabaseClient";
// array that will contain objects with database records
const appointments = ref([]);

// querry from supabase database
async function getAppointments() {
    const { data } = await supabase.from("appointments").select("*");
    appointments.value = data;
}

async function deleteAppointment(id) {
    const { error } = await supabase.from("appointments").delete().eq("id", id);
    if (error) {
        console.error(error.message);
    } else {
        appointments.value = appointments.value.filter(
            (appointment) => appointment.id !== id,
        );
    }
}

onMounted(() => {
    getAppointments();
});
</script>

<template>
    <div
        id="patients-card"
        class="w-[full] bg-white mx-[30px] mb-[30px] rounded-[10px]"
    >
        <h1 class="text-[18px] font-semibold mt-3">Appointments</h1>

        <div class="grid grid-cols-1 mt-2 max-h-[800px] overflow-y-auto">
            <div
                class="grid grid-cols-10 border-b border-t border-gray-300 p-3 text-center items-center"
            >
                <p class="text-[16px] font-semibold">ID</p>
                <p class="text-[16px] font-semibold">Patient ID</p>
                <p class="text-[16px] font-semibold">Doctor ID</p>
                <p class="text-[16px] font-semibold">Scheduled At</p>
                <p class="text-[16px] font-semibold">Status</p>
                <p class="text-[16px] font-semibold">Notes</p>
                <p class="text-[16px] font-semibold">Reminder Sent</p>

                <p class="text-[16px] font-semibold">Created at</p>
                <p class="text-[16px] font-semibold">Edit</p>
                <p class="text-[16px] font-semibold">Delete</p>
            </div>

            <ul>
                <li
                    v-for="(appointment, index) in appointments"
                    :key="appointment.id"
                    class="grid grid-cols-10 border-b border-gray-200 p-3 text-center items-center hover:bg-gray-50"
                >
                    <p class="text-[14px]">{{ index + 1 }}</p>
                    <p class="text-[14px]">{{ appointment.patient_id }}</p>
                    <p class="text-[14px]">{{ appointment.doctor_id }}</p>
                    <p class="text-[14px]">
                        {{
                            new Date(
                                appointment.scheduled_at,
                            ).toLocaleDateString()
                        }}
                    </p>
                    <p class="text-[14px]">{{ appointment.status }}</p>
                    <p class="text-[14px]">{{ appointment.notes }}</p>
                    <p class="text-[14px]">{{ appointment.reminder_sent }}</p>
                    <p class="text-[14px]">
                        {{
                            new Date(
                                appointment.created_at,
                            ).toLocaleDateString()
                        }}
                    </p>
                    <button
                        class="mr-[10px] bg-[#56D788] hover:bg-[#2cba62] text-[12px] font-medium px-2 py-1 rounded-md transition-colors duration-200"
                    >
                        Edit
                    </button>
                    <button
                        @click="deleteAppointment(appointment.id)"
                        class="ml-[10px] bg-red-500 hover:bg-red-600 text-white text-[12px] font-medium px-3 py-1 rounded-md transition-colors duration-200"
                    >
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
