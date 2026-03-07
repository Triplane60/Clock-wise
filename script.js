let cart = [];
let total = 0;

function filterCategory(category) {
    const cards = document.querySelectorAll('.watch-card');
    const buttons = document.querySelectorAll('.nav-item');


    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block'; 
        } else if (card.classList.contains(category)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';  
        }
    });
}

function addToCart(watchName, price) {
    cart.push({ name: watchName, price: price });
    total += price;
    
    updateCartDisplay();
    renderCartItems(); 
}

function updateCartDisplay() {
    document.getElementById('cart-count').innerText = cart.length;
}

function openCart() {
    document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("cart-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function renderCartItems() {
    const list = document.getElementById("cart-items-list");
    const totalDisplay = document.getElementById("cart-total-price");
    list.innerHTML = "";

    if (cart.length === 0) {
        list.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        cart.forEach((item, index) => {
            list.innerHTML += `
                <div class="cart-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span>${item.name} (₱${item.price})</span>
                    <button onclick="removeFromCart(${index})" style="color: red; border: none; background: none; cursor: pointer;">Remove</button>
                </div>`;
        });
    }
    totalDisplay.innerText = total.toFixed(2);
}

function removeFromCart(index) {
    total -= cart[index].price; 
    cart.splice(index, 1);     
    updateCartDisplay();
    renderCartItems();
}

function showNotification(message) {
    const toast = document.getElementById("toast-notification");
    toast.innerText = message;
    toast.classList.add("show"); 

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
