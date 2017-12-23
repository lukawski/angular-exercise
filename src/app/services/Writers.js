function Writers($resource, API_URL) {
  return $resource(`${API_URL}writers/:id`);
}

Writers.$inject = ['$resource', 'API_URL'];

export default Writers;
