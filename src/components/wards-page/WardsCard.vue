<template>
    <div id="patients-card" class="w-[full] bg-white mx-[30px] mb-[30px] rounded-[10px]">
        <h1 class="text-[18px] font-semibold mt-3">
            Wards
        </h1>

        <div class="grid grid-cols-1 mt-2 max-h-[800px] overflow-y-auto ">
            <div class="grid grid-cols-9 border-b border-t border-gray-300 p-3 text-center items-center">
                <p class="text-[16px] font-semibold">
                    ID
                </p>
                <p class="text-[16px] font-semibold">
                    Name
                </p>
                <p class="text-[16px] font-semibold">
                    Type
                </p>
                <p class="text-[16px] font-semibold">
                    Capacity
                </p>
                 <p class="text-[16px] font-semibold">
                    Occupied
                </p>
                 <p class="text-[16px] font-semibold">
                    Floor
                </p>
                <p class="text-[16px] font-semibold">
                    Created At
                </p>

            </div>
        </div>
    </div>
</template>
