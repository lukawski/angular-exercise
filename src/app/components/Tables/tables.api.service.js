function TablesApiService($q, Books, Writers, TablesService) {
  function getWritersAndBooks() {
    const promises = [Books.query().$promise, Writers.query().$promise];

    return $q.all(promises)
      .then(function (data) {
        const [ books, writers ] = data;

        const transformedWriters = writers.map(writer => {
          writer.booksCount = TablesService.countWriterBooks(books, writer.id);
          return writer;
        });

        const transformedBooks = books.map(book => {
          book.authorName = TablesService.findBookAuthor(writers, book.author_id);
          return book;
        });

        return {
          transformedBooks,
          transformedWriters
        }
      })
  }

  return {
    getWritersAndBooks: getWritersAndBooks
  }
}

export default TablesApiService;
