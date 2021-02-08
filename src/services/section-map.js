import $ from 'jquery';

export const sectionMap = () => {
  const map = `
    <div class="map1">
        <div id="osm-map"></div>
        <section class="legend">
            <h5>Légende</h5>
            <div id="volcano"> <img style = "width:30px"src="img-pages/volcano_icon.png"/>  Volcans</div>
            <div id="lake"><img style="width:27px" src="img-pages/lake_icon.png" />  Lacs</div>
            <div id="cave"><img style="width:30px" src="img-pages/cave_icon.png" />  Grottes</div>
            <div id="forest"><img style="width:35px" src="img-pages/forest_icon.png" />  Forêts</div>
            <div id="waterfalls"><img style="width:30px" src="img-pages/waterfalls_icon.png" />  Cascades</div>
        </section>
        
    </div>
  `;
  $('.destinations').html(map);
};
