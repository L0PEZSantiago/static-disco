<script setup>
import {computed, ref} from 'vue';
import { refAlbums } from '@/assets/js/functions';

const isChecked = ref(false);
const selectedCategory = ref('');
const albumsLength = computed(() => refAlbums.value.length);
const emit = defineEmits(['onFilteredByStock', 'onFilteredByCategory']);


const filterByStock = () => {
  emit('onFilteredByStock', isChecked.value);
}

const filterByCategory = () => {
  emit('onFilteredByCategory', selectedCategory.value);
}

// le v-model prendra une ref, qu'il faut créer en haut. Et il prendra la valeur sur laquelle on clique, ou true ou false pour checkbox.
</script>

<template>
    <div class=" px-8 bg-cyan-100 "> <!-- left filter panel -->
          <div class="mt-2 basis-1/4">

              <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-white p-6 w-64 h-96">
                    
                    <fieldset>
                      <legend class="sr-only">Filtres</legend>
                      <div class="text-base font-medium text-gray-900" aria-hidden="true">Filtres ({{ albumsLength }})</div>
                        <div class="mt-4 space-y-4">

                          <div class="flex items-start">
                            <div class="flex h-5 items-center">
                              <input 
                                id="comments" 
                                name="comments" 
                                type="checkbox"
                                v-model="isChecked"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                               @change="filterByStock"
                              >
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="comments" class="font-medium text-cyan-700">In stock only  {{ isChecked }}</label>
                            </div>
                           
                          </div>
     
                        </div>
                        <label for="sortBy" class="block text-sm mt-2 font-medium text-cyan-700">Sort by :</label>
                        <select @change="filterByCategory" v-model="selectedCategory" id="sortBy" name="sortBy" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                          <option value="">-- Selectionner --</option>
                          <option value="Year">Year     </option>
                          <option value="Pitchfork">Pitchfork</option>
                        </select>
                    </fieldset>
                  </div>
               
              </div>
          </div>
        </div>
</template>