import $ from 'jquery';

export const sectionLieu = () => {
  const lieu = `<section class="lieu">
<h2>lac Bled</h2>
<div class="lieu_img">
    <img src=" images/bled1.jpg"alt="lad bled, Slovénie"/>
</div>
<div class="lieu_text_mobile">
    <h4 class="lieu_text_subtitle">Où</h4>
   
    Slovénie
   
    <h4 class="lieu_text_subtitle">Dimensions</h4>
    superficie: 145 ha
    longueur: 2,1 km
    largeur: 1,4 km
    altitude: 475 m
    profondeur: 30,6 m
   
    <h4 class="lieu_text_subtitle">Description</h4>

    Le lac de Bled, en slovène : Blejsko jezero, est un lac d'origine glaciaire en Slovénie.</br>
     Situé dans la région de Haute-Carniole à 55 kilomètres au nord-ouest du centre de la capitale Ljubljana,</br>
     en bordure orientale des Alpes juliennes, c'est l'une des principales destinations touristiques du pays.
     <div class="galerie">
     <img src=" images/bled2.jpg"alt="lad bled, Slovénie" class="image"/>
     <img src=" images/bled3.jpg"alt="lad bled, Slovénie"/class="image">
     <img src=" images/bled4.jpg"alt="lad bled, Slovénie"/class="image">
     </div>
     <div>
     <button type="button" class ="button">Un autre !</button>
     <button type="button" class="button">Un lieu alétaoire</button>
     </div>

     
</div>
<div class="lieu_text">
    Le lac de Bled, en slovène : Blejsko jezero, est un lac d'origine glaciaire en Slovénie.</br>
     Situé dans la région de Haute-Carniole à 55 kilomètres au nord-ouest du centre de la capitale Ljubljana,</br>
     en bordure orientale des Alpes juliennes, c'est l'une des principales destinations touristiques du pays.
    <div class="lieu_text_partie2">
         <div class="lieu_text_partie2_img">
     <img src=" images/bled2.jpg"alt="Cala Gonone, Italie" class="img"/>
        </div>
         <div class="lieu_text_partie2_text">
     <h4 class="lieu_text_partie2_text_subtitle">Dimensions:</h4>
   
     superficie: 145 ha </br>
     longueur: 2,1 km</br>
     largeur: 1,4 km</br>
     altitude: 475 m</br>
     profondeur: 30,6 m
     
        </div>
     </div>
</div>
</section>`;
  $('main').empty();
  $('main').append(lieu);
};
