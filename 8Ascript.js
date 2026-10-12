"use strict";
const products = [
    { id: 1, name: "Apple", price: 100, emoji: "🍎" },
    { id: 2, name: "Milk", price: 60, emoji: "🥛" },
    { id: 3, name: "Bread", price: 40, emoji: "🍞" },
    { id: 4, name: "Chocolate", price: 80, emoji: "🍫" }
];
let cart = [];
function displayProducts() {
    const productDiv = document.getElementById("products");
    if (!productDiv)
        return;
    productDiv.innerHTML = products.map((p) => `
        <div class="product">
            <h3>${p.emoji} ${p.name}</h3>
            <p>Price: ₹${p.price}</p>
            <button onclick="addToCart(${p.id})">
                Add to Cart
            </button>
        </div>
    `).join("");
}
function addToCart(id) {
    const product = products.find((p) => p.id === id);
    if (product) {
        cart.push(product);
        displayCart();
    }
}
function displayCart() {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");
    if (!cartDiv || !totalDiv)
        return;
    cartDiv.innerHTML = cart.map((p, index) => `
        <div class="cart-item">
            ${p.emoji} ${p.name} - ₹${p.price}
            <button class="remove" onclick="removeFromCart(${index})">
                Remove
            </button>
        </div>
    `).join("");
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    totalDiv.textContent = total.toString();
}
function removeFromCart(index) {
    cart = cart.filter((_p, i) => i !== index);
    displayCart();
}
// Make functions available to HTML onclick
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
displayProducts();
displayCart();
