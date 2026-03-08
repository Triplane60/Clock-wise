const watchData = {
    "Midnight Diver": { 
        desc: "Rugged masterpiece for deep-sea exploration.", 
        specs: "200m Waterproof | Strap: Rubber", 
        icon: "🌊", price: 150.00, stock: 12 
    },
    "Alpine Explorer": { 
        desc: "Built for those who reach the highest peaks.", 
        specs: "Altimeter | Strap: Leather", 
        icon: "⛰️", price: 180.00, stock: 5 
    },
    "Titan Stealth": { 
        desc: "Tactical matte black finish with night-vision lume.", 
        specs: "Titanium Case | 100m Water Resist", 
        icon: "🌑", price: 210.00, stock: 7 
    },
    "Silver Classic": { 
        desc: "Timeless elegance for every occasion.", 
        specs: "Stainless Steel | Case: 38mm", 
        icon: "💎", price: 120.00, stock: 8 
    },
    "Rose Gold Petit": { 
        desc: "Delicate luxury designed for smaller wrists.", 
        specs: "18k Rose Gold | Strap: Mesh", 
        icon: "🌸", price: 140.00, stock: 2 
    },
    "Starlight Pearl": { 
        desc: "Mother-of-pearl dial with Swarovski crystals.", 
        specs: "Case: 34mm | Strap: Satin Leather", 
        icon: "✨", price: 165.00, stock: 4 
    },
    "Sky Rocket": { 
        desc: "Space-themed timepiece with shock-resistance.", 
        specs: "Shock Resistant | Glow-in-dark", 
        icon: "🚀", price: 45.00, stock: 15 
    },
    "Dino Track": { 
        desc: "BPA-free silicone with prehistoric design.", 
        specs: "Waterproof | Movement: Analog", 
        icon: "🦖", price: 40.00, stock: 20 
    },
    "Neon Pulse": { 
        desc: "Vibrant watch with LED backlight and stopwatch.", 
        specs: "LED Backlight | Strap: Nylon", 
        icon: "🌈", price: 55.00, stock: 12 
    },
    "The Golden Era": { 
        desc: "Rare 18k gold collector piece (1 of 100).", 
        specs: "Gold Plating | Swiss Automatic", 
        icon: "👑", price: 199.00, stock: 2 
    },
    "Lunar Eclipse": { 
        desc: "Features actual fragments of meteorite.", 
        specs: "Meteorite Dial | Swiss Automatic", 
        icon: "🌙", price: 250.00, stock: 2 
    },
    "Heritage 1920": { 
        desc: "Centennial reissue with manual-wind movement.", 
        specs: "Manual Wind | Sapphire Glass", 
        icon: "📜", price: 225.00, stock: 5 
    }
};

let cart = [];
let total = 0;
let currentSlide = 0;
let isLoggedIn = false;
let isRegisterMode = false;

function openLoginModal() { 
    document.getElementById("login-modal").style.display = "block"; 
}

function closeLogin() { 
    document.getElementById("login-modal").style.display = "none"; 
}

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    document.getElementById("login-title").innerText = isRegisterMode ? "Create Account" : "Welcome Back";
    document.getElementById("auth-submit-btn").innerText = isRegisterMode ? "Register" : "Login";
    document.getElementById("toggle-link").innerText = isRegisterMode ? "Login here" : "Register here";
}

function handleAuth(event) {
    event.preventDefault(); 
    
    const user = document.getElementById("auth-username").value;
    const pass = document.getElementById("auth-password").value;

    if (user.trim() !== "" && pass.trim() !== "") {
        isLoggedIn = true;
        closeLogin(); 
        
        if (isRegisterMode) {
            showNotification(`Account created for ${user}!`);
        } else {
            showNotification(`Welcome back, ${user}!`);
        }
        
        document.getElementById("user-display").innerText = user;
    } else {
        showNotification("Please enter a username and password.");
    }
}

