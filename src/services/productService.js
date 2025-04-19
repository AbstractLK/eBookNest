export async function getProductList(searchTerm) {
  // not working (?name_like) above versions of v0.17.4
  const res = await fetch(
    `http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  const data = await res.json();
  return data;
}

export async function getProduct(id){
    const res = await fetch(`http://localhost:8000/444/products/${id}`);
    const data = await res.json();
    return data;
}

export async function getFeaturedList() {
    const res = await fetch("http://localhost:8000/444/featured_products");
    const data = await res.json();
    return data;
}