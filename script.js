import './style.scss';
import $ from 'jquery';
import { header } from './src/services/section-header';
import { randomIndex } from './src/helpers/random';
import { sectionLieu } from './src/services/section-lieu';
import { homepage } from './src/services/homepage';
import {
  headerDestinations,
  contentDestinations,
} from './src/services/section-destinations';
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
  return slider;
};
const randomPlace = (arr) => {
  // Retourne un index aléatoirement et le stocke dans la variable indexPlace
  const indexPlace = randomIndex(arr);
  // Remplace le contenu de la balise main par une section de lieu
  $('main').html(sectionLieu(arr, indexPlace));
  if (arr[indexPlace].images.length > 2) {
    carousel();
  }
};

const goTo = (element, component) => {
  $(element).on('click', () => {
    $('main').html(component);
    $('main').scrollTop(0);
  });
};

$.get('https://obscure-waters-94665.herokuapp.com/lieux').then((data) => {
  const lieux = data;
  // Première page visible à l'arrivée sur le site
  $('main').html(homepage);
  /* HEADER */
  $('.menu').html(header);

  // Action sur les liens du header
  goTo('#home', homepage);
  goTo('#small-logo', homepage);
  goTo('#about', sectionAbout);
  goTo('#contact', sectionContact);

  // Fonction d'event au click sur le bouton de la homepage
  $('body').on('click', '.home_btn', () => {
    randomPlace(lieux);
  });

  const render = (arr) => {
    /* DESTINATIONS */
    $('#destinations').on('click', () => {
      $('main').html([headerDestinations(), contentDestinations(arr)]);
      $('main').scrollTop(0);
      // -- FILTERS --
      // Button random place
      $('.random').on('click', () => {
        randomPlace(arr);
      });

      // Button displaying map
      $('.map').on('click', () => {
        sectionMap();
        newMap();
      });

      // Select filter
      $('select').on('change', () => {
        const categorySelected = $('select').val();
        if ($('select').val() === 'all') {
          $('.destinations').html(contentDestinations(lieux));
        } else {
          const sort = (item) => item.categories.includes(categorySelected);
          const contentSearched = arr.filter(sort);
          $('.destinations').html(contentDestinations(contentSearched));
        }
      });
    });
  };

  // Card place
  // Display the place that was clicked on
  $('body').on('click', '.destination', (e) => {
    const { id } = e.currentTarget;
    $('main').html(sectionLieu(lieux, id));
    $('main').scrollTop(0);
    if (lieux[id].images.length > 2) {
      carousel();
    }
  });

  // Button random on section lieu
  $('body').on('click', '#btn-lieu_random', () => {
    randomPlace(lieux);
    $('main').scrollTop(0);
  });

  // Button "voir les autres destinations"
  $('body').on('click', '#btn-lieu_back-destinations', () => {
    $('#destinations').click();
  });

  render(lieux);
});
