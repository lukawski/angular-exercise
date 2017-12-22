function Books($resource) {
  return $resource('https://exercise-json-server.herokuapp.com/books/:id');
}

Books.$inject = ['$resource'];

export default Books;
