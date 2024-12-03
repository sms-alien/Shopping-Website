document.addEventListener('DOMContentLoaded', async () => {
    loadHeader();
    loadFooter();

    const productSection = document.getElementById('product');
    const allProductsSection = document.getElementById('all-prod');
    const productDetailSection = document.getElementById('product-detail');
    const categoriesSection = document.getElementById('cate');

    // Load products for the homepage
    if (productSection) {
        const products = await fetchProducts(10);
        products.forEach((product) => {
            const prodHTML = `
                <a class="prod" href="../pages/detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}" class="img-pro">
                    <span class="des">
                        <h2>${product.title}</h2>
                        <h4>$${product.price}</h4>
                    </span>
                </a>
            `;
            productSection.innerHTML += prodHTML;
        });
    }

    // Load all categories dynamically
    if (categoriesSection) {
        const categories = await fetchCategories();
        categoriesSection.innerHTML = '<h3>Categories</h3>';
        categories.forEach((category) => {
            const categoryHTML = `
                <button class="category-btn" data-category="${category}">${category}</button>
            `;
            categoriesSection.innerHTML += categoryHTML;
        });

        // Add event listeners to category buttons
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach((button) => {
            button.addEventListener('click', async (event) => {
                const selectedCategory = event.target.dataset.category;
                const categoryProducts = await fetchProductsByCategory(selectedCategory);

                // Render products for the selected category
                allProductsSection.innerHTML = '';
                categoryProducts.forEach((product) => {
                    const prodHTML = `
                        <a class="prod" href="../pages/detail.html?id=${product.id}">
                            <img src="${product.image}" alt="${product.title}" class="img-pro">
                            <span class="des">
                                <h2>${product.title}</h2>
                                <h4>$${product.price}</h4>
                            </span>
                        </a>
                    `;
                    allProductsSection.innerHTML += prodHTML;
                });
            });
        });
    }

    // Load all products for the products page
    if (allProductsSection) {
        const allProducts = await fetchAllProducts();
        allProducts.forEach((product) => {
            const prodHTML = `
                <a class="prod" href="../pages/detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}" class="img-pro">
                    <span class="des">
                        <h2>${product.title}</h2>
                        <h4>$${product.price}</h4>
                    </span>
                </a>
            `;
            allProductsSection.innerHTML += prodHTML;
        });
    }

    // Load product details for the detail page
    if (productDetailSection) {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('id');
        const product = await fetchProductById(productId);
        productDetailSection.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}</p>
            <h4>$${product.price}</h4>
        `;
    }
});
