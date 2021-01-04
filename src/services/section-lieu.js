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

    ${arr[index].pays}

    <h4 class="lieu_text_subtitle">Dimensions</h4>
    <div id="dimension_Mobile">`;

  if (arr[index].dimensions.superficie) {
    lieu += `
          <div>
              <p>Superficie: ${arr[index].dimensions.superficie}</p>
          </div>`;
  }
  if (arr[index].dimensions.longueur) {
    lieu += `
        <div> 
          <p>Longueur: ${arr[index].dimensions.longueur}</p>
        </div>`;
  }

  if (arr[index].dimensions.largeur) {
    lieu += `
        <div> 
          <p>Largeur: ${arr[index].dimensions.largeur}</p>
        </div>`;
  }

  if (arr[index].dimensions.altitude) {
    lieu += `
        <div>
          <p>Altitude: ${arr[index].dimensions.altitude}</p>
        </div>`;
  }

  if (arr[index].dimensions.profondeur) {
    lieu += `
        <div>
          <p>Profondeur: ${arr[index].dimensions.profondeur}</p>
        </div>`;
  }

  lieu += `</div>

    <h4 class="lieu_text_subtitle">Description</h4>

    ${arr[index].description}
     <div class="galerie">`;
  for (let i = 0; i < arr[index].images.length; i++) {
    lieu += `<img src="images/${arr[index].images[i]}" alt="${arr[index].nom}" class="image"/> `;
  }
  lieu += `</div>
     <div>
     <button type="button" class ="button">Un autre !</button>
     <button type="button" class="button">Un lieu alétaoire</button>
     </div>

</div>
<div class="lieu_text">
${arr[index].description}
    <div class="lieu_text_partie2">
         <div class="lieu_text_partie2_img">
         <img src="images/${arr[index].images[1]}" alt="${arr[index].nom}" class="img"/> 
         <div class="lieu_text_partie2_text">
     <h4 class="lieu_text_partie2_text_subtitle">Dimensions:</h4>
     <div id="dimension">`;

  if (arr[index].dimensions.superficie) {
    lieu += `
             <div>
                 <p>Superficie: ${arr[index].dimensions.superficie}</p>
             </div>`;
  }
  if (arr[index].dimensions.longueur) {
    lieu += `
           <div> 
             <p>Longueur: ${arr[index].dimensions.longueur}</p>
           </div>`;
  }

  if (arr[index].dimensions.largeur) {
    lieu += `
           <div>
             <p>Largeur: ${arr[index].dimensions.largeur}</p>
           </div>`;
  }

  if (arr[index].dimensions.altitude) {
    lieu += `
           <div> 
             <p>Altitude: ${arr[index].dimensions.altitude}</p>
           </div>`;
  }

  if (arr[index].dimensions.profondeur) {
    lieu += `
           <div> 
             <p>Profondeur: ${arr[index].dimensions.profondeur}</p>
           </div>`;
  }

  lieu += `</div>
     
        </div>
     </div>
</div>
`;
  lieu += '</section>';

  return lieu;
};
