import services from '../modules/services';

describe('Writers service', () => {
  let Writers;

  beforeEach(angular.mock.module(services.name));

  beforeEach(inject((_Writers_) => {
    Writers = _Writers_;
  }));

  it('should exist', () => {
    expect(Writers).toBeDefined();
  });
});
