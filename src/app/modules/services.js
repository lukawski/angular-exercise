import angular from 'angular';
import ngResource from 'angular-resource';

import Books from '../services/Books';
import Writers from '../services/Writers';
import TablesService from '../components/Tables/tables.service';
import TablesApiService from '../components/Tables/tables.api.service';

const servicesModule = angular.module('services', [ngResource])
  .factory('Books', Books)
  .factory('Writers', Writers)
  .factory('TablesService', TablesService)
  .factory('TablesApiService', TablesApiService)
  .constant('API_URL', 'https://exercise-json-server.herokuapp.com/');

export default servicesModule;
