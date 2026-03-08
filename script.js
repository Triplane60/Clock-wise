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

    if (isRegisterMode == true) {
        document.getElementById("login-title").innerText = "Create Account";
        document.getElementById("auth-submit-btn").innerText = "Register";
        document.getElementById("toggle-link").innerText = "Login here";
    } else {
        document.getElementById("login-title").innerText = "Welcome Back";
        document.getElementById("auth-submit-btn").innerText = "Login";
        document.getElementById("toggle-link").innerText = "Register here";
    }
}

function handleAuth(event) {
    event.preventDefault(); 
    var user = document.getElementById("auth-username").value;
    var pass = document.getElementById("auth-password").value;

    if (user != "" && pass != "") {
        isLoggedIn = true;
        closeLogin(); 
        if (isRegisterMode == true) {
            showNotification("Account created for " + user + "!");
        } else {
            showNotification("Welcome back, " + user + "!");
        }
        document.getElementById("user-display").innerText = "👤 " + user;
    } else {
        showNotification("Please enter a username and password.");
    }
}

function addToCart(name) {
    var watch = watchData[name];
    if (watch && watch.stock > 0) {
        watch.stock = watch.stock - 1; 
        cart.push({ name: name, price: watch.price });
        total = total + watch.price;
        
        updateCartDisplay();
        renderCartItems();
        
        showNotification("✨ " + name + " added to cart!");

        if (document.getElementById("details-modal").style.display === "block") {
            openDetails(name);
        }
    } else {
        showNotification("Out of stock! 🚫");
    }
}

function removeFromCart(index) {
    var itemName = cart[index].name;
    if (watchData[itemName]) {
        watchData[itemName].stock = watchData[itemName].stock + 1; 
    }
    total = total - cart[index].price;
    cart.splice(index, 1);
    
    updateCartDisplay();
    renderCartItems();
}

function renderCartItems() {
    var list = document.getElementById("cart-items-list");
    var totalDisplay = document.getElementById("cart-total-price");
    
    if (cart.length === 0) {
        list.innerHTML = "<p style='color: #888; padding: 20px;'>Empty cart</p>";
    } else {
        var cartHTML = "";
        for (var i = 0; i < cart.length; i++) {
            cartHTML += '<div class="cart-item" style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #eee;">';
            cartHTML += '<span>' + cart[i].name + '</span>';
            cartHTML += '<span>₱' + cart[i].price.toFixed(2) + ' <button onclick="removeFromCart(' + i + ')" style="color:red; border:none; background:none; cursor:pointer;">x</button></span>';
            cartHTML += '</div>';
        }
        list.innerHTML = cartHTML;
    }
    totalDisplay.innerText = total.toFixed(2);
}

function openDetails(name) {
    var data = watchData[name];
    var container = document.getElementById("details-content");
    
    var stockColor = "green";
    if (data.stock <= 0) {
        stockColor = "red";
    }

    var content = '<div style="font-size: 80px;">' + data.icon + '</div>'; 
    content += '<div style="text-align: left;">';
    content += '<h2 style="color: #2e004f;">' + name + '</h2>';
    content += '<p>' + data.desc + '</p>';
    content += '<p style="margin-top: 10px; font-weight: bold; color: ' + stockColor + ';">Stock: ' + data.stock + '</p>';
    content += '<p style="color: #7e57c2; font-size: 0.9em;">' + data.specs + '</p>';
    content += '<button class="add-btn" style="margin-top: 20px;" onclick="addToCart(\'' + name + '\')">Add to Cart - ₱' + data.price.toFixed(2) + '</button>';
    content += '</div>';
    
    container.innerHTML = content;
    document.getElementById("details-modal").style.display = "block";
}
function updateCartDisplay() { document.getElementById('cart-count').innerText = cart.length; }
function openCart() { document.getElementById("cart-modal").style.display = "block"; }
function closeCart() { document.getElementById("cart-modal").style.display = "none"; }
function closeDetails() { document.getElementById("details-modal").style.display = "none"; }

function showNotification(msg) {
    var toast = document.getElementById("toast-notification");
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(function() { toast.classList.remove("show"); }, 3000);
}

function filterCategory(category) {
    var cards = document.querySelectorAll('.watch-card');
    for (var i = 0; i < cards.length; i++) {
        if (category === 'all' || cards[i].classList.contains(category)) {
            cards[i].style.display = 'block'; 
        } else {
            cards[i].style.display = 'none';  
        }
    }
    var buttons = document.querySelectorAll('.nav-item');
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
    }
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }
}

function autoSlide() {
    var container = document.getElementById("slides");
    if (!container) return; 
    currentSlide = (currentSlide + 1) % 2; 
    container.style.transform = "translateX(-" + (currentSlide * 50) + "%)";
}

setInterval(autoSlide, 4000);

window.onclick = function(event) {
    var cartModal = document.getElementById("cart-modal");
    var detailsModal = document.getElementById("details-modal");
    if (event.target == cartModal) cartModal.style.display = "none";
    if (event.target == detailsModal) detailsModal.style.display = "none";
}