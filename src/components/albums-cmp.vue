<template>
    <div class="flex flex-col md:flex-row gap-[10px]">
            <div class="flex flex-col gap-[10px] p-[10px] bg-album-bg rounded-md h-fit w-full max-w-[333px]">
            <p>Tus favoritos a &nbsp; <span class="font-rouge-script text-3xl">Pedido</span></p>
            <div class="grid grid-cols-3 gap-[10px] items-stretch">
                <div v-for="p in ondemand.slice(0,6)" :key="p.name" class="relative h-25">
                    <img class="rounded-md w-full h-full" :src="loadImg(p.img)" alt="">
                    <p v-text="loadName(p.name)" class="absolute bottom-0 inset-x-0 text-center h-max-[30px] text-sm bg-cute-green/80"></p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-[10px] p-[10px] bg-album-bg rounded-md h-fit w-full max-w-[333px]">
            <p>Tus favoritos en &nbsp; <span class="font-rouge-script text-3xl">Stock</span></p>
            <div class="grid grid-cols-3 gap-[10px] items-stretch">
                <div v-for="(p,index) in instock.slice(0,6)" class="relative h-25" :key="p.name">
                    <img class="rounded-md w-full h-full" :src="loadImg(p.img)" alt="">
                    <p v-if="index !== 5" v-text="loadName(p.name)" class="absolute bottom-0 inset-x-0 text-center text-sm bg-cute-green/80"></p>
                    <p v-else class="absolute inset-0 flex items-center justify-center bg-album-bg/40"> Ver más... </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['data']);
    const baseUrl = import.meta.env.BASE_URL
    const ondemand = props.data.filter((e) => {
        return e.type == "ondemand"
    })
    const instock = props.data.filter((e) => {
        return e.type == "instock"
    })

    console.log("EL VALOR ES : ", ondemand)

    const loadImg = (img) => {
        return baseUrl+img
    }

    const loadName = (name) => {
        if(name.length >= 8){
            return name.slice(0, 8) + '...'
        } else {
            return name
        }
    }
</script>