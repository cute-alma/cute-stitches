<template>
    <!-- Cover Image -->
    <img v-if="songDetails.img" :src="loadImg(songDetails.img)" class="min-h-[280px] min-w-[280px] sm:max-h-[325px] sm:max-w-[325px] rounded-md bg-gray-400" alt="">

    <!-- Progress bar SVG -->
    <img src="/icons/progress_bar.svg" class="h-fit w-full min-w-[280px] max-w-[500px]" alt="Barra de progreso con un corazón">

    <div class="flex flex-row w-full justify-between max-w-[500px]">
        <div class="flex flex-col">
            <p v-if="songDetails.name && songDetails.artist">
                <span class="text-sm" v-text="songDetails.name"></span><br>
                <span class="text-xs text-artist-gray" v-text="songDetails.artist"></span>
            </p>
            <p v-else>
                <span class="text-sm">Producto</span><br>
                <span class="text-xs text-artist-gray">@cute_stitchesbyalma</span>
            </p>
        </div>
        <div v-if="songDetails.price" class="h-fit text-center px-5 py-[5px] border-1 border-pink-strong rounded-md"><span>$ {{ songDetails.price }} k</span></div>
        <div v-else class="h-fit text-center px-5 py-[5px] border-1 border-pink-strong rounded-md"><span>$ 0 k</span></div>

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
</template>

<script setup>

    const songDetails = defineProps(['id','name','artist','img','price'])

    const baseUrl = import.meta.env.BASE_URL
    
    const loadImg = (img) => {
        return baseUrl + img
    }

</script>