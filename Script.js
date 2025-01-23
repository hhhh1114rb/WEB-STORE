let cart = [];
let totalPrice = 0; 

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price')); 

        // Add product to cart
        cart.push({ name, price });
        totalPrice += price; 

        updateCart();
    });
}); 

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`; 

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeFromCart(index);
        }); 

        li.appendChild(removeButton);
        cartItems.appendChild(li);
    }); 

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`; 

    saveCart();
} 

function removeFromCart(index) {
    // Remove item from cart
    const item = cart[index];
    totalPrice -= item.price; // Subtract the price from total
    cart.splice(index, 1); // Remove the item from the cart array 

    updateCart(); // Update the cart display
} 

document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Implement checkout functionality here
}); 

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice);
} 

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        totalPrice = parseFloat(localStorage.getItem('totalPrice'));
        updateCart();
    }
} 

document.addEventListener('DOMContentLoaded', loadCart); 

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
} 

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
} 

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
} 

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Implement login functionality here
    alert(`Logging in as ${username}`);
    closeModal('loginModal');
} 

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    // Implement signup functionality here
    alert(`Signing up as ${username}`);
    closeModal('signupModal');
}
