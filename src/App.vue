<script setup>
import {refAlbums} from './assets/js/functions.js';
import FilterView from './components/FilterView.vue';
import HeaderView from './components/HeaderView.vue';
import AlbumView from './components/AlbumView.vue';
import * as MyFunctions from './assets/js/functions.js';

const albums = refAlbums;

// Pour filtrer, je vais simplement altérer mon tableau sur lequel je boucle juste en dessous.
</script>

<template>
<div class="min-h-screen flex flex-col">
  
      <HeaderView />
      <div class="flex flex-row ">
         <FilterView @onFilteredByStock="MyFunctions.onCkeck" @onFilteredByCategory="MyFunctions.filterByCategory"/>

        <main class="bg-white py-5 ml-6 basis-auto">
          <AlbumView v-for="album in albums" :key="album.id" :album="album" @onDecreaseStock="MyFunctions.decrease" @onIncreaseStock="MyFunctions.increase"   />
        </main>    
      </div>
  </div>
</template>

<style scoped>

</style>