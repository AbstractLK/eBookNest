const URL = process.env.REACT_APP_URL;

export async function getProductList(searchTerm) {
  // not working (?name_like) above versions of v0.17.4
  const res = await fetch(
    `${URL}/444/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  if(!res.ok) throw {message: res.statusText, status: res.status};
  const data = await res.json();
  return data;
}

export async function getProduct(id){
    const res = await fetch(`${URL}/444/products/${id}`);
    if(!res.ok) throw {message: res.statusText, status: res.status};
    const data = await res.json();
    return data;
}

export async function getFeaturedList() {
    const res = await fetch(`${URL}/444/featured_products`);
    if(!res.ok) throw {message: res.statusText, status: res.status};
    const data = await res.json();
    return data;
}