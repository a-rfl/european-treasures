export const sectionLieu = (arr, index) => {
  const photos = arr[index].images;
  console.log(photos.length);
  let lieu = `
 <section class="lieu">`;
  lieu += `
    <h2>${arr[index].nom}</h2>`;
  if (photos.length <= 2) {
    lieu += `
    <div class="lieu_img" style="background-image:url('images/${arr[index].images[0]}')"></div>`;
  } else {
    lieu
   += ` <div class="slider-container">
    
    <div class="my-slider">`;
    for (const photo of photos) {
      lieu += `<div class="slider-item " style="background-image:url('images/${photo}')"></div>`;
    }

    lieu += ` </div>    
    <ul class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
        <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
            <i class="fas fa-angle-left fa-5x"></i>
        </li>
        <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
            <i class="fas fa-angle-right fa-5x"></i>
        </li>
    </ul>
</div>`;
  }

  lieu
    += `<div class="lieu_text_mobile">
    <h4 class="lieu_text_subtitle">Où</h4>

    <p>${arr[index].pays}</p>

    <h4 class="lieu_text_subtitle">Dimensions</h4>
    <div id="dimension_Mobile">`;

  if (arr[index].dimensions.superficie) {
    lieu += `
              <p>Superficie: ${arr[index].dimensions.superficie}</p>`;
  }
  if (arr[index].dimensions.longueur) {
    lieu += `
          <p>Longueur: ${arr[index].dimensions.longueur}</p>`;
  }

  if (arr[index].dimensions.largeur) {
    lieu += `
          <p>Largeur: ${arr[index].dimensions.largeur}</p>`;
  }

  if (arr[index].dimensions.altitude) {
    lieu += `
          <p>Altitude: ${arr[index].dimensions.altitude}</p>`;
  }

  if (arr[index].dimensions.profondeur) {
    lieu += `
          <p>Profondeur: ${arr[index].dimensions.profondeur}</p>`;
  }

  lieu += `</div>

    <h4 class="lieu_text_subtitle">Description</h4>

    <p>${arr[index].description}</p>
     <div class="galerie">`;
  for (let i = 0; i < arr[index].images.length; i++) {
    lieu += `<div class="galerie_img"><img src="images/${arr[index].images[i]}" alt="${arr[index].nom}" class="image"/></div>`;
  }
  lieu += `</div>
     <div>
     <button type="button" class ="button" id="btn-lieu_random">Un autre !</button>
     <button type="button" class="button" id="btn-lieu_back-destinations">Voir les autres destinations</button>
     </div>

</div>
<div class="lieu_text">
  <h4 class="lieu_text_partie2_text_subtitle description">Description</h4>
  <p>${arr[index].description}</p>
    <div class="lieu_text_partie2">
      <div class="lieu_text_partie2_text">
      <div class="subtitle-overline"></div>
        <h4 class="lieu_text_partie2_text_subtitle where">Où</h4>
        <p class="country">${arr[index].pays}</p>
      </div>

      <div class="lieu_text_partie2_img">
        <img src="images/${arr[index].images[1]}" alt="${arr[index].nom}" class="img"/>
      </div>
         
      <div class="lieu_text_partie2_text">
        <div id="dimension">
        <div class="subtitle-overline"></div>
        <h4 class="lieu_text_partie2_text_subtitle">Dimensions</h4>`;

  if (arr[index].dimensions.superficie) {
    lieu += `
                 <p>Superficie: ${arr[index].dimensions.superficie}</p>`;
  }
  if (arr[index].dimensions.longueur) {
    lieu += `
             <p>Longueur: ${arr[index].dimensions.longueur}</p>`;
  }

  if (arr[index].dimensions.largeur) {
    lieu += `
             <p>Largeur: ${arr[index].dimensions.largeur}</p>`;
  }

  if (arr[index].dimensions.altitude) {
    lieu += `
             <p>Altitude: ${arr[index].dimensions.altitude}</p>`;
  }

  if (arr[index].dimensions.profondeur) {
    lieu += `
             <p>Profondeur: ${arr[index].dimensions.profondeur}</p>`;
  }

  lieu += `</div>
     
        </div>
     </div>
</div>
`;
  lieu += '</section>';

  return lieu;
};
