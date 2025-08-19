<template>
    <div class="flex flex-col w-full gap-[15px]">
        <!-- Header -->
         <div class="flex flex-row justify-between items-center w-full">
            <img src="/icons/back_icon.png" class="w-[23px] h-[20px]" alt="Ícono volver atrás">
            <div class="flex flex-row-reverse w-full sm:flex-row gap-[10px] px-[5px] justify-end items-center">
                <h3 class="text-3xl">Cuetify</h3>
                <img src="/img/logo_cute_stitchesbyalma.jpeg" class="invisible sm:visible w-[100px] h-[100px]" alt="logo cute stitches by alma">
            </div>
         </div>

         <!-- Cover Image -->
         <img :src="loadImg(props.img)" class="min-h-[280px] min-w-[280px] rounded-md bg-gray-400" alt="">

         <!-- Progress bar SVG -->
         <img src="/icons/progress_bar.svg" class="h-fit min-w-[280px]" alt="Barra de progreso con un corazón">

         <div class="flex flex-row w-full justify-between">
            <div class="flex flex-col">
                <p>
                    <span class="text-sm" v-text="props.name"></span><br>
                    <span class="text-xs text-artist-gray" v-text="props.artist"></span>
                </p>
            </div>
            <div class="h-fit text-center px-5 py-[5px] border-1 border-pink-strong rounded-md"><span>$ {{ props.price }} k</span></div>
         </div>

         <!-- Controls -->
         <div class="flex flex-row w-full h-fit justify-between">
            <img src="/icons/previous.svg" alt="Ícono canción anterior">
            <img src="/icons/stop.svg" alt="Ícono pausa">
            <img src="/icons/next.svg" alt="Ícono siguiente canción">
         </div>

         <!-- Buttons -->
          <div class="flex flex-row gap-[5px] py-[15px] w-full justify-evenly">
            <img class="max-w-[65px]" src="/icons/likes.svg" alt="Ícono de likes">
            <img src="/icons/comments.svg" alt="Ícono de comentarios">
            <img src="/icons/share.svg" alt="Ícono de compartir">
          </div>

    </div>
</template>

<script setup>
    const props = defineProps(['name','artist','price', 'img'])
    const baseUrl = import.meta.env.BASE_URL

    const loadImg = (img) => {
        return baseUrl + img
    }
</script>