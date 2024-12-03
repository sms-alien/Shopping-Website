const BASE_URL = 'https://fakestoreapi.com';

async function fetchProducts(limit = 10) {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    return response.json();
}

async function fetchAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    return response.json();
}

async function fetchCategories() {
    const response = await fetch(`${BASE_URL}/products/categories`);
    return response.json();
}

async function fetchProductById(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return response.json();
}
