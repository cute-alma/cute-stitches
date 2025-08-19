<template>
    <div class="flex flex-row w-full max-w-[800px] h-fit p-[10px] justify-between items-center">
        <div class="flex flex-row gap-[15px]">
            <img class="h-[60px] rounded-md" :src="loadImg(props.img)" alt="">
            <div class="flex flex-col gap-[5px] justify-start max-h-[100px] text-xs">
                <p v-text="props.name"></p>
                <p v-text="props.artist" class="text-artist-gray"></p>
                <p class="text-price-gray">{{ props.price }} K</p>
            </div>
        </div>
        <img class="h-[24px] w-[24px]" src="/icons/play.png" alt="">
    </div>
</template>

<script setup>
    const props = defineProps(['name','artist','price', 'img'])

    const baseUrl = import.meta.env.BASE_URL

    const loadImg = (img) => {
        return baseUrl + img
    }
</script>