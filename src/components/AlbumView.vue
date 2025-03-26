<script setup>
const props = defineProps({ 
  album: Object,
});

const bgcolor = (album) => album.stock > 0 ? 'bg-green-100' : 'bg-red-100'
// EN js je dois utiliser props.album, en html {{album}}
const emit = defineEmits(['onIncreaseStock', 'onDecreaseStock']);
const btnDecrease = () => {
    emit("onDecreaseStock", props.album.id); // Le deuxième paramètre sont les datas qu'on envoit vers le parent
}

const btnIncrease = () => {
    emit("onIncreaseStock", props.album.id); // Le deuxième paramètre sont les datas qu'on envoit vers le parent
}

// Pour les emits, je créé des évènements onIncreaseStock et onDecreaseStock
// Ensuite lorsque le bouton plus bas est cliqué il déclenche la fonction qui est lié au bouton et qui renvoie l'id de l'album ainsi que le nom de l'evenement
// Ensuite je dois dans App.vue écouter l'évemenement, et j'appelle une fonction lors du déclenchement de l'evenement comme addEventListener.
</script>
<template>
            <!-- component -->
            <section class="text-gray-600 body-font"> <!-- boucle ici -->
                <!-- one records -->
                <div class="container px-5 mx-auto">
                  <div v-bind:class="bgcolor(album)" class=" p-5 bg-white flex items-center mx-auto border-b shadow-md mb-10 border-gray-400 rounded-lg sm:flex-row flex-col">
                    <div class="sm:w-44 sm:h-44 lg:w-40 lg:h-40 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                      <img :src ="album?.coverUrl ?? 'src/assets/img/default.jpg' ">
                    </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 class="text-black text-2xl title-font font-bold mb-2">{{album.title}}</h1>
                  <h3 class="text-black text-xl title-font mb-2">{{album.artist}}<span class="font-light mr-2">{{album.annee}}</span></h3>
                  <p class="leading-relaxed text-base">{{ album.comment }}</p>
                  <div class="py-4">
                      <div v-if="album.stock > 0" class=" inline-block mr-2" > <!-- quand le stock est ok  --> <!-- tu affiches uniquement quand le stock est > 0 -->
                        <div class="flex  pr-2 h-full items-center">
                            <svg class="text-green-500 w-6 h-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="12" cy="12" r="9" />  
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                            <p class="title-font font-medium">{{ album.stock }} en stock</p>
                        </div>
                    </div>  


                      <div  v-else="album.stock == 0" class="inline-block mr-2"><!-- quand le stock est à zéro  -->
                        <div class="flex pr-2 h-full items-center">
                          <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                          </svg>
                          <p class="title-font font-medium">out of stock</p>
                        </div>
                      </div>


                    </div>
                  <div class="md:flex font-bold text-gray-800">
                    <div class="w-full md:w-1/2 flex space-x-3">
                      <div class="w-1/2">
                        <p>Position: #{{album.pitchforkPos}}</p><!-- pitchfork pos  -->
                      </div>
                    </div>
                  <div class="w-full">
                    <div class="float-right">
                      <button type="button" @click="btnDecrease" class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 ease select-none hover:bg-teal-400"> - </button>
                      <span class="quantity">{{ album.stock }}</span>
                      <button type="button" @click="btnIncrease" class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 ease select-none hover:bg-purple-800"> + </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              </div>
            </section><!--end one records  -->
</template>