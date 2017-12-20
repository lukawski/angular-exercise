import angular from 'angular';

import TablesController from '../components/Tables/tables.controller';

const controllersModule = angular.module('controllers', [])
  .controller('TablesController', TablesController);

export default controllersModule;
