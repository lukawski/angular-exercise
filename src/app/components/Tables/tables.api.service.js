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

export default TablesApiService;
