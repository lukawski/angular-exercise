function Books($resource) {
  return $resource('http://localhost:3000/books/:id');
}

Books.$inject = ['$resource'];

export default Books;
