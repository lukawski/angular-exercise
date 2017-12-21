function TablesController(Books, Writers, TablesApiService, $filter) {
  let books = [];
  let writers = [];

  TablesApiService.getWritersAndBooks()
    .then(({ transformedBooks, transformedWriters }) => {
      this.books = transformedBooks;
      this.writers = transformedWriters;

      books = transformedBooks;
      writers = transformedWriters;
    });

  this.filterBooks = function (searchText) {
    this.books = $filter('filter')(books, searchText);
  };

  this.filterWriters = function (searchText) {
    this.writers = $filter('filter')(writers, searchText);
  };
}

export default TablesController;
