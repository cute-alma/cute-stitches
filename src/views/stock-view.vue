<template>
    <div class="flex flex-col gap-[10px] p-[10px]">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center w-full h-fit px-[5px]">
            <img src="/icons/back_icon.png" class="h-[20px] w-[23px]" alt="Ir hacia atrás">
            <p>tus favoritos en <span class="font-rouge-script text-3xl">Stock</span></p>
        </div>

        <!-- Description -->
        <div class="flex flex-row gap-[10px] w-full h-fit border-1 border-cute-green rounded-md items-center">
            <img src="/icons/ribbon.png" class="max-h-[85px] max-w-[85px]" alt="Cinta de regalo">
            <div class="flex flex-col gap-[10px] p-[10px]">
                <p class="text-sm">¡Elige y haz tu pedido!</p>
                <p class="text-xs">
                    Elige entre nuestros productos cute y haz tu pedido, para tener un
                    producto creado específicamente para ti.
                </p>
            </div>
        </div>

        <songCmp 
            v-for="product in data"
            :key="product.name"
            :name="product.name"
            :artist="product.artist"
            :price="product.price" 
            :img="product.img"
        />
    </div>
</template>

<script setup>
import songCmp from '@/components/song-cmp.vue';
import inStock from '../../data.json';

const data = inStock.filter((e) => {
    return e.type == 'instock'
})
</script>