<template>
    <div class="flex flex-col gap-[10px] p-[10px]">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center w-full h-fit px-[5px]">
            <img @click="goBack" src="/icons/back_icon.png" class="h-[20px] w-[23px]" alt="Ir hacia atrás">
            <p>tus favoritos a <span class="font-rouge-script text-3xl">Pedido</span></p>
        </div>

        <!-- Description -->
        <div class="flex flex-row gap-[10px] w-full h-fit border-1 border-cute-green rounded-md items-center">
            <img src="/icons/ribbon.svg" class="max-h-[85px] max-w-[85px] p-[5px]" alt="Cinta de regalo">
            <div class="flex flex-col gap-[10px] p-[10px]">
                <p class="text-sm">¡Elige y haz tu pedido!</p>
                <p class="text-xs">
                    Elige entre nuestros productos cute y haz tu pedido, para tener un
                    producto creado específicamente para ti.
                </p>
            </div>
        </div>

        <!-- All songs (products) -->
        <songCmp 
            v-for="product in data"
            :key="product.name"
            :name="product.name"
            :artist="product.artist"
            :price="product.price" 
            :img="product.img"
        />

        <!-- Addiotional Info -->
        <div class="flex flex-col items-center gap-[10px] bg-pink-desc w-full max-w-[800px] h-fit px-5 py-10">
            <p class="text-xs text-justify">
                <span class="text-lg">¿Tienes una idea de regalo?</span>
                <br/>
                En <span class="font-rouge-script text-2xl">Cute Stitches By Alma</span> siempre valoramos las buenas ideas. Si te
                gustaría tener a tu personaje favorito y no está en nuestro inventario, puedes
                proporcionar una referencia y transformarlo en realidad.
            </p>
            <a href="https://www.instagram.com/cute_stitchesbyalma">
                <img class="max-h-[30px] max-w-[30px]" src="/icons/instagram_icon.svg" alt="enlace a @cute_stitchesbyalma">
            </a>
            <p class="text-xs">¡Escríbenos un DM!</p>
        </div>
    </div>
</template>

<script setup>
import songCmp from '@/components/song-cmp.vue';
import inStock from '../../data.json';

import { useRouter } from 'vue-router';

const router = useRouter();

const data = inStock.filter((e) => {
    return e.type == 'ondemand'
})


const goBack = () => {
    router.back();
}
</script>