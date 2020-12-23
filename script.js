import './style.scss';
import $, { data } from 'jquery';
import { header } from './src/services/section-header';
import { sectionLieu } from './src/services/section-lieu';

$('header').append(header);
// $('main').append(lieu);

$.get('http://localhost:3000/lieux').then((data) => {
  var lieux = data;

  
   $('main').append(sectionLieu(lieux, 1));
    
});
