import { Template } from 'meteor/templating';


/* ============================== importing home html template ============================== */
import './home.html';
/* ============================== importing signup template ============================== */
import './signup.js';
/* ============================== importing login template ============================== */
import './login.js';


/* ============================== Hooks ============================== */
Template.home.onRendered( () => {
  //$('body').css('background-image', 'url("fondo5.jpg")');
});


/* ============================== Events ============================== */
Template.home.events({
  'click .js-event-anchor-nav'(event) {

  }
});
