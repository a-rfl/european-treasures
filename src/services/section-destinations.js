// (Array) => String
export const sectionDestinations = (arr) => {
  const categoriesList = [];
  // ForEach element of the array, it will check is proprety 'category'
  // And will put the value of each in a new array (categoriesList)
  // but only if the value is not already in the new array
  arr.forEach((place) => {
    place.categories.forEach((cat) => {
      if (!categoriesList.includes(cat)) {
        categoriesList.push(cat);
      }
    });
  });

  let destinations = `
        <div>
        <div class="destinations-header">
            <h2>Destinations</h2>
            <div class="filters">
                <select name="filter" id="filter">
                    <option value="all" selected>tout</option>
    `;
    // Creation of the options' select
    // By creating an option by element of the categoryList
    // Each option has the attribute value and the inner html of an element of categoriesList
  categoriesList.forEach((category) => {
    destinations += `<option value="${category}">${category}</option>`;
  });
  destinations += `
                    </select>

                    <button class="random">Lieu aléatoire</button>

                    <div class="block-map">
                        <input type="checkbox" id="map" name="map" value="true"/>
                        <label for="map">Carte</label>
                    </div>
                </div>
            </div>
            <section class="destinations">
    `;
  // Loop on the array, to get the first image, the index and the name of each ellement
  // in the array passed in argument
  arr.forEach((place, index) => {
    destinations += `
            <div class="destination" style="background-image: url(images/${place.images[0]});" id="${index}">
                <h3>${place.nom}</h3>
            </div>
        `;
  });
  destinations += '</section></div>';

  return destinations;
};
