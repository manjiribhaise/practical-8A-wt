

interface Product {
    id: number;
    name: string;
    price: number;
    emoji: string;
}

const products: Product[] = [
    { id: 1, name: "Apple", price: 100, emoji: "🍎" },
    { id: 2, name: "Milk", price: 60, emoji: "🥛" },
    { id: 3, name: "Bread", price: 40, emoji: "🍞" },
    { id: 4, name: "Chocolate", price: 80, emoji: "🍫" }
];

let cart: Product[] = [];

function displayProducts(): void {
    const productDiv = document.getElementById("products");

    if (!productDiv) return;

    productDiv.innerHTML = products.map((p: Product) => `
        <div class="product">
            <h3>${p.emoji} ${p.name}</h3>
            <p>Price: ₹${p.price}</p>
            <button onclick="addToCart(${p.id})">
                Add to Cart
            </button>
        </div>
    `).join("");
}

function addToCart(id: number): void {
    const product = products.find((p: Product) => p.id === id);

    if (product) {
        cart.push(product);
        displayCart();
    }
}

function displayCart(): void {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");

    if (!cartDiv || !totalDiv) return;

    cartDiv.innerHTML = cart.map((p: Product, index: number) => `
        <div class="cart-item">
            ${p.emoji} ${p.name} - ₹${p.price}
            <button class="remove" onclick="removeFromCart(${index})">
                Remove
            </button>
        </div>
    `).join("");

    const total: number = cart.reduce(
        (sum: number, p: Product) => sum + p.price, 0
    );

    totalDiv.textContent = total.toString();
}

function removeFromCart(index: number): void {
    cart = cart.filter((_p: Product, i: number) => i !== index);
    displayCart();
}

// Make functions available to HTML onclick
(window as any).addToCart = addToCart;
(window as any).removeFromCart = removeFromCart;

displayProducts();
displayCart();

