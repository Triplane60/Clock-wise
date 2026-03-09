var watchData = {
    "Midnight Diver": { desc: "Rugged masterpiece for deep-sea exploration.", specs: "200m Waterproof | Strap: Rubber", icon: "🌊", price: 150.00, stock: 12 },
    "Alpine Explorer": { desc: "Built for those who reach the highest peaks.", specs: "Altimeter | Strap: Leather", icon: "⛰️", price: 180.00, stock: 5 },
    "Titan Stealth": { desc: "Tactical matte black finish with night-vision lume.", specs: "Titanium Case | 100m Water Resist", icon: "🌑", price: 210.00, stock: 7 },
    "Silver Classic": { desc: "Timeless elegance for every occasion.", specs: "Stainless Steel | Case: 38mm", icon: "💎", price: 120.00, stock: 8 },
    "Rose Gold Petit": { desc: "Delicate luxury designed for smaller wrists.", specs: "18k Rose Gold | Strap: Mesh", icon: "🌸", price: 140.00, stock: 2 },
    "Starlight Pearl": { desc: "Mother-of-pearl dial with Swarovski crystals.", specs: "Case: 34mm | Strap: Satin Leather", icon: "✨", price: 165.00, stock: 4 },
    "Sky Rocket": { desc: "Space-themed timepiece with shock-resistance.", specs: "Shock Resistant | Glow-in-dark", icon: "🚀", price: 45.00, stock: 15 },
    "Dino Track": { desc: "BPA-free silicone with prehistoric design.", specs: "Waterproof | Movement: Analog", icon: "🦖", price: 40.00, stock: 20 },
    "Neon Pulse": { desc: "Vibrant watch with LED backlight and stopwatch.", specs: "LED Backlight | Strap: Nylon", icon: "🌈", price: 55.00, stock: 12 },
    "The Golden Era": { desc: "Rare 18k gold collector piece (1 of 100).", specs: "Gold Plating | Swiss Automatic", icon: "👑", price: 199.00, stock: 2 },
    "Lunar Eclipse": { desc: "Features actual fragments of meteorite.", specs: "Meteorite Dial | Swiss Automatic", icon: "🌙", price: 250.00, stock: 2 },
    "Heritage 1920": { desc: "Centennial reissue with manual-wind movement.", specs: "Manual Wind | Sapphire Glass", icon: "📜", price: 225.00, stock: 5 }
};

var cart = [];
var total = 0;
var currentSlide = 0;
var isLoggedIn = false;
var isRegisterMode = false;
var userToReset = "";

function showHome() {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('shop-page').style.display = 'none';
    window.location.hash = '';
}

function showShop() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('shop-page').style.display = 'block';
    window.location.hash = 'shop';
    filterCategory('all');
}

function showShopWithCategory(category) {
    showShop();
    setTimeout(function() {
        filterCategory(category);
    }, 50);
}

window.onload = function() {
    var activeUser = localStorage.getItem("currentUser");
    if (activeUser) {
        isLoggedIn = true;
        var userDisplay = document.getElementById("user-display");
        if (userDisplay) userDisplay.innerText = "👤 " + activeUser;
    }

    if (window.location.hash === '#shop') {
        showShop();
    } else {
        showHome();
    }

    startCountdown();
};

function startCountdown() {
    var countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var daysSpan = document.getElementById("days");
        var hoursSpan = document.getElementById("hours");
        var minutesSpan = document.getElementById("minutes");
        var secondsSpan = document.getElementById("seconds");

        if (daysSpan) daysSpan.innerHTML = days;
        if (hoursSpan) hoursSpan.innerHTML = hours;
        if (minutesSpan) minutesSpan.innerHTML = minutes;
        if (secondsSpan) secondsSpan.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            var timerDiv = document.querySelector(".timer");
            if (timerDiv) timerDiv.innerHTML = "EXPIRED";
        }
    }, 1000);
}

