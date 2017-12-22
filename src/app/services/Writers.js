function Writers($resource) {
  return $resource('http://localhost:3000/writers/:id');
}

Writers.$inject = ['$resource'];

export default Writers;
