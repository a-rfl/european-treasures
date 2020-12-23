import './style.scss';
import $, { data } from 'jquery';
import { header } from './src/services/section-header';
import { sectionLieu } from './src/services/section-lieu';

$('header').append(header);
// $('main').append(lieu);

$.get('http://localhost:3000/lieux').then((data) => {
  var lieux = data;

  $('main').append(sectionLieu(lieux, 9));

  if (lieux[9].dimensions.superficie) {
    document.getElementById('dimension').innerHTML += '<div>Superficie</div>';
    $('#dimension').append(lieux[9].dimensions.superficie);
    document.getElementById('dimension_Mobile').innerHTML += '<div>Superficie</div>';
    $('#dimension_Mobile').append(lieux[9].dimensions.superficie);
  }

  if (lieux[9].dimensions.longueur) {
    document.getElementById('dimension').innerHTML += '<div>Longueur</div>';
    $('#dimension').append(lieux[3].dimensions.longueur);
    document.getElementById('dimension_Mobile').innerHTML += '<div>Longueur</div>';
    $('#dimension_Mobile').append(lieux[3].dimensions.superficie);
  }

  if (lieux[3].dimensions.largeur) {
    document.getElementById('dimension').innerHTML += '<div>Largeur</div>';
    $('#dimension').append(lieux[3].dimensions.largeur);
    document.getElementById('dimension_Mobile').innerHTML += '<div>Largeur</div>';
    $('#dimension_Mobile').append(lieux[3].dimensions.superficie);
  }

  if (lieux[3].dimensions.altitude) {
    document.getElementById('dimension').innerHTML += '<div>Altitude</div>';
    $('#dimension').append(lieux[3].dimensions.altitude);
    document.getElementById('dimension_Mobile').innerHTML += '<div>Altitude</div>';
    $('#dimension_Mobile').append(lieux[3].dimensions.superficie);
  }

  if (lieux[3].dimensions.profondeur) {
    document.getElementById('dimension').innerHTML += '<div>Profondeur</div>';
    $('#dimension').append(lieux[3].dimensions.profondeur);
    document.getElementById('dimension_Mobile').innerHTML += '<div>Profondeur</div>';
    $('#dimension_Mobile').append(lieux[3].dimensions.superficie);
  }
});
