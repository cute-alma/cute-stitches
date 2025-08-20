<template>
    <div class="flex flex-col gap-[10px] p-[10px]">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center w-full h-fit px-[5px]">
            <img @click="goBack" src="/icons/back_icon.png" class="h-[20px] w-[23px]" alt="Ir hacia atrás">
            <p>tus favoritos en <span class="font-rouge-script text-3xl">Stock</span></p>
        </div>

        <!-- Description -->
        <div class="flex flex-row gap-[10px] w-full h-fit border-1 border-cute-green rounded-md items-center">
            <img src="/icons/gift.svg" class="max-h-[85px] max-w-[85px] p-[22px]" alt="Cinta de regalo">
            <div class="flex flex-col gap-[10px] p-[10px]">
                <p class="text-sm">¡Elige y llévalo ya!</p>
                <p class="text-xs">
                    Elige entre nuestros productos cute en stock y llévalo inmediatamente.
                </p>
            </div>
        </div>

        <songCmp 
            v-for="product in data"
            :key="product.id"
            :id="product.id"
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
import { useRouter } from 'vue-router';

const router = useRouter();
const data = inStock.filter((e) => {
    return e.type == 'instock'
})

const goBack = () => {
    router.back();
}
</script>