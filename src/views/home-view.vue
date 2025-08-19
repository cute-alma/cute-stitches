<template>
    <headerCmp/>
    <div class="flex flex-col w-full py-[30px] px-[10px] bg-pink-desc rounded-md sm:max-w-[800px] sm:pl-[44px] ">
        <h3 class="text-lg">¡Bienvenidos al espacio virtual de la ternura!</h3>
        <p class="text-sm">
            Encuentra a las más tiernas creaciones en lana. Hechas con pasión, 
            fabricadas con manufactura 100% manual. 
            Compra el regalo perfecto o date un gustito con nosotros.
        </p>
    </div>
    <!--Componente Albumss-->
    <albumsCmp :data="artworks"/>
    <!--FIN CMP Albumss-->

</template>

<script setup>
import headerCmp from '@/components/header-cmp.vue';
import albumsCmp from '@/components/albums-cmp.vue';

import artworks from '../../data.json';


</script>