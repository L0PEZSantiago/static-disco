import {ref} from 'vue';
import {records} from './allRecords.js';
export const refAlbums = ref(records);
const quantity = ref(1);

    
    export const sortByYear = () => { 
    refAlbums.value = [...records].sort((a, b) => a.year - b.year); // Je dois créer une copie du tableau records pour avoir un rafraichissement sinon la ref serait la même
    };
    
    export const sortByPitchfork = () => { 
      refAlbums.value = [...records].sort((a, b) => a.pitchforkPos - b.pitchforkPos);
    };
    
    export const decrease = (id) => {
      const thisAlbum = refAlbums.value.find((album)=> album.id === id); // refAlbums est un objet, sa valeur est un tableau, find ne fonctionne qu'avec les tableaux
      if (thisAlbum.stock > 0)  thisAlbum.stock--;
    }
    
    export const increase = (id) => {
      const thisAlbum = refAlbums.value.find((album)=> album.id === id);
      thisAlbum.stock++;
    }
    
    // Fonction qui altère le tableau refAlbums en fonction du checkbox
    export const onCkeck = (checkboxValue) => {
      if (!checkboxValue) refAlbums.value = records;
      else refAlbums.value = records.filter((album) => album.stock > 0); // filter retourne un nouveau tableau directement
      }
    
    // Fonction qui altère le tableau refAlbums en fonction du select
    export const filterByCategory = (category) => {
      console.log(category);
      if (category === "Year") {
        sortByYear();
      } else if (category === "Pitchfork") {
        sortByPitchfork();
      } else {
        refAlbums.value = records;
      }
    }