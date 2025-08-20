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
            <div class="hidden md:flex md:flex-col md:items-end w-full max-w-[350px] max-h-screen overflow-y-auto">
                <p v-if="songDetails.type == 'ondemand'">tus favoritos a <span class="font-rouge-script text-3xl">Pedido</span></p>
                <p v-else>tus favoritos en <span class="font-rouge-script text-3xl">Stock</span></p>

                <songCmp
                    v-for="song in albumList"
                    :key="song.id"
                    :id="song.id"
                    :name="song.name"
                    :artist="song.artist"
                    :img="song.img"
                    :price="song.price"
                />
            </div>
            <div class="flex flex-col w-full items-center gap-[5px]">
                <SongDetails
                    :id="songDetails.id"
                    :name="songDetails.name"
                    :artist="songDetails.artist"
                    :price="songDetails.price"
                    :img="songDetails.img"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import data from '../../data.json';
    import { onBeforeMount, ref, watch } from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import songCmp from '@/components/song-cmp.vue';
    import SongDetails from '@/components/song-details.vue';

    const props = defineProps(['id'])
    const router = useRouter();
    const route = useRoute();

    const songDetails = ref({});
    const albumList = ref([]);

    watch(
        () => route.params.id,
        (newId) => {
            songDetails.value = data.find((p) => p.id == newId)
        }
    )

    onBeforeMount(()=>{
        songDetails.value = data.find((e) => {
            return e.id == props.id
        })

        const album = songDetails.value.type
        albumList.value = data.filter((e) => {
            return e.type == album
        })
    })

    const goBack = () => {
        router.back()
    }
</script>