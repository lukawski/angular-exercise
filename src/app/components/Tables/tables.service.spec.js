import services from '../../modules/services';

describe('Tables Service', () => {
  let TablesService;
  const books = [
    {
      id: 1,
      author_id: 2,
      title: 'Pierwszy śnieg',
      year: 2007,
    },
    {
      id: 2,
      author_id: 2,
      title: 'To',
      year: 1986,
    },
  ];

  const writers = [
    {
      id: 1,
      first_name: 'Jo',
      last_name: 'Nesbo',
      nationality: 'norweska',
    },
    {
      id: 2,
      first_name: 'Stephen',
      last_name: 'King',
      nationality: 'amerykańska',
    },
  ];

  beforeEach(angular.mock.module(services.name));

  beforeEach(inject((_TablesService_) => {
    TablesService = _TablesService_;
  }));

  it('should exist', () => {
    expect(TablesService).toBeDefined();
  });

  describe('.countWriterBooks()', () => {
    it('should exist', () => {
      expect(TablesService.countWriterBooks).toBeDefined();
    });

    it('should count author books based on author id', () => {
      expect(TablesService.countWriterBooks(books, 2)).toEqual(2);
    });
  });

  describe('.findBookAuthor()', () => {
    it('should exist', () => {
      expect(TablesService.findBookAuthor).toBeDefined();
    });

    it('should return author full name if author exists', () => {
      expect(TablesService.findBookAuthor(writers, 1)).toEqual('Jo Nesbo');
    });

    it('should return "-" if author doesn\'t exists', () => {
      expect(TablesService.findBookAuthor(writers, 3)).toEqual('-');
    });
  });
});