function openLoginModal() { 
    document.getElementById("login-modal").style.display = "block"; 
}
function closeLogin() { 
    document.getElementById("login-modal").style.display = "none"; 
}
function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    var title = document.getElementById("login-title");
    var subtitle = document.getElementById("login-subtitle"); 
    var submitBtn = document.getElementById("auth-submit-btn");
    var toggleLink = document.getElementById("toggle-link");
    var toggleText = document.getElementById("toggle-text");

    if (isRegisterMode) {
        title.innerText = "Create Account";
        subtitle.innerText = "Join us to explore premium timepieces"; 
        submitBtn.innerText = "Register";
        toggleText.innerText = "Already have an account?";
        toggleLink.innerText = "Login here";
    } else {
        title.innerText = "Welcome Back";
        subtitle.innerText = "Please login to start shopping"; 
        submitBtn.innerText = "Login";
        toggleText.innerText = "Don't have an account?";
        toggleLink.innerText = "Register here";
    }
}
function handleAuth(event) {
    event.preventDefault();
    var user = document.getElementById("auth-username").value;
    var pass = document.getElementById("auth-password").value;

    if (isRegisterMode) {
        if (pass.length < 8 || !/[a-zA-Z]/.test(pass)) {
            showNotification("Password needs 8 chars and 1 letter! 🛑");
            return;
        }
        localStorage.setItem("user_" + user, pass);
        showNotification("Account created! Please Login.");
        toggleAuthMode();
    } else {
        var savedPass = localStorage.getItem("user_" + user);
        if (savedPass && savedPass === pass) {
            isLoggedIn = true;
            localStorage.setItem("currentUser", user);
            document.getElementById("user-display").innerText = "👤 " + user;
            
            document.getElementById("auth-username").value = "";
            document.getElementById("auth-password").value = "";
            document.getElementById("auth-password").type = "password";
            document.getElementById("eye-icon").innerHTML = closedEyeSVG;
            
            closeLogin();
            showNotification("Welcome back, " + user + "! ✨");
        } else {
            showNotification("Invalid Credentials! ❌");
        }
    }
}
function handleForgotPassword() {
    var username = document.getElementById("auth-username").value;
    if (username === "") {
        showNotification("Please enter your username first! 📧");
        return; 
    }
    var savedPass = localStorage.getItem("user_" + username);
    if (!savedPass) {
        showNotification("Account not found! Please check the username. ❌");
        return; 
    }
    userToReset = username; 
    document.getElementById("reset-username-display").innerText = username; 
    document.getElementById("new-reset-password").value = ""; 
    document.getElementById("confirm-reset-password").value = ""; 
    
    closeLogin(); 
    document.getElementById("forgot-password-modal").style.display = "block"; 
}
function closeForgotPasswordModal() {
    document.getElementById("forgot-password-modal").style.display = "none";
}
function executePasswordReset() {
    var newPassword = document.getElementById("new-reset-password").value;
    var confirmPassword = document.getElementById("confirm-reset-password").value; 

    if (newPassword !== confirmPassword) {
        showNotification("Passwords do not match! Please try again. ❌");
        return;
    }
    if (newPassword.length < 8) {
        showNotification("Reset failed: Password must be at least 8 characters! 🛑");
        return;
    }
    var hasLetter = /[a-zA-Z]/.test(newPassword);
    if (!hasLetter) {
        showNotification("Reset failed: Password must include at least one letter! 🔠");
        return;
    }
    localStorage.setItem("user_" + userToReset, newPassword);
    closeForgotPasswordModal();
    showNotification("Password successfully updated! You can now login. 🔐");
}
function handleUserClick() {
    if (!isLoggedIn) {
        openLoginModal(); 
    } else {
        var dropdown = document.getElementById("user-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }
}
function handleLogout() {
    document.getElementById("user-dropdown").style.display = "none"; 
    document.getElementById("logout-confirm-modal").style.display = "block"; 
}
function closeLogoutModal() {
    document.getElementById("logout-confirm-modal").style.display = "none";
}
function executeLogout() {
    isLoggedIn = false;
    localStorage.removeItem("currentUser");
    document.getElementById("user-display").innerText = "👤 Login";
    document.getElementById("logout-confirm-modal").style.display = "none";
    
    document.getElementById("auth-username").value = "";
    document.getElementById("auth-password").value = "";
    document.getElementById("auth-password").type = "password";
    document.getElementById("eye-icon").innerHTML = closedEyeSVG;

    showNotification("Logged out successfully! 👋");
}

var openEyeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
var closedEyeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
function togglePasswordVisibility() {
    var passInput = document.getElementById("auth-password");
    var eyeIcon = document.getElementById("eye-icon");
    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.innerHTML = openEyeSVG; 
    } else {
        passInput.type = "password";
        eyeIcon.innerHTML = closedEyeSVG; 
    }
}
function toggleResetPassword(inputId, iconElement) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconElement.innerHTML = openEyeSVG; 
    } else {
        passwordInput.type = "password";
        iconElement.innerHTML = closedEyeSVG; 
    }
}

