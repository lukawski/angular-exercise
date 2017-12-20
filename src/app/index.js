import angular from 'angular';
import ngResource from 'angular-resource'

//import '../style/index.css';
import controllersModule from './modules/controllers';
import servicesModule from './modules/services';

console.log(servicesModule);

angular.module('app', [
  ngResource,
  controllersModule.name,
  servicesModule.name
]);
