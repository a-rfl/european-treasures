import './style.scss';
import $ from 'jquery';
import { header } from './src/services/section-header';
import { lieu } from './src/services/section-lieu';

$('header').append(header);
$('main').append(lieu);
