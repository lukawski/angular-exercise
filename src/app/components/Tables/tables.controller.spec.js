import controllers from '../../modules/controllers';
import services from '../../modules/services';

describe('Tables Controller', () => {
  let $controller;
  let TablesController;
  let TablesApiService;
  let $filter;
  let $q;

  beforeEach(angular.mock.module(services.name));
  beforeEach(angular.mock.module(controllers.name));

  beforeEach(inject((_$controller_, _TablesApiService_, _$filter_, _$q_) => {
    $controller = _$controller_;
    TablesApiService = _TablesApiService_;
    $filter = _$filter_;
    $q = _$q_;

    spyOn(TablesApiService, 'getWritersAndBooks').and.callFake(() => {
      const deffered = $q.defer();
      return deffered.promise;
    });

    TablesController = $controller('TablesController', { TablesApiService, $filter });
  }));

  it('should be defined', () => {
    expect(TablesController).toBeDefined();
  });

  it('should initialize with a call to TablesApiService.getWritersAndBooks()', () => {
    expect(TablesApiService.getWritersAndBooks).toHaveBeenCalled();
  });

  describe('.filterBooks()', () => {
    it('should be defined', () => {
      expect(TablesController.filterBooks).toBeDefined();
    });
  });

  describe('.filterWriters()', () => {
    it('should be defined', () => {
      expect(TablesController.filterWriters).toBeDefined();
    });
  });
});
