function Books($resource, API_URL) {
  return $resource(`${API_URL}books/:id`);
}

Books.$inject = ['$resource', 'API_URL'];

export default Books;
