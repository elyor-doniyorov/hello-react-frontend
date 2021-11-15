const apiSalutes = async () => {
  const request = await fetch('http://localhost:3000/api/salutes');
  const response = await request.json();
  const salute = await response.body;
  return salute;
};

export default apiSalutes;
