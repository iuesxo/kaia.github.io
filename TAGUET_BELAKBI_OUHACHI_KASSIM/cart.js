

let cart = [];

window.onload = function () {
    const savedCart = sessionStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];

    updateCartDisplay();
    updateCartCount();
};

function addToCart(product) {
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.textContent = "Votre panier est vide.";
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ${item.price}`;
        cartItemsContainer.appendChild(itemDiv);
    });
}

function checkout() {
    sessionStorage.removeItem("cart");
    cart = [];
    updateCartDisplay();
    updateCartCount();
    alert("Thank you for your order");
}
function showImage(img) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    popupImg.src = img.src;
    popup.style.display = "flex";
}

// Fonction pour fermer le popup
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