function addToCart(name) {
    const watch = watchData[name];
    if (watch && watch.stock > 0) {
        watch.stock -= 1; 
        cart.push({ name: name, price: watch.price });
        total += watch.price;
        
        updateCartDisplay();
        renderCartItems();
        showNotification(`✨ ${name} added to cart!`);

        if (document.getElementById("details-modal").style.display === "block") {
            openDetails(name);
        }
    } else {
        showNotification("Out of stock! 🚫");
    }
}

function removeFromCart(index) {
    const itemName = cart[index].name;
    if (watchData[itemName]) {
        watchData[itemName].stock += 1; 
    }
    total -= cart[index].price;
    cart.splice(index, 1);
    
    updateCartDisplay();
    renderCartItems();
}

function openDetails(name) {
    const data = watchData[name];
    if (!data) return;

    const container = document.getElementById("details-content");
    container.innerHTML = `
        <div style="font-size: 80px;">${data.icon}</div>
        <div style="text-align: left;">
            <h2 style="color: #2e004f;">${name}</h2>
            <p>${data.desc}</p>
            <p style="margin-top: 10px; font-weight: bold; color: ${data.stock > 0 ? 'green' : 'red'};">
                Stock: ${data.stock}
            </p>
            <p style="color: #7e57c2; font-size: 0.9em;">${data.specs}</p>
            <button class="add-btn" style="margin-top: 20px;" onclick="addToCart('${name}')">
                Add to Cart - ₱${data.price.toFixed(2)}
            </button>
        </div>
    `;
    document.getElementById("details-modal").style.display = "block";
}

window.onclick = function(event) {
    const cartModal = document.getElementById("cart-modal");
    const detailsModal = document.getElementById("details-modal");
    if (event.target == cartModal) cartModal.style.display = "none";
    if (event.target == detailsModal) detailsModal.style.display = "none";
}

function updateCartDisplay() { document.getElementById('cart-count').innerText = cart.length; }
function openCart() { document.getElementById("cart-modal").style.display = "block"; }
function closeCart() { document.getElementById("cart-modal").style.display = "none"; }
function closeDetails() { document.getElementById("details-modal").style.display = "none"; }

function renderCartItems() {
    const list = document.getElementById("cart-items-list");
    const totalDisplay = document.getElementById("cart-total-price");
    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = "<p style='color: #888; padding: 20px;'>Empty cart</p>";
    } else {
        list.innerHTML = cart.map((item, index) => `
            <div class="cart-item" style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee;">
                <span>${item.name}</span>
                <span>₱${item.price.toFixed(2)} <button onclick="removeFromCart(${index})" style="color:red; border:none; background:none; cursor:pointer;">x</button></span>
            </div>
        `).join('');
    }
    totalDisplay.innerText = total.toFixed(2);
}

function showNotification(msg) {
    const toast = document.getElementById("toast-notification");
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function filterCategory(category) {
    const cards = document.querySelectorAll('.watch-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';  
        }
    });

    if (window.event && window.event.target) {
        const buttons = document.querySelectorAll('.nav-item');
        buttons.forEach(btn => btn.classList.remove('active'));
        window.event.target.classList.add('active');
    }
}

function autoSlide() {
    const container = document.getElementById("slides");
    if (!container) return; 
    
    currentSlide = (currentSlide + 1) % 2; 
    
    container.style.transform = `translateX(-${currentSlide * 50}%)`;
}

setInterval(autoSlide, 4000);

function handleAuth(event) {
    event.preventDefault(); 
    
    const user = document.getElementById("auth-username").value;
    const pass = document.getElementById("auth-password").value;

    if (user.trim() !== "" && pass.trim() !== "") {
        isLoggedIn = true;
        closeLogin(); 
        
        if (isRegisterMode) {
            showNotification(`Account created for ${user}!`);
        } else {
            showNotification(`Welcome back, ${user}!`);
        }
        
        document.getElementById("user-display").innerText = `👤 ${user}`;
    } else {
        showNotification("Please enter a username and password.");
    }
}