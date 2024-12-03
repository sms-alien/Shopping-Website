function loadHeader() {
    document.getElementById('header').innerHTML = `
        <header>
            <img src="../Assets/Logo-fin.png" alt="Logo">
            <nav>
                <ul>
                    <a href="index.html"><li>Home</li></a>
                    <a href="products.html"><li>Products</li></a>
                    <a href="cart.html"><li>Cart</li></a>
                    <a href="wishlist.html"><li>Wishlist</li></a>
                    <a href="about.html"><li>About Us</li></a>
                </ul>
            </nav>
        </header>`;
}

function loadFooter() {
    document.getElementById('footer').innerHTML = `
        <footer>
            <p>&copy; 2024 E-Commerce. All Rights Reserved.</p>
        </footer>`;
}
