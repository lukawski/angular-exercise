function Books($resource) {
  return $resource('http://localhost:3000/books/:id');
}

export default Books;
