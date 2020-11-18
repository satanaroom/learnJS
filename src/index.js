'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import switchTeam from './modules/switchTeam';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timer
countTimer('15 november 2020');
//Menu
toggleMenu();
//popup
togglePopUp();
//Tabs
tabs();
//Slider
slider();
//Our Team switch
switchTeam();
//Culc
calc(100);
//send-ajax-form
sendForm();