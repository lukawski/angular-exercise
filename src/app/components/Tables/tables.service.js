function TablesService() {
  function countWriterBooks(books, authorId) {
    let booksCount = 0;

    for (let i = 0; i < books.length; i++) {
      if (books[i].author_id === authorId) {
        booksCount++;
      }
    }

    return booksCount;
  }

  function findBookAuthor(writers, authorId) {
    let author = `-`;

    for (let i = 0; i < writers.length; i++) {
      console.log(writers[i].id, authorId);
      if (writers[i].id === authorId) {
        author = `${writers[i].first_name} ${writers[i].last_name}`;
        console.log(author);
        break;
      }
    }

    return author;
  }

  return {
    countWriterBooks: countWriterBooks,
    findBookAuthor: findBookAuthor
  }
}

export default TablesService;
