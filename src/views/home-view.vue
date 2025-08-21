<template>
  <headerCmp />
  <div
    class="flex flex-col w-full py-[30px] px-[10px] bg-pink-desc rounded-md sm:max-w-[800px] sm:pl-[44px]"
  >
    <h3 class="text-lg">¡Bienvenidos al espacio virtual de la ternura!</h3>
    <p class="text-sm">
      Encuentra a las más tiernas creaciones en lana. Hechas con pasión, fabricadas con manufactura
      100% manual. Compra el regalo perfecto o date un gustito con nosotros.
    </p>
  </div>
  <!--Componente Albumss-->
  <albumsCmp :data="artworks" />
  <!--FIN CMP Albumss-->

  <!-- Footer -->
  <div class="flex flex-row justify-center sm:justify-end gap-5 items-center min-h-32 w-full">
    <p class="text-sm cute-pulse">
      ¡Encuéntranos en IG!<br />
      <span class="font-rouge-script text-3xl">@cute_stitchesbyalma</span>
    </p>
    <a href="https://www.instagram.com/cute_stitchesbyalma">
      <img
        class="max-h-[30px] max-w-[30px]"
        src="/icons/instagram_icon.svg"
        alt="enlace a @cute_stitchesbyalma"
      />
    </a>
  </div>
</template>

<script setup>
import headerCmp from '@/components/header-cmp.vue'
import albumsCmp from '@/components/albums-cmp.vue'

import artworks from '../../data.json'
</script>
