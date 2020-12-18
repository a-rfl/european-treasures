export const sectionDestinations = (arr) => {
  const categoriesList = [];
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
