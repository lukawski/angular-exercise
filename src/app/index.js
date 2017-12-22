import angular from 'angular';

import '../style/index.css';
import controllersModule from './modules/controllers';
import servicesModule from './modules/services';

angular.module('tablesModule', [
  servicesModule.name,
  controllersModule.name,
]);
