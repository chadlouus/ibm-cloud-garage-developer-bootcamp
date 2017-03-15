import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {productsComponent} from './products-component.js';
import {productsServiceModule} from './service/products-service';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const products = angular.module('products', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  productsServiceModule.name
])
.config( ($stateProvider) => {
  $stateProvider.
  state('products', {
    url: '/products',
    template: '<products></products>'
  });
})
.directive('products', productsComponent);
