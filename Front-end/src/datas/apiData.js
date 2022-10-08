const apiBaseUrl = import.meta.env.VITE_BASE_URL;

export async function getTopTeas() {
  const response = await fetch(`${apiBaseUrl}/top-teas?populate=*`);
  const responseTeas = await response.json();
  const topTeas = responseTeas.data;
  return topTeas
};

export async function getTeaSize() {
  const response = await fetch(`${apiBaseUrl}/formats`);
  const responseTeas = await response.json();
  const TeaSize = responseTeas.data;
  return TeaSize
};
export async function getTeas() {
  const response = await fetch(`${apiBaseUrl}/teas?populate=*`);
  const responseTeas = await response.json();
  const teas = responseTeas.data;
  return teas
};

export async function getPoppings() {
  const response = await fetch(`${apiBaseUrl}/poppings`);
  const responseTeas = await response.json();
  const poppings = responseTeas.data;
  return poppings
};

export async function getJellies() {
  const response = await fetch(`${apiBaseUrl}/jellies`);
  const responseTeas = await response.json();
  const jellies = responseTeas.data;
  return jellies
};

export async function getSweetness() {
  const response = await fetch(`${apiBaseUrl}/sweetnesses`);
  const responseTeas = await response.json();
  const sweetness = responseTeas.data;
  return sweetness
};
