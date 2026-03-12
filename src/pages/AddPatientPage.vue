<script setup>
import Button from "../components/Button.vue";
import FormInput from "../components/FormInput.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../lib/supabaseClient.js";
</script>

<template>
    <div class="ml-[200px]">
        <h1 class="text-center text-[22px] font-medium pt-[100px]">
            Add new Patient
        </h1>
        <div>
            <form
                submit.prevent
                class="w-full flex justify-center items-center flex-col"
            >
                <div class="flex flex-col">
                    <label>ID</label>
                    <input
                        v-model="id"
                        type="number"
                        readonly
                        class="w-[600px] h-[30px] border-1 rounded-md border-gray-400"
                    />
                </div>
                <FormInput
                    model="firstName"
                    inputType="text"
                    labelText="First Name"
                />
                <FormInput
                    model="lastName"
                    inputType="text"
                    labelText="Last Name"
                />
                <FormInput model="cnp" inputType="number" labelText="CNP" />
                <FormInput
                    model="dateOfBirth"
                    inputType="date"
                    labelText="Date of Birth"
                />
                <div class="flex flex-col">
                    <labeL>Gender</labeL>
                    <select
                        class="w-[600px] h-[30px] border-1 rounded-md border-gray-400"
                    >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Mekanik</option>
                    </select>
                </div>
                <div class="flex flex-col">
                    <labeL>Status</labeL>
                    <select
                        class="w-[600px] h-[30px] border-1 rounded-md border-gray-400"
                    >
                        <option>Addmited</option>
                        <option>Discharged</option>
                    </select>
                </div>

                <div>
                    <router-link to="/patients">
                        <Button text="Add new Patient" />
                    </router-link>
                    <router-link to="/patients">
                        <button
                            class="mr-[50px] mt-[25px] text-[16px] font-semibold px-[15px] py-[10px] bg-[#ff4444] rounded-[10px] hover:bg-[#ff3333] cursor-pointer"
                        >
                            Cancel
                        </button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
