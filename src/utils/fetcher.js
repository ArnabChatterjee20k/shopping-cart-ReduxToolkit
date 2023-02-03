const URL = "https://api.pujakaitem.com/api/products";

async function fetchAll() {
  try {
    const res = await fetch(URL);
    const products = await res.json();
    return products;
  } catch (error) {
    return error.message;
  }
}

async function fetchById(id) {
  const NEW_URL = `${UR}/${id}`;
  try {
    const res = await fetch(URL);
    const product = await res.json();
    return product;
  } catch (error) {
    return error.message;
  }
}

const fetcher = {
  fetchAll,
  fetchById,
};

export default fetcher;
