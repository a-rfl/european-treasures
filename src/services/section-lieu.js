export const sectionLieu = (arr, index) => {
  let lieu = `
 <section class="lieu">`;
  lieu += `
    <h2>${arr[index].nom}</h2>
    <div class="lieu_img">
    <img src="images/${arr[index].images[0]}" alt="${arr[index].nom}" class="img"/>
    </div>
    <div class="lieu_text_mobile">
    <h4 class="lieu_text_subtitle">Où</h4>

    ${arr[index].pays}

    <h4 class="lieu_text_subtitle">Dimensions</h4>
    <div id="dimension_Mobile">`;

  if (arr[index].dimensions.superficie) {
    lieu += `
          <div>Superficie :
              <p>${arr[index].dimensions.superficie}</p>
          </div>`;
  }
  if (arr[index].dimensions.longueur) {
    lieu += `
        <div>Longueur : 
          <p>${arr[index].dimensions.longueur}</p>
        </div>`;
  }

  if (arr[index].dimensions.largeur) {
    lieu += `
        <div>Largeur : 
          <p>${arr[index].dimensions.largeur}</p>
        </div>`;
  }

  if (arr[index].dimensions.altitude) {
    lieu += `
        <div>Altitude : 
          <p>${arr[index].dimensions.altitude}</p>
        </div>`;
  }

  if (arr[index].dimensions.profondeur) {
    lieu += `
        <div>Profondeur : 
          <p>${arr[index].dimensions.profondeur}</p>
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
         <img src="images/${arr[index].images[0]}" alt="${arr[index].nom}" class="img"/> 
         <div class="lieu_text_partie2_text">
     <h4 class="lieu_text_partie2_text_subtitle">Dimensions:</h4>
     <div id="dimension">`;

  if (arr[index].dimensions.superficie) {
    lieu += `
             <div>Superficie :
                 <p>${arr[index].dimensions.superficie}</p>
             </div>`;
  }
  if (arr[index].dimensions.longueur) {
    lieu += `
           <div>Longueur : 
             <p>${arr[index].dimensions.longueur}</p>
           </div>`;
  }

  if (arr[index].dimensions.largeur) {
    lieu += `
           <div>Largeur : 
             <p>${arr[index].dimensions.largeur}</p>
           </div>`;
  }

  if (arr[index].dimensions.altitude) {
    lieu += `
           <div>Altitude : 
             <p>${arr[index].dimensions.altitude}</p>
           </div>`;
  }

  if (arr[index].dimensions.profondeur) {
    lieu += `
           <div>Profondeur : 
             <p>${arr[index].dimensions.profondeur}</p>
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
