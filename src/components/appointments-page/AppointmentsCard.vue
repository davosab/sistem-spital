<template>  
    <div id="patients-card" class="w-[full] bg-white mx-[30px] mb-[30px] rounded-[10px]">
        <h1 class="text-[18px] font-semibold mt-3">
            Appointments
        </h1>

        <div class="grid grid-cols-1 mt-2 max-h-[800px] overflow-y-auto ">
            <div class="grid grid-cols-10 border-b border-t border-gray-300 p-3 text-center items-center">
                <p class="text-[16px] font-semibold">
                    ID
                </p>
                <p class="text-[16px] font-semibold">
                    Patient ID
                </p>
                <p class="text-[16px] font-semibold">
                    Doctor ID
                </p>
                <p class="text-[16px] font-semibold">
                    Scheduled At
                </p>
                 <p class="text-[16px] font-semibold">
                    Status
                </p>
                 <p class="text-[16px] font-semibold">
                    Notes
                </p>
                <p class="text-[16px] font-semibold">
                    Reminder Sent
                </p>

                <p class="text-[16px] font-semibold">
                    Created at
                </p>
            </div>
        </div>
    </div>
</template>
