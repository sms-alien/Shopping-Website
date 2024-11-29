// Fetch limited product from the Fake Store API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');       
        const products = await response.json();   

        const productSection = document.getElementById('product');

        for (const product of products) {

            const prodDiv = document.createElement('div');
            prodDiv.className = 'prod';

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.className = 'img-pro';
            prodDiv.appendChild(img);

            const desSpan = document.createElement('span');
            desSpan.className = 'des';

            const title = document.createElement('h2');
            title.textContent = product.title;
            desSpan.appendChild(title);

            const price = document.createElement('h4');
            price.textContent = `$${product.price}`;
            desSpan.appendChild(price);

            prodDiv.appendChild(desSpan);

            productSection.appendChild(prodDiv);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// fetch categories
async function categories(params) {
    try {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const cate = await res.json()
        const marq = document.getElementById('marquee')

        for (const cat of cate) {
            const h2 = document.createElement('h2')
            h2.textContent = cat
            marq.appendChild(h2)
        }

    } catch (error) {
        console.log(error)
    }
}

// fetch sort
async function sorting() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?sort=desc');
        const products = await response.json();

        const productSection = document.getElementById('sort');

        for (const product of products) {

            const prodDiv = document.createElement('div');
            prodDiv.className = 'prod';

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.className = 'img-pro';
            prodDiv.appendChild(img);

            const desSpan = document.createElement('span');
            desSpan.className = 'des';

            const title = document.createElement('h2');
            title.textContent = product.title;
            desSpan.appendChild(title);

            const price = document.createElement('h4');
            price.textContent = `$${product.price}`;
            desSpan.appendChild(price);

            prodDiv.appendChild(desSpan);

            productSection.appendChild(prodDiv);
        }
    } catch (error) {
        console.log(error);
    }
}

async function allProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        const productSection = document.getElementById('all-prod');

        for (const product of products) {

            const prodDiv = document.createElement('div');
            prodDiv.className = 'prod';

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.className = 'img-pro';
            prodDiv.appendChild(img);

            const desSpan = document.createElement('span');
            desSpan.className = 'des';

            const title = document.createElement('h2');
            title.textContent = product.title;
            desSpan.appendChild(title);

            const price = document.createElement('h4');
            price.textContent = `$${product.price}`;
            desSpan.appendChild(price);

            prodDiv.appendChild(desSpan);

            productSection.appendChild(prodDiv);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchProducts()
categories()
sorting()
allProduct()
