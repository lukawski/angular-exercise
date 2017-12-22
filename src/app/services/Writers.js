function Writers($resource) {
  return $resource('https://exercise-json-server.herokuapp.com/writers/:id');
}

Writers.$inject = ['$resource'];

export default Writers;
