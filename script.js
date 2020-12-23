import './style.scss';
import $ from 'jquery';
import { header } from './src/services/section-header';
import { sectionLieu } from './src/services/section-lieu';

$('header').append(header);
// $('main').append(lieu);

$.get('http://localhost:3000/lieux').then((data) => {
  var lieux = data;

<<<<<<< HEAD
  
   $('main').append(sectionLieu(lieux, 1));
    
=======
  $('main').append(sectionLieu(lieux, 14));
>>>>>>> fab165ccb3d8d418dcabb666758a1ddc5d79ac10
});
