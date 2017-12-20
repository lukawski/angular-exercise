function TablesController(Books, Writers, TablesApiService) {
  TablesApiService.getWritersAndBooks()
    .then(({ transformedBooks, transformedWriters }) => {
      this.books = transformedBooks;
      this.writers = transformedWriters;
    });
}

export default TablesController;