function addToCart(watchName) {
    var watch = watchData[watchName];
    var existingItemIndex = cart.findIndex(item => item.name === watchName);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name: watchName, price: watch.price, quantity: 1 });
    }
    total += watch.price;
    updateCartDisplay();
    renderCartItems();
    showNotification(watchName + " added to cart! 🛒");
}

function removeFromCart(event, index) {
    if (event) event.stopPropagation();
    
    if (index < 0 || index >= cart.length) return;
    
    var item = cart[index];
    if (!item) return;
    
    total -= item.price;
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    
    updateCartDisplay();
    renderCartItems();
    
    var modalList = document.getElementById("cart-items-list-modal");
    if (modalList) {
        renderModalCartItems(); 
    }
    
    showNotification("Item updated in cart");
}

function renderCartItems() {
    var list = document.getElementById("cart-items-list");
    var totalDisplay = document.getElementById("cart-total-price");
    if (!list) return; 
    if (cart.length === 0) {
        list.innerHTML = "<p style='color: #888; padding: 20px; text-align: center; font-style: italic;'>Your cart is empty.</p>";
    } else {
        var cartHTML = "";
        for (var i = 0; i < cart.length; i++) {
            var qtyText = cart[i].quantity > 1 ? " <span style='color: #4CAF50; font-weight: bold;'>(x" + cart[i].quantity + ")</span>" : "";
            var itemTotal = (cart[i].price * cart[i].quantity).toFixed(2);
            cartHTML += '<div class="cart-item-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #eee;">';
            cartHTML += '<span class="item-name">' + cart[i].name + qtyText + '</span>';
            cartHTML += '<div>';
            cartHTML += '<span style="font-weight: bold; margin-right: 15px; color: var(--indigo-dark);">₱' + itemTotal + '</span>';
            cartHTML += '<button onclick="removeFromCart(event, ' + i + ')" style="color: #ff4757; background: none; border: none; cursor: pointer; font-weight: bold; font-size: 16px;">X</button>';
            cartHTML += '</div></div>';
        }
        list.innerHTML = cartHTML;
    }
    if (totalDisplay) totalDisplay.innerText = total.toFixed(2);
}
function updateCartDisplay() {
    var count = 0;
    for (var i = 0; i < cart.length; i++) count += cart[i].quantity;
    var cartCountBadge = document.getElementById("cart-count");
    if (cartCountBadge) cartCountBadge.innerText = count;
}
function toggleCartDropdown() {
    var dropdown = document.getElementById("cart-dropdown");
    if (dropdown) {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }
}
function openCart() { 
    var modal = document.getElementById("cart-modal");
    if (modal) modal.style.display = "block"; 
}
function closeCart() { 
    var modal = document.getElementById("cart-modal");
    if (modal) modal.style.display = "none"; 
}

function openDetails(name) {
    var data = watchData[name];
    var container = document.getElementById("details-content");
    var stockColor = (data.stock <= 5) ? "red" : "green"; 
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
function closeDetails() { 
    document.getElementById("details-modal").style.display = "none"; 
}

function showNotification(msg) {
    var toast = document.getElementById("toast-notification");
    if (!toast) return;
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
        var targetClick = "filterCategory('" + category + "')";
        if (buttons[j].getAttribute('onclick') === targetClick) {
            buttons[j].classList.add('active');
        }
    }
}

setInterval(function() {
    if (document.getElementById('shop-page').style.display !== 'none') {
        var container = document.querySelector(".slides-container") || document.getElementById("slides");
        if (!container) return; 
        currentSlide = (currentSlide + 1) % 2; 
        container.style.transform = "translateX(-" + (currentSlide * 50) + "%)";
    }
}, 4000);

window.onclick = function(event) {
    var cartModal = document.getElementById("cart-modal");
    var detailsModal = document.getElementById("details-modal");
    if (event.target == cartModal) cartModal.style.display = "none";
    if (event.target == detailsModal) detailsModal.style.display = "none";
    
    var cartDropdown = document.getElementById("cart-dropdown");
    var userDropdown = document.getElementById("user-dropdown");
    var clickedCart = event.target.closest('[onclick="toggleCartDropdown()"]') || event.target.closest('#cart-dropdown');
    var clickedUser = event.target.closest('#user-display') || event.target.closest('#user-dropdown');

    if (!clickedCart && cartDropdown) cartDropdown.style.display = "none";
    if (!clickedUser && userDropdown) userDropdown.style.display = "none";
};

function searchWatches() {
    var input = document.getElementById('search-input');
    if (!input) return;
    var query = input.value.toLowerCase();
    var cards = document.querySelectorAll('.watch-card');
    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}