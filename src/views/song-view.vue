<template>
    <div class="flex flex-col w-full">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center w-full">
            <img @click="goBack" src="/icons/back_icon.png" class="w-[23px] h-[20px]" alt="Ícono volver atrás">
            <div class="flex flex-row-reverse w-full sm:flex-row gap-[10px] px-[5px] justify-end items-center">
                <h3 class="text-3xl">Cuetify</h3>
                <img src="/img/logo_cute_stitchesbyalma.jpeg" class="invisible sm:visible w-[100px] h-[100px]" alt="logo cute stitches by alma">
            </div>
        </div>
        
        <!-- Layout -->
        <div class="flex flex-row w-full h-full gap-[10px]">
            <div class="hidden md:block w-full max-w-[350px] bg-gray-400">
                
            </div>
            <div class="flex flex-col w-full items-center gap-[5px]">
                <!-- Cover Image -->
                <img :src="loadImg(songDetails.img)" class="min-h-[280px] min-w-[280px] max-h-[325px] max-w-[325px] rounded-md bg-gray-400" alt="">

                <!-- Progress bar SVG -->
                <img src="/icons/progress_bar.svg" class="h-fit w-full min-w-[280px] max-w-[500px]" alt="Barra de progreso con un corazón">

                <div class="flex flex-row w-full justify-between max-w-[500px]">
                    <div class="flex flex-col">
                        <p>
                            <span class="text-sm" v-text="songDetails.name"></span><br>
                            <span class="text-xs text-artist-gray" v-text="songDetails.artist"></span>
                        </p>
                    </div>
                    <div class="h-fit text-center px-5 py-[5px] border-1 border-pink-strong rounded-md"><span>$ {{ songDetails.price }} k</span></div>
                </div>

                <!-- Controls -->
                <div class="flex flex-row w-full h-fit justify-between p-[10px] md:justify-evenly">
                    <img src="/icons/previous.svg" alt="Ícono canción anterior">
                    <img src="/icons/stop.svg" alt="Ícono pausa">
                    <img src="/icons/next.svg" alt="Ícono siguiente canción">
                </div>

                <!-- Buttons -->
                <div class="flex flex-row gap-[5px] py-[15px] w-full justify-center">
                    <img class="max-w-[65px]" src="/icons/likes.svg" alt="Ícono de likes">
                    <img src="/icons/comments.svg" alt="Ícono de comentarios">
                    <img src="/icons/share.svg" alt="Ícono de compartir">
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
    import data from '../../data.json';
    import { onBeforeMount, ref } from 'vue';
    import {useRouter} from 'vue-router';

    const props = defineProps(['id'])
    const baseUrl = import.meta.env.BASE_URL
    const router = useRouter();

    const songDetails = ref({})

    onBeforeMount(()=>{
        songDetails.value = data.filter((e) => {
            return e.id == props.id
        })[0]
        console.log('DEBUG onBeforeMount: ', songDetails.value)
    })

    console.log(songDetails.value)

    const loadImg = (img) => {
        return baseUrl + img
    }

    const goBack = () => {
        router.back()
    }
</script>