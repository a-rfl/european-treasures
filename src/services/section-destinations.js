// (Array) => String
export const headerDestinations = () => {
  const destinations = `
        <div class="destinations-header">
            <h2 class="destinations-title" >Destinations</h2>
            <div class="filters">
                <select name="filter" id="filter">
                    <option value="all" selected>tout</option>
                    <option value="cascade">cascades</option>
                    <option value="forêt">forêts</option>
                    <option value="grotte">grottes</option>
                    <option value="lac">lacs</option>
                    <option value="volcan">volcans</option>
                </select>

                <button class="random">Lieu aléatoire</button>

                <div class="block-map">
                    <input type="checkbox" id="map" name="map" value="true"/>
                    <label for="map">Carte</label>
                </div>
            </div>
        </div>`;

  return destinations;
};

export const contentDestinations = (arr) => {
  let destinations = '<section class="destinations">';
  // Loop on the array, to get the first image, the index and the name of each ellement
  // in the array passed in argument
  arr.forEach((place, index) => {
    destinations += `
            <div class="destination" style="background-image: url(images/${place.images[0]});" id="${place.id - 1}">
                <h3>${place.nom}</h3>
            </div>
        `;
  });
  destinations += '</section>';
  return destinations;
};
