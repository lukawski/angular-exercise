import angular from 'angular';

import Books from '../services/Books';
import Writers from '../services/Writers';
import TablesService from '../components/Tables/tables.service';
import TablesApiService from '../components/Tables/tables.api.service';

const servicesModule = angular.module('services', [])
  .factory('Books', Books)
  .factory('Writers', Writers)
  .factory('TablesService', TablesService)
  .factory('TablesApiService', TablesApiService);

export default servicesModule;
