let cart = [];
let total = 0;

function filterCategory(category) {
    const cards = document.querySelectorAll('.watch-card');
    const buttons = document.querySelectorAll('.nav-item');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
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
    
    showNotification(`✨ ${watchName} added to cart!`);
}

function updateCartDisplay() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

function openCart() {
    const modal = document.getElementById("cart-modal");
    if (modal) modal.style.display = "block";
}

function closeCart() {
    const modal = document.getElementById("cart-modal");
    if (modal) modal.style.display = "none";
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
    
    if (!list) return; 

    if (cart.length === 0) {
        list.innerHTML = "<p style='color: #888; padding: 20px;'>Your cart is empty!</p>";
    } else {
        let itemsHTML = "";
        cart.forEach((item, index) => {
            itemsHTML += `
                <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #eee;">
                    <div style="text-align: left;">
                        <div style="font-weight: 600; color: #2e004f;">${item.name}</div>
                        <div style="color: #7e57c2; font-size: 0.9em;">₱${item.price.toFixed(2)}</div>
                    </div>
                    <button onclick="removeFromCart(${index})" style="color: #ff4444; border: none; background: none; cursor: pointer; font-weight: bold;">Remove</button>
                </div>`;
        });
        list.innerHTML = itemsHTML;
    }
    if (totalDisplay) {
        totalDisplay.innerText = total.toFixed(2);
    }
}

function removeFromCart(index) {
    total -= cart[index].price; 
    cart.splice(index, 1);     
    updateCartDisplay();
    renderCartItems();
}

function showNotification(message) {
    const toast = document.getElementById("toast-notification");
    
    if (!toast) {
        console.error("Toast element missing from HTML!");
        return;
    }

    toast.innerText = message;
    
    toast.style.visibility = "visible";
    toast.style.opacity = "1";
    toast.classList.add("show");

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.style.visibility = "hidden";
            toast.classList.remove("show");
        }, 500); 
    }, 3000);
}function closeCart() {
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
    
    if (cart.length === 0) {
        list.innerHTML = "<p style='color: #888;'>Your cart is empty!</p>";
    } else {
        let itemsHTML = "";
        cart.forEach((item, index) => {
            itemsHTML += `
                <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #eee;">
                    <div style="text-align: left;">
                        <div style="font-weight: 600;">${item.name}</div>
                        <div style="color: var(--violet-main); font-size: 0.9em;">₱${item.price.toFixed(2)}</div>
                    </div>
                    <button onclick="removeFromCart(${index})" style="color: #ff4444; border: 1px solid #ff4444; background: none; cursor: pointer; padding: 5px 10px; border-radius: 4px; font-size: 0.8em;">Remove</button>
                </div>`;
        });
        list.innerHTML = itemsHTML;
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
