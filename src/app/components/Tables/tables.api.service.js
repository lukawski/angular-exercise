/*
  API service for Tables both tables.
  It handles calling both endpoints(/books & /writers) and transforming data.
*/
function TablesApiService($q, Books, Writers, TablesService) {
  function getWritersAndBooks() {
    const promises = [Books.query().$promise, Writers.query().$promise];

    return $q.all(promises)
      .then((data) => {
        const [books, writers] = data;

        const transformedWriters = writers.map((writer) => {
          const newWriter = {
            ...writer,
            booksCount: TablesService.countWriterBooks(books, writer.id),
          };
          return newWriter;
        });

        const transformedBooks = books.map((book) => {
          const newBook = {
            ...book,
            authorName: TablesService.findBookAuthor(writers, book.author_id),
          };
          return newBook;
        });

        return {
          transformedBooks,
          transformedWriters,
        };
      });
  }

  return {
    getWritersAndBooks,
  };
}

TablesApiService.$inject = ['$q', 'Books', 'Writers', 'TablesService'];

export default TablesApiService;
