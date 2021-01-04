import './style.scss';
import $ from 'jquery';
import { header } from './src/services/section-header';
import { randomIndex } from './src/helpers/random';
import { sectionLieu } from './src/services/section-lieu';
import { homepage } from './src/services/homepage';
import { headerDestinations, contentDestinations } from './src/services/section-destinations';
import { sectionAbout } from './src/services/section-about';
import { sectionContact } from './src/services/section-contact';
import { sectionMap } from './src/services/section-map';
import { newMap } from './src/helpers/map';
import { tns } from './node_modules/tiny-slider/src/tiny-slider';

const carousel = function () {
  const slider = tns({
    container: '.my-slider',
    // autoHeight: true,
    loop: true,
    // swipeAngle: false,
    items: 1,
    slideBy: 'page',
    nav: false,
    // autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: '#customize-controls',
  });
};
const randomPlace = (arr) => {
// Retourne un index aléatoirement et le stocke dans la variable indexPlace
  const indexPlace = randomIndex(arr);
  // Remplace le contenu de la balise main par une section de lieu
  // Le lieu est récupéré dans la liste grâce à l'index stockée dans indexPlace
  $('main').html(sectionLieu(arr, indexPlace));
};

$.get('http://localhost:3000/lieux').then((data) => {
  const lieux = data;
  // Première page visible à l'arrivée sur le site
  $('main').html(homepage);
  /* HEADER */
  $('.menu').html(header);

  // Action sur les liens du header
  /* HOMEPAGE */
  $('#home').on('click', () => {
    $('main').html(homepage);
  });
  // Fonction d'event au click sur le bouton de la homepage
  $('body').on('click', '.home_btn', () => {
    randomPlace(lieux);
    carousel();
  });

  /* ABOUT */
  $('#about').on('click', () => {
    $('main').html(sectionAbout());
  });
  /* CONTACT */
  $('#contact').on('click', () => {
    $('main').html(sectionContact());
  });

  const render = (arr) => {
    /* DESTINATIONS */
    $('#destinations').on('click', () => {
      $('main').html([headerDestinations(), contentDestinations(arr)]);

      // -- FILTERS --
      // Button random place
      // Display a random place when clicked
      $('.random').on('click', () => {
        randomPlace(arr);
        carousel();
      });

      // Button displaying map
      // Display map section when clicked
      $('.map').on('click', () => {
        sectionMap();
        newMap();
      });

      // Select filter
      const options = $('option');
      for (const option of options) {
        $(option).on('click', () => {
          const categorySelected = $(option).val();
          if ($(option).val() === 'all') {
            $('.destinations').html(contentDestinations(lieux));
          } else {
            const sort = (item) => item.categories.includes(categorySelected);
            const contentSearched = arr.filter(sort);
            $('.destinations').html(contentDestinations(contentSearched));
          }
        });
      }
    });
  };

  // Card place
  // Display the place that was clicked on
  $('body').on('click', '.destination', (e) => {
    const { id } = e.currentTarget;
    $('main').html(sectionLieu(lieux, id));
    carousel();
  });

  render(lieux);
});
