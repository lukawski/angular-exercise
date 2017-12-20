function Writers($resource) {
  return $resource('http://localhost:3000/writers/:id');
}

export default Writers;
