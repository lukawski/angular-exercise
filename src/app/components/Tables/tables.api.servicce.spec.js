import services from '../../modules/services';

describe('TablesApiService', () => {
  let TablesApiService;
  let $q;
  let $httpBackend;

  beforeEach(angular.mock.module(services.name));

  beforeEach(inject((_TablesApiService_) => {
    TablesApiService = _TablesApiService_;
  }));

  it('should exist', () => {
    expect(TablesApiService).toBeDefined();
  });
});
