import services from '../modules/services';

describe('Books service', () => {
  let Books;

  beforeEach(angular.mock.module(services.name));

  beforeEach(inject((_Books_) => {
    Books = _Books_;
  }));

  it('should exist', () => {
    expect(Books).toBeDefined();
  });
});
