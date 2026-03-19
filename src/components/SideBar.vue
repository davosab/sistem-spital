<script setup>
import { Users } from "lucide-vue-next";
import { ClipboardClock } from "lucide-vue-next";
import { ShelvingUnit } from "lucide-vue-next";
import { Receipt } from "lucide-vue-next";
import { Hospital } from "lucide-vue-next";
</script>

<template>
  <div id="menu" class="fixed w-[200px] h-screen bg-[#FFFFFF] flex flex-col">
    <div class="flex flex-col flex-1 justify-between mt-[25px]">
      <ul class="flex flex-col gap-3">
        <li>
          <router-link to="/patients" class="li" active-class="active">
            <Users class="icon" /> Patients
          </router-link>
        </li>
        <li>
          <router-link to="/appointments" class="li" active-class="active">
            <ClipboardClock class="icon" /> Appointments
          </router-link>
        </li>
        <li>
          <router-link to="/inventory" class="li" active-class="active">
            <ShelvingUnit class="icon" /> Inventory
          </router-link>
        </li>
        <li>
          <router-link to="/invoices" class="li" active-class="active">
            <Receipt class="icon" /> Invoices
          </router-link>
        </li>
        <li>
          <router-link to="/wards" class="li" active-class="active">
            <Hospital class="icon" /> Wards
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.li {
  margin-inline: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 17px;
  text-decoration: #2e2e2e;
  font-weight: 600;
  padding: 5px 0px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.a {
  font-size: 17px;
  margin-inline: 25px;
  padding-top: 6px;
  margin-bottom: 20px;
  padding: 5px 0px;
  font-weight: 600;
}

.active {
  background-color: #e7ffef;
  color: #56d788;
  border-radius: 10px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-left: 19px;
  margin-right: 5px;
}

#menu {
  border-right: 1px solid rgb(219, 216, 216);
}
</style>
