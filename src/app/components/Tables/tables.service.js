function TablesService() {
  function countWriterBooks(books, authorId) {
    let booksCount = 0;

    for (let i = 0; i < books.length; i += 1) {
      if (books[i].author_id === authorId) {
        booksCount += 1;
      }
    }

    return booksCount;
  }

  function findBookAuthor(writers, authorId) {
    let author = '-';

    for (let i = 0; i < writers.length; i += 1) {
      if (writers[i].id === authorId) {
        author = `${writers[i].first_name} ${writers[i].last_name}`;
        break;
      }
    }

    return author;
  }

  return {
    countWriterBooks,
    findBookAuthor,
  };
}

export default TablesService;
