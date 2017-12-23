/* @ngInject */
function TablesController(TablesApiService, $filter) {
  let books = [];
  let writers = [];

  function nationalityFilter(nationality) {
    this.writers = $filter('filter')(writers, { nationality }); // 1. filter writers by choosen nationality
    this.books = $filter('filter')(books, (value) => { // 2. filter books, find if the given book belongs to any of the filtered writers
      const book = this.writers.find(writer => writer.id === value.author_id);
      return !!book;
    });
  }

  TablesApiService.getWritersAndBooks()
    .then(({ transformedBooks, transformedWriters }) => {
      this.books = transformedBooks;
      this.writers = transformedWriters;

      books = transformedBooks;
      writers = transformedWriters;
    });

  this.nationalities = ['amerykańska', 'norweska', 'polska'];
  this.selectedNationality = '';
  this.writersSearchText = '';
  this.booksSearchText = '';

  this.filterBooks = function filterBooks(searchText) {
    this.books = $filter('filter')(books, searchText);
  };

  this.filterWriters = function filterWriters(searchText) {
    this.writers = $filter('filter')(writers, searchText);
  };

  this.filterBooksByAuthor = function filterBooksByAuthor(authorId) {
    this.books = $filter('filter')(books, { author_id: authorId });
  };

  this.filterByNationality = function filterByNationality() {
    nationalityFilter.call(this, this.selectedNationality);
  };

  this.clearFilters = function clearFilters() {
    this.selectedNationality = '';
    this.writersSearchText = '';
    this.booksSearchText = '';
    this.books = books;
    this.writers = writers;
  };
}

TablesController.$inject = ['TablesApiService', '$filter'];

export default TablesController;
