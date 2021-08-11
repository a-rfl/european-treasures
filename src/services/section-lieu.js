function getDimensions(item) {
  let dimensions = '';
  if (item.dimensions.superficie) {
    dimensions += `<p>Superficie: ${item.dimensions.superficie}</p>`;
  }
  if (item.dimensions.longueur) {
    dimensions += `<p>Longueur: ${item.dimensions.longueur}</p>`;
  }
  if (item.dimensions.largeur) {
    dimensions += `<p>Largeur: ${item.dimensions.largeur}</p>`;
  }
  if (item.dimensions.altitude) {
    dimensions += `<p>Altitude: ${item.dimensions.altitude}</p>`;
  }
  if (item.dimensions.profondeur) {
    dimensions += `<p>Profondeur: ${item.dimensions.profondeur}</p>`;
  }
  if (item.dimensions.hauteur) {
    dimensions += `<p>Hauteur: ${item.dimensions.hauteur}</p>`;
  }
  return dimensions;
}

export const sectionLieu = (arr, index) => {
  const selectedPlace = arr[index];
  const photos = selectedPlace.images;
  let lieu = `
  <section class="lieu">
    <h2>${selectedPlace.nom}</h2>`;

  if (photos.length <= 2) {
    lieu += `
    <div class="lieu_img" style="background-image:url('images/${selectedPlace.images[0]}')"></div>`;
  } else {
    lieu += ` <div class="slider-container">
    
    <div class="my-slider">`;
    for (const photo of photos) {
      lieu += `<div class="slider-item " style="background-image:url('images/${photo}')"></div>`;
    }

    lieu += `
    </div>
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

  lieu += `<div class="lieu_text_mobile">
    <h4 class="lieu_text_subtitle">Où</h4>
    <p>${selectedPlace.pays}</p>

    <h4 class="lieu_text_subtitle">Dimensions</h4>
    <div id="dimension_Mobile">
    ${getDimensions(selectedPlace)}
  </div>
  <h4 class="lieu_text_subtitle">Description</h4>
  <p>${selectedPlace.description}</p>
  <div class="galerie">`;

  for (let i = 0; i < selectedPlace.images.length; i++) {
    lieu += `<div class="galerie_img"><img src="images/${selectedPlace.images[i]}" alt="${selectedPlace.nom}" class="image" loading="lazy" /></div>`;
  }
  lieu += `</div>
    <div>
      <button type="button" class ="button" id="btn-lieu_random">Un autre !</button>
      <button type="button" class="button" id="btn-lieu_back-destinations">Voir les autres destinations</button>
    </div>

    </div>
    <div class="lieu_text">
        <h4 class="lieu_text_partie2_text_subtitle description">Description</h4>
        <p>${selectedPlace.description}</p>
        <div class="lieu_text_partie2">
          <div class="lieu_text_partie2_text">
            <div class="subtitle-overline"></div>
            <h4 class="lieu_text_partie2_text_subtitle where">Où</h4>
            <p class="country">${selectedPlace.pays}</p>
    </div>

      <div class="lieu_text_partie2_img">
        <img src="images/${selectedPlace.images[1]}" alt="${selectedPlace.nom}" class="img" loading="lazy" />
      </div>
         
      <div class="lieu_text_partie2_text">
        <div id="dimension">
        <div class="subtitle-overline"></div>
        <h4 class="lieu_text_partie2_text_subtitle">Dimensions</h4>
        ${getDimensions(selectedPlace)}
      </div>
     
        </div>
     </div>
  </div>
</section>`;

  return lieu;
};
