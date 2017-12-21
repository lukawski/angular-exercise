function TablesController(TablesApiService, $filter) {
  let books = [];
  let writers = [];

  TablesApiService.getWritersAndBooks()
    .then(({ transformedBooks, transformedWriters }) => {
      this.books = transformedBooks;
      this.writers = transformedWriters;

      books = transformedBooks;
      writers = transformedWriters;
    });

  this.filterBooks = function filterBooks(searchText) {
    this.books = $filter('filter')(books, searchText);
  };

  this.filterWriters = function filterWriters(searchText) {
    this.writers = $filter('filter')(writers, searchText);
  };

  this.filterBooksByAuthor = function filterBooksByAuthor(authorId) {
    this.books = $filter('filter')(books, { author_id: authorId });
  };
}

export default TablesController;
