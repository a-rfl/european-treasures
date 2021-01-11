// (Array) => String
export const headerDestinations = () => {
  const destinations = `
    <h2 class="destinations-title" >Destinations</h2>
    <div class="destinations-header">
    
      <div class="filters">
        <select name="filter" id="filter">
            <option value="all" selected>tout</option>
            <option value="cascade">cascades</option>
            <option value="forêt">forêts</option>
            <option value="grotte">grottes</option>
            <option value="lac">lacs</option>
            <option value="volcan">volcans</option>
        </select>

        <button class="random btn-filter">Lieu aléatoire</button>

        <button class="map btn-filter">Carte</button>
      </div>
    </div>
    <div class= "barrier"><div>`;

  return destinations;
};

export const contentDestinations = (arr) => {
  let destinations = '<section class="destinations">';
  // Loop on the array, to get the first image, the id and the name of each ellement
  // in the array passed in argument
  arr.forEach((place) => {
    destinations += `
            <div class="destination" style="background-image: url(images/${place.images[0]});" id="${place.id - 1}">
                <h3>${place.nom}</h3>
            </div>
        `;
  });
  destinations += '</section>';
  return destinations;
};
