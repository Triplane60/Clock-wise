// ==================== CONSTANTS ====================
const SHIPPING_FEE = 150; // Flat shipping fee in PHP

// ==================== WATCH DATA ====================
var watchData = {
    "Submariner 41": {
        desc: "The ultimate archetype of the modern diver's watch. Forged in exceptionally durable Oystersteel, it seamlessly transitions from ocean exploration to the boardroom..",
        specs: "Brand: Rolex",
        price: 950000.00,
        stock: 10,
        images: ["men-images/sub1.png", "men-images/sub2.png", "men-images/sub3.png"]
    },
    "Cosmograph Daytona Congo": {
        desc: "A motorsport legend built for unparalleled precision. This highly sought-after chronograph features a high-contrast dial and a tachymetric scale for tracking ultimate speeds.",
        specs: "Brand: Rolex",
        price: 1850000.00,
        stock: 10,
        images: ["men-images/cos1.png", "men-images/cos2.png", "men-images/cos3.png"]
    },
    "GMT-Master II Two Tone Everose Rootbeer": {
        desc: "A sophisticated travel companion wrapped in warm Everose gold and Oystersteel. The bi-color Cerachrom bezel allows frequent flyers to track multiple time zones with timeless elegance.",
        specs: "Brand: Rolex",
        price: 1250000.00,
        stock: 10,
        images: ["men-images/gmt1.png", "men-images/gmt2.png", "men-images/gmt3.png"]
    },
    "Explorer II 42 Polar": {
        desc: "Designed to push the boundaries of human endurance in extreme environments. The highly legible white dial and prominent orange 24-hour hand ensure clarity in the darkest conditions.",
        specs: "Brand: Rolex",
        price: 680000.00,
        stock: 10,
        images: ["men-images/exp1.png", "men-images/exp2.png", "men-images/exp3.png"]
    },
    "Submariner Date 41 Two Tone Yellow Gold Bluesy": {
        desc: "A captivating blend of deep marine blue and brilliant 18ct yellow gold. This striking two-tone variation brings an undeniable aura of luxury to the iconic diver profile.",
        specs: "Brand: Rolex",
        price: 1150000.00,
        stock: 10,
        images: ["men-images/mar1.png", "men-images/mar2.png", "men-images/mar3.png"]
    },
    "MRG-B5000": {
        desc: "The absolute pinnacle of G-Shock engineering and craftsmanship. Hand-assembled on Casio's elite \"Premium Production Line\" in Japan, this full-titanium masterpiece features flawless Sallaz polishing.",
        specs: "Brand: G-Shock",
        price: 220000.00,
        stock: 10,
        images: ["men-images/mrg1.png", "men-images/mrg2.png", "men-images/mrg3.png"]
    },
    "MTG-B3000": {
        desc: "A sleek marvel of structural innovation. Its ultra-slim dual-core guard structure combines the warmth of resin with the sharp, faceted brilliance of polished metal.",
        specs: "Brand: G-Shock",
        price: 65000.00,
        stock: 10,
        images: ["men-images/mtg1.png", "men-images/mtg2.png", "men-images/mtg3.png"]
    },
    "GMW-B5000": {
        desc: "The legendary 1983 origin story, reborn in full stainless steel. It pairs the classic digital square aesthetic with modern Bluetooth connectivity and Tough Solar power.",
        specs: "Brand: G-Shock",
        price: 35000.00,
        stock: 10,
        images: ["men-images/gmw1.png", "men-images/gmw2.png", "men-images/gmw3.png"]
    },
    "GM-B2100": {
        desc: "This octagonal design became a global phenomenon for its slim, wearable profile. The full-metal version is water-resistant to 200m and virtually indestructible.",
        specs: "Brand: G-Shock",
        price: 35000.00,
        stock: 10,
        images: ["men-images/gm1.png", "men-images/gm2.png", "men-images/gm3.png"]
    },
    "GWG-B1000": {
        desc: "An unstoppable force built to conquer the harshest terrain on Earth. Engineered with mud-resist construction, sapphire crystal, and forged carbon for extreme tactical durability.",
        specs: "Brand: G-Shock",
        price: 50000.00,
        stock: 10,
        images: ["men-images/gwg1.png", "men-images/gwg2.png", "men-images/gwg3.png"]
    },
    "Navitimer B01 Chronograph 46": {
        desc: "The definitive watch for aviation professionals. Its commanding 46mm presence showcases the legendary circular slide rule, powered by the masterful Breitling Manufacture Caliber 01.",
        specs: "Brand: Breitling",
        price: 520000.00,
        stock: 10,
        images: ["men-images/nav.png", "men-images/nav1.png", "men-images/nav2.png"]
    },
    "Superocean Heritage B31 Automatic 44": {
        desc: "A stunning tribute to Breitling's 1950s diving legacy. The combination of a high-tech ceramic bezel and a mesh-style bracelet offers the perfect blend of vintage charm and modern performance.",
        specs: "Brand: Breitling",
        price: 310000.00,
        stock: 10,
        images: ["men-images/sup.png", "men-images/sup1.png", "men-images/sup2.png"]
    },
    "Chronomat B01 42":{
        desc: "Breitling’s all-purpose sports watch in its most luxurious form. Featuring the signature \"Rouleaux\" bracelet, this piece makes a bold, unapologetic statement in solid gold.",
        specs: "Brand: Breitling",
        price: 485000.00,
        stock: 10,
        images: ["men-images/chr.png", "men-images/chr1.png", "men-images/chr2.png"]
    },
    "Super Avenger B01 Chronograph 46":{
        desc: "Built for those who demand maximum presence and extreme robustness. Shock-resistant and highly legible, it is the ultimate tool for demanding aerial and terrestrial missions.",
        specs: "Brand: Breitling",
        price: 340000.00,
        stock: 10,
        images: ["men-images/ave.png", "men-images/ave1.png", "men-images/ave2.png"]
    },
    "Professional Endurance Pro 44":{
        desc: "The ultimate luxury sports watch designed for rigorous physical activity. Its ultra-lightweight Breitlight case is 3.3 times lighter than titanium, offering peak comfort and vibrant style.",
        specs: "Brand: Breitling",
        price: 185000.00,
        stock: 10,
        images: ["men-images/end.png", "men-images/end1.png", "men-images/end2.png"]
    },
    "Lady Datejust 28 Two Tone Everose Aubergine Dial With Diamonds":{
        desc: "A breathtaking blend of Oystersteel and Everose gold. The rich aubergine dial, accented with brilliant-cut diamonds, offers unmatched evening elegance.",
        specs: "Brand: Rolex",
        price: 1350000.00,
        stock: 10,
        images: ["women-images/lad1.png", "women-images/lad2.png", "women-images/lad3.png"]
    },
    "Datejust 31 Mother Of Pearl Dial With Diamonds":{
        desc: "Nature's beauty captured on your wrist. The iridescent mother-of-pearl dial ensures no two watches are exactly alike, elevated by stunning diamond hour markers.",
        specs: "Brand: Rolex",
        price: 1150000.00,
        stock: 10,
        images: ["women-images/dat1.png", "women-images/dat2.png", "women-images/dat3.png"]
    },
    "Oyster Perpetual 36 Candy Pink Dial":{
        desc: "A vibrant pop of color backed by legendary Rolex reliability. The candy pink dial brings a playful yet highly exclusive energy to a timeless silhouette.",
        specs: "Brand: Rolex",
        price: 950000.00,
        stock: 10,
        images: ["women-images/oys1.png", "women-images/oys2.png", "women-images/oys3.png"]
    },
    "Datejust 36 Wimbledon":{
        desc: "A nod to prestigious tennis heritage. Featuring the iconic slate dial with forest green Roman numerals, this piece perfectly bridges the gap between sporty and sophisticated.",
        specs: "Brand: Rolex",
        price: 820000.00,
        stock: 10,
        images: ["women-images/daj1.png", "women-images/daj2.png", "women-images/daj3.png"]
    },
    "Air-King 40":{
        desc: "Originally designed for aviation pioneers, now a modern icon. Its bold 40mm case and striking green accents make a confident, powerful statement on any wrist.",
        specs: "Brand: Rolex",
        price: 650000.00,
        stock: 10,
        images: ["women-images/air1.png", "women-images/air2.png", "women-images/air3.png"]
    },
    "Navitimer 32":{
        desc: "The legendary pilot's watch, elegantly resized for the feminine wrist. It trades the complex slide rule for a clean, radiant dial that brings aviation heritage to everyday luxury.",
        specs: "Brand: Breitling",
        price: 250000.00,
        stock: 10,
        images: ["women-images/nav.png", "women-images/nav1.png", "women-images/nav2.png"]
    },
    "Chronomat Automatic 36 South Sea":{
        desc: "A tropical escape in horological form. Adorned with a dazzling gem-set bezel and vivid dial, it brings a vibrant, exotic flair to the classic Chronomat.",
        specs: "Brand: Breitling",
        price: 480000.00,
        stock: 10,
        images: ["women-images/chr.png", "women-images/chr1.png", "women-images/chr2.png"]
    },
    "Superocean Automatic 36":{
        desc: "High-performance underwater capability meets coastal chic. Its bright, legible dial and durable build make it the ultimate companion for the active, modern woman.",
        specs: "Brand: Breitling",
        price: 280000.00,
        stock: 10,
        images: ["women-images/sup.png", "women-images/sup1.png", "women-images/sup2.png"]
    },
    "Lady Premier 32":{
        desc: "Refined, dressy, and unmistakably elegant. This piece combines vintage-inspired charm with a slim, graceful profile that slips perfectly under any tailored cuff.",
        specs: "Brand: Breitling",
        price: 260000.00,
        stock: 10,
        images: ["women-images/lap.png", "women-images/lap1.png", "women-images/lap2.png"]
    },
    "Professional Endurance Pro 38":{
        desc: "he ultimate luxury athleisure watch. Crafted from ultra-lightweight proprietary materials, it delivers vibrant style and rugged durability for high-intensity lifestyles.",
        specs: "Brand: Breitling",
        price: 185000.00,
        stock: 10,
        images: ["women-images/end.png", "women-images/end1.png", "women-images/end2.png"]
    },
    "Ingenieur Automatic 35":{
        desc: "A masterclass in integrated bracelet design. This timepiece offers a highly architectural, anti-magnetic build that feels both industrial and incredibly chic.",
        specs: "Brand: IWC Schaffhausen",
        price: 350000.00,
        stock: 10,
        images: ["women-images/ing.png", "women-images/ing2.png", "women-images/ing1.png"]
    },
    "Portofino Automatic 34":{
        desc: "The pure essence of Mediterranean luxury. Its uncluttered, minimalist dial and perfectly round case offer a timeless, understated grace that never goes out of style.",
        specs: "Brand: IWC Schaffhausen",
        price: 320000.00,
        stock: 10,
        images: ["women-images/por.png", "women-images/por1.png", "women-images/por2.png"]
    },
    "Portofino Automatic Moon Phase 37":{
        desc: "A poetic complication for the romantic soul. The meticulously crafted moon phase display sits beautifully atop a pristine dial, offering starry elegance.",
        specs: "Brand: IWC Schaffhausen",
        price: 490000.00,
        stock: 10,
        images: ["women-images/pot.png", "women-images/pot2.png", "women-images/pot1.png"]
    },
    "Portofino Perpetual Calendar":{
        desc: "A true mechanical masterpiece. This highly complex movement automatically tracks the date, month, and leap years without needing adjustment, wrapped in a sleek Portofino case.",
        specs: "Brand: IWC Schaffhausen",
        price: 1250000.00,
        stock: 10,
        images: ["women-images/prt.png", "women-images/prt1.png", "women-images/prt2.png"]
    },
    "Portofino Automatic Day & Night 34":{
        desc: "Track the passing of time with celestial beauty. A delicate sun and moon disc slowly rotates on the dial, perfectly capturing the magic of day and night.",
        specs: "Brand: IWC Schaffhausen",
        price: 410000.00,
        stock: 10,
        images: ["women-images/pro.png", "women-images/pro1.png", "women-images/pro2.png"]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
    "":{
        desc: "",
        specs: "Brand: ",
        price: .00,
        stock: 10,
        images: [""]
    },
};

// ==================== GLOBAL VARIABLES ====================
var currentSlide = 0;
var isLoggedIn = false;
var isRegisterMode = false;
var userToReset = "";
var currentDetailsImages = [];
var currentSlideIndex = 0;
var cart = [];
var total = 0;
var currentCategory = 'all';

// ==================== PAGE NAVIGATION ====================
function showHome() {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('shop-page').style.display = 'none';
    document.getElementById('checkout-page').style.display = 'none';
    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'none';

    var cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) cartWrapper.style.display = 'inline-block';

    document.body.classList.add('static-header');
    document.body.classList.remove('on-cart-page', 'shop-active');

    history.pushState({ page: 'home' }, null, '#home');
}

function showShop() {
    if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
    if (document.getElementById('about-page')) document.getElementById('about-page').style.display = 'none';
    if (document.getElementById('contact-page')) document.getElementById('contact-page').style.display = 'none';
    if (document.getElementById('checkout-page')) document.getElementById('checkout-page').style.display = 'none';
    
    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'none';

    document.getElementById('shop-page').style.display = 'block';

    var cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) cartWrapper.style.display = 'inline-block';

    document.body.classList.remove('static-header');
    document.body.classList.remove('on-cart-page');
    document.body.classList.add('shop-active'); 

    document.querySelector('.category-bar').style.display = 'flex';
    document.querySelector('.hero-banner').style.display = 'block';
    document.querySelector('.content-area').style.display = 'block';

    history.pushState({ page: 'shop' }, null, '#shop');

    if (typeof filterCategory === 'function') filterCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showShopWithCategory(category) {
    showShop();
    setTimeout(function() {
        filterCategory(category);
    }, 50);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCartPage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('shop-page').style.display = 'block'; 
    document.getElementById('checkout-page').style.display = 'none';

    document.querySelector('.category-bar').style.display = 'none';
    document.querySelector('.hero-banner').style.display = 'none';
    document.querySelector('.content-area').style.display = 'none';

    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'block';

    var cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) cartWrapper.style.display = 'none';

    document.body.classList.add('static-header');
    document.body.classList.add('on-cart-page');

    history.pushState({ page: 'cart' }, null, '#cart');

    if (typeof renderFullCartPage === 'function') renderFullCartPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== AUTHENTICATION ====================
console.log("Script loaded");

window.onload = function() {
    history.replaceState({ page: 'home' }, null, window.location.href);

    var activeUser = localStorage.getItem("currentUser");
    if (activeUser) {
        isLoggedIn = true;
        var userDisplay = document.getElementById("user-display");
        if (userDisplay) userDisplay.innerText = "👤 " + activeUser;
    } else {
        isLoggedIn = false;
    }

    showHome();
};

function openLoginModal() {
    document.getElementById("login-modal").style.display = "block";
}

function closeLogin() {
    var modal = document.getElementById("login-modal");
    if (modal) modal.style.display = "none";

    document.getElementById("auth-username").value = "";
    document.getElementById("auth-password").value = "";

    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
    document.getElementById("reg-confirm-password").value = "";

    document.getElementById("auth-password").type = "password";
    document.getElementById("reg-password").type = "password";
    document.getElementById("reg-confirm-password").type = "password";

    document.getElementById("login-form-content").style.display = "block";
    document.getElementById("register-form-content").style.display = "none";
    document.getElementById("login-title").innerText = "Welcome Back";
    document.getElementById("login-subtitle").innerText = "Please login to start shopping";
}

function toggleAuth() {
    try {
        var loginForm = document.getElementById("login-form-content");
        var registerForm = document.getElementById("register-form-content");
        var title = document.getElementById("login-title");
        var subtitle = document.getElementById("login-subtitle");

        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            title.innerText = "WELCOME BACK";
            subtitle.innerText = "Please login to start shopping";
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            title.innerText = "CREATE ACCOUNT";
            subtitle.innerText = "Join us to explore premium timepieces";
        }

        var modalBox = document.querySelector("#login-modal .modal-content");
        
        if (modalBox) {
            modalBox.style.animation = "none"; 
            void modalBox.offsetHeight;        
            
            modalBox.style.setProperty("animation", "fadeIn 0.6s ease-out");
        }

    } catch (e) {
        console.log("Animation Trigger Error:", e);
    }
}

function handleRegister(event) {
    event.preventDefault();

    var username = document.getElementById("reg-username").value.trim();
    var password = document.getElementById("reg-password").value;
    var confirm = document.getElementById("reg-confirm-password").value;

    if (username === "") {
        showNotification("Please enter a username! 👤");
        return;
    }

    if (password.length < 8 || !/[a-zA-Z]/.test(password)) {
        showNotification("Password must be at least 8 characters and contain a letter! 🛑");
        return;
    }
    if (password !== confirm) {
        showNotification("Passwords do not match! ❌");
        return;
    }

    if (localStorage.getItem("user_" + username)) {
        showNotification("Username already exists! Choose another. ❌");
        return;
    }

    localStorage.setItem("user_" + username, password);

    isLoggedIn = true;
    localStorage.setItem("currentUser", username);

    var userDisplay = document.getElementById("user-display");
    if (userDisplay) userDisplay.innerText = "👤 " + username;

    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
    document.getElementById("reg-confirm-password").value = "";

    closeLogin();

    showNotification("Account created! Welcome, " + username + "! 🎉");
}

function handleAuth(event) {
    if (event) event.preventDefault();

    var user = document.getElementById("auth-username").value;
    var pass = document.getElementById("auth-password").value;

    if (user === "" || pass === "") {
        showNotification("Please enter both username and password! 🛑");
        return;
    }

    var savedPass = localStorage.getItem("user_" + user);

    if (savedPass && savedPass === pass) {
        isLoggedIn = true;
        localStorage.setItem("currentUser", user);

        var userDisplay = document.getElementById("user-display");
        if (userDisplay) userDisplay.innerText = "👤 " + user;

        document.getElementById("auth-username").value = "";
        document.getElementById("auth-password").value = "";
        document.getElementById("auth-password").type = "password";

        closeLogin();
        renderCartItems();      
        updateCartDisplay();
        showShop();    
        showNotification("Welcome back, " + user + "! ✨");
    } else {
        showNotification("Invalid username or password! ❌");
    }
}

function handleForgotPassword() {
    document.getElementById("reset-username").value = "";
    document.getElementById("reset-new-password").value = "";
    document.getElementById("reset-confirm-password").value = "";

    closeLogin(); 
    document.getElementById("reset-modal").style.display = "block";
}

function saveNewPassword() {
    var username = document.getElementById("reset-username").value.trim();
    var newPassword = document.getElementById("reset-new-password").value;
    var confirmPassword = document.getElementById("reset-confirm-password").value;

    if (username === "") {
        showNotification("Please enter a username! 👤");
        return;
    }

    var savedPass = localStorage.getItem("user_" + username);
    if (!savedPass) {
        showNotification("Account not found! Please check the username. ❌");
        return;
    }

    if (newPassword.length < 8 || newPassword.length > 10) {
        showNotification("Password must be between 8 and 10 characters! 🛑");
        return;
    }

    if (newPassword !== confirmPassword) {
        showNotification("Passwords do not match! ❌");
        return;
    }

    localStorage.setItem("user_" + username, newPassword);

    closeResetModal();
    showNotification("Password updated! Please log in. 🔓");
    openLoginModal();
}

function backToLoginFromReset() {
    closeResetModal(); 
    openLoginModal();  
}

function closeResetModal() {
    document.getElementById("reset-username").value = "";
    document.getElementById("reset-new-password").value = "";
    document.getElementById("reset-confirm-password").value = "";
    document.getElementById("reset-modal").style.display = "none";
}

function handleUserClick(event) {
    if (event) event.stopPropagation();

    if (!isLoggedIn) {
        if (typeof openLoginModal === 'function') {
            openLoginModal(); 
        } else {
            console.log("Trying to open login modal...");
        }
        return; 
    }

    var dropdown = document.getElementById('user-dropdown');
    if (!dropdown) return;

    if (dropdown.style.display === 'block') {
        closeProfileDropdown(); 
    } else {
        dropdown.classList.remove('fade-out-active');
        dropdown.style.display = 'block'; 
    }
}

function closeProfileDropdown() {
    var dropdown = document.getElementById('user-dropdown');
    
    if (dropdown && dropdown.style.display === 'block') {
        dropdown.classList.add('fade-out-active');

        setTimeout(function() {
            dropdown.style.display = 'none';
            dropdown.classList.remove('fade-out-active'); 
        }, 300);
    }
}

window.addEventListener('click', function(event) {
    var dropdown = document.getElementById('user-dropdown');
    var userDisplay = document.getElementById('user-display');

    if (dropdown && dropdown.style.display === 'block') {
        if (!dropdown.contains(event.target) && !userDisplay.contains(event.target)) {
            closeProfileDropdown(); 
        }
    }
});

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

    showNotification("Logged out successfully! 👋");

    cart = [];
    renderCartItems();      
    updateCartDisplay();    

    showHome();
}

// ==================== PASSWORD TOGGLE ====================
var eyeOpenSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
var eyeClosedSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';

function togglePasswordVisibility(inputId, iconElement) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconElement.innerHTML = eyeOpenSVG;
    } else {
        passwordInput.type = "password";
        iconElement.innerHTML = eyeClosedSVG;
    }
}

// ==================== CART FUNCTIONS ====================
function addToCart(watchName) {
    if (!isLoggedIn) {
        showNotification("Please login first to add items to your cart! 🔐");
        openLoginModal();
        return;
    }

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
    renderFullCartPage();

    var modalList = document.getElementById("cart-items-list-modal");
    if (modalList) {
        renderModalCartItems();
    }

    showNotification("Item updated in cart");
}

function renderCartItems() {
    var list = document.getElementById("cart-items-list");
    var totalDisplay = document.getElementById("cart-total-price");
    var checkoutBtn = document.getElementById('cart-checkout-btn');

    if (!list) return;

    var cartHeader = list.previousElementSibling;
    if (cartHeader && cartHeader.tagName === 'H3') {
        cartHeader.style.cssText = "font-family: serif; color: #2e004f; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; padding-bottom: 10px; border-bottom: 1px solid #eee; margin-bottom: 10px; font-weight: 400;";
}
    let pesoFormat = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    if (!isLoggedIn) {
        list.innerHTML = `
            <div style="padding: 30px 15px; text-align: center; animation: fadeIn 0.5s ease-out;">
                <p style="color: #888; margin-bottom: 15px; font-size: 0.85rem; letter-spacing: 0.5px;">Please log in to view your cart.</p>
                <button onclick="openLoginModal()" style="background: #4B0082; color: white; border: none; padding: 12px; width: 100%; border-radius: 4px; font-weight: bold; cursor: pointer; letter-spacing: 1.5px; text-transform: uppercase; font-size: 0.75rem;">
                    Login to Account
                </button>
            </div>
        `;
        if (checkoutBtn) checkoutBtn.style.display = "none";
        if (totalDisplay) totalDisplay.innerText = pesoFormat.format(0);
        return;
    }

    if (cart.length === 0) {
        list.innerHTML = `
            <div style="padding: 40px 15px; text-align: center; animation: fadeIn 0.5s ease-out;">
                <p style="color: #aaa; font-size: 0.85rem; font-style: italic; letter-spacing: 0.5px;">Your cart is currently empty.</p>
            </div>
        `;
        if (checkoutBtn) checkoutBtn.style.display = "none";
        if (totalDisplay) totalDisplay.innerText = pesoFormat.format(0);
        return;
    }

    if (checkoutBtn) checkoutBtn.style.display = "block";

    var cartHTML = "";
    for (var i = 0; i < cart.length; i++) {
        var watch = watchData[cart[i].name];
        var imgSrc = watch ? watch.images[0] : "images/placeholder.jpg";
        var qtyText = cart[i].quantity > 1 ? " <span style='color: #4CAF50; font-weight: bold;'>(x" + cart[i].quantity + ")</span>" : "";
        var itemTotal = cart[i].price * cart[i].quantity;

        cartHTML += "<div class='cart-item-row' style='display: flex; align-items: center; gap: 10px; padding: 12px 0; border-bottom: 1px solid #eee'>";
        cartHTML += "<img src='" + imgSrc + "' style='width: 40px; height: 40px; object-fit: contain; border-radius: 4px; background: white;'>";
        cartHTML += "<div style='flex-grow: 1; line-height: 1.2;'>";
        cartHTML += "<span class='item-name' style='font-size: 0.85rem; font-weight: bold; color: #2e004f; display: block;'>" + cart[i].name + qtyText + "</span>";
        cartHTML += "</div>";
        cartHTML += "<div style='display: flex; align-items: center; gap: 10px;'>";
        cartHTML += "<span style='font-weight: bold; font-size: 0.9rem; color: #2e004f;'>" + pesoFormat.format(itemTotal) + "</span>";
        cartHTML += "</div></div>";
    }
    list.innerHTML = cartHTML;

    if (totalDisplay) {
        totalDisplay.innerText = pesoFormat.format(total);
    }
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

// ==================== DETAILS MODAL ====================
function openDetails(name) {
    var data = watchData[name];
    if (!data) {
        alert("No data found for: " + name);
        return;
    }

    var images = data.images || [];
    while (images.length < 3) {
        images.push("images/placeholder.jpg");
    }
    images = images.slice(0, 3);
    currentDetailsImages = images;
    currentSlideIndex = 0;

    var modalContent = document.querySelector("#details-modal .modal-content");
    if (!modalContent) {
        alert("Modal content not found!");
        return;
    }

    var brand = "";
    var otherSpecs = [];
    if (data.specs) {
        var specsArray = data.specs.split('|');
        for (var s = 0; s < specsArray.length; s++) {
            var spec = specsArray[s].trim();
            if (spec !== "") {
                if (brand === "") {
                    brand = spec;
                } else {
                    otherSpecs.push(spec);
                }
            }
        }
    }

    var html = '<span class="close-btn" onclick="closeDetails()">&times;</span>';
    html += '<div class="modal-split-container">';

    html += '<div class="modal-image-panel">';
    html += '<div class="slideshow-container" style="position: relative;">';
    html += '<div class="slides" id="details-slides">';
    for (var i = 0; i < images.length; i++) {
        html += '<img src="' + images[i] + '" alt="' + name + '" style="display:' + (i === 0 ? 'block' : 'none') + '; width:100%; border-radius:8px;">';
    }
    html += '</div>';
    html += '<button class="slide-prev" onclick="changeSlide(-1)">❮</button>';
    html += '<button class="slide-next" onclick="changeSlide(1)">❯</button>';
    html += '</div>';

    html += '<div class="slide-dots" id="slide-dots" style="text-align:center; margin-top:10px;">';
    for (var j = 0; j < images.length; j++) {
        html += '<span class="dot" onclick="goToSlide(' + j + ')" style="display:inline-block; width:12px; height:12px; margin:0 5px; background-color:' + (j === 0 ? '#7e57c2' : '#bbb') + '; border-radius:50%; cursor:pointer;"></span>';
    }
    html += '</div>';
    html += '</div>';

    html += '<div class="modal-text-panel">';
    html += '<h2 class="watch-name" style="font-weight: 800; font-size: 1.6rem; color: #2e004f; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">' + name + '</h2>';

    if (brand) {
        html += '<p class="brand-line" style="font-weight: 790; font-size: 1.0rem; color: #2e004f; text-transform: uppercase; letter-spacing: 1.5px; font-style: normal !important; margin-bottom: 15px;">' + brand + '</p>';
    }

    html += '<p class="watch-description">' + data.desc + '</p>';

    if (otherSpecs.length > 0) {
        html += '<ul class="specs-list">';
        for (var k = 0; k < otherSpecs.length; k++) {
            html += '<li>' + otherSpecs[k] + '</li>';
        }
        html += '</ul>';
    }

    var stockColor = data.stock < 5 ? "#ff4757" : "#2ed573";
    html += '<p class="stock" style="color:' + stockColor + '; font-weight:bold;">In Stock: ' + data.stock + '</p>';

    var formattedPrice = data.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    html += '<p class="price" style="font-size:1.5rem; font-weight:bold; color:#2e004f;">₱' + formattedPrice + '</p>';

    html += '<button class="add-btn" onclick="addToCart(\'' + name + '\')">Add to Cart</button>';

    html += '</div>';
    html += '</div>';

    modalContent.innerHTML = html;
    var detailsModal = document.getElementById("details-modal");
    detailsModal.style.display = "block";

    modalContent.classList.remove("modal-fade-in");
    
    void modalContent.offsetWidth; 
    
    modalContent.classList.add("modal-fade-in");
}

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}

function changeSlide(direction) {
    var slides = document.querySelectorAll('#details-slides img');
    var dots = document.querySelectorAll('#slide-dots .dot');
    if (slides.length === 0) return;

    slides[currentSlideIndex].style.display = 'none';
    if (dots.length) dots[currentSlideIndex].style.backgroundColor = '#bbb';

    currentSlideIndex += direction;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

    slides[currentSlideIndex].style.display = 'block';
    if (dots.length) dots[currentSlideIndex].style.backgroundColor = '#7e57c2';
}

function goToSlide(index) {
    var slides = document.querySelectorAll('#details-slides img');
    var dots = document.querySelectorAll('#slide-dots .dot');
    if (slides.length === 0 || index < 0 || index >= slides.length) return;

    slides[currentSlideIndex].style.display = 'none';
    if (dots.length) dots[currentSlideIndex].style.backgroundColor = '#bbb';

    currentSlideIndex = index;

    slides[currentSlideIndex].style.display = 'block';
    if (dots.length) dots[currentSlideIndex].style.backgroundColor = '#7e57c2';
}

// ==================== NOTIFICATION ====================
function showNotification(message) {
    var container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.style.cssText = "position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; gap: 10px; z-index: 99999; pointer-events: none; align-items: center;";
        document.body.appendChild(container);
    }

    var toast = document.createElement("div");
    toast.style.cssText = "background-color: #7e57c2; color: white; padding: 12px 25px; border-radius: 50px; font-weight: bold; box-shadow: 0 10px 30px rgba(0,0,0,0.3); opacity: 0; transform: translateY(20px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-align: center;";
    toast.innerText = message;

    container.appendChild(toast);

    setTimeout(function() {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 10);

    setTimeout(function() {
        toast.style.opacity = "0"; 
        toast.style.transform = "translateY(-20px)"; 
        
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400); 
    }, 3000);
}

// ==================== FILTER & SEARCH ====================
function filterCategory(category) {
    currentCategory = category;

    var buttons = document.querySelectorAll('.nav-item');
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
        var targetClick = "filterCategory('" + category + "')";
        if (buttons[j].getAttribute('onclick') === targetClick) {
            buttons[j].classList.add('active');
        }
    }
    searchWatches();
}

function searchWatches() {
    const searchBox = document.getElementById('search-input');
    const query = searchBox.value.toLowerCase();
    const watches = document.querySelectorAll('.watch-card'); 

    watches.forEach(function(watch) {
        const watchText = watch.innerText.toLowerCase();
        
        const matchesText = watchText.includes(query);
        
        const matchesCategory = currentCategory === 'all' || watch.classList.contains(currentCategory);

        if (matchesText && matchesCategory) {
            watch.style.display = 'flex'; 
        } else {
            watch.style.display = 'none';
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== AUTO SLIDESHOW (SHOP BANNER) ====================
setInterval(function() {
    if (document.getElementById('shop-page').style.display !== 'none') {
        var container = document.querySelector(".slides-container") || document.getElementById("slides");
        if (!container) return;
        currentSlide = (currentSlide + 1) % 2;
        container.style.transform = "translateX(-" + (currentSlide * 50) + "%)";
    }
}, 4000);

// ==================== CLICK OUTSIDE MODAL ====================
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
};

// ==================== HASH CHANGE ====================
window.addEventListener('hashchange', function(event) {
    if (window.location.hash === '#shop') {
        showShop();
    } else if (window.location.hash === '#cart') {
        showCartPage();
    } else {
        showHome();
    }
});

// ==================== INFINITE CAROUSEL (HOME) ====================
function startInfiniteLoop() {
    const track = document.getElementById('pill-track');
    if (!track || track.children.length === 0) return;

    setInterval(() => {
        const firstPill = track.firstElementChild;
        const pillWidth = firstPill.offsetWidth;
        const gap = 30;
        const jumpDistance = pillWidth + gap;

        track.style.transition = 'transform 0.8s ease-in-out';
        track.style.transform = `translateX(-${jumpDistance}px)`;

        setTimeout(() => {
            track.style.transition = 'none';
            track.appendChild(track.firstElementChild);
            track.style.transform = 'translateX(0px)';
        }, 800);

    }, 3500);
}

window.addEventListener('DOMContentLoaded', startInfiniteLoop);

// ==================== GO TO PRODUCT (FROM HOME) ====================
function goToProduct(productName) {
    showShop();
    setTimeout(() => {
        if (typeof openDetails === 'function') {
            openDetails(productName);
        } else {
            console.log("Product details function not found!");
        }
    }, 100);
}

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        if (typeof closeLogin === "function") closeLogin();
        if (typeof closeForgotPasswordModal === "function") closeForgotPasswordModal();

        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            modal.style.display = "none";
        });
    }

    if (event.key === "Enter") {
        var focused = document.activeElement.id;

        if (focused === "auth-username" || focused === "auth-password") {
            handleAuth(event);
        } else if (focused === "reg-username" || focused === "reg-password" || focused === "reg-confirm-password") {
            if (typeof handleRegister === "function") handleRegister(event);
        } else if (focused === "new-reset-password" || focused === "confirm-reset-password") {
            if (typeof executePasswordReset === "function") executePasswordReset();
        }
    }
});

// ==================== CART PAGE FUNCTIONS ====================
function renderFullCartPage() {
    var container = document.getElementById("full-cart-items-container");
    var summarySection = document.getElementById("cart-summary-section");
    var headerActions = document.getElementById("cart-header-actions");

    if (!container) return;

    let pesoFormat = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 });

    if (!isLoggedIn) {
        if (summarySection) summarySection.style.setProperty("display", "none", "important");
        if (headerActions) headerActions.style.setProperty("display", "none", "important");

        container.style.background = "transparent";
        container.style.boxShadow = "none";
        container.style.border = "none";

        container.innerHTML = `
            <div style="text-align: center; padding: 80px 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; animation: fadeIn 0.8s ease-out;">
                
                <div style="margin-bottom: 10px; opacity: 0.8;">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4B0082" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </div>

                <div style="margin-bottom: 15px;">
                    <h2 style="font-family: serif; color: #2e004f; font-size: 1.8rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; margin: 0;">Your Bag is Empty</h2>
                    <p style="color: #888; font-size: 0.9rem; margin-top: 10px; letter-spacing: 0.5px;">Log in to access your saved timepieces.</p>
                </div>
                
                <button onclick="openLoginModal()" style="background: #4B0082; color: white; border: none; padding: 14px 0; width: 280px; cursor: pointer; font-size: 0.9rem; border-radius: 4px; font-weight: 600; transition: 0.3s; letter-spacing: 1.5px; text-transform: uppercase;">
                    Sign in / Sign up
                </button>

                <button onclick="showShop()" style="background: white; color: #4B0082; border: 1.5px solid #4B0082; padding: 12px 0; width: 280px; cursor: pointer; font-size: 0.9rem; border-radius: 4px; font-weight: 600; transition: 0.3s; letter-spacing: 1.5px; text-transform: uppercase;">
                    Go Shopping
                </button>

            </div>
        `;
        return;
    }

    if (cart.length > 0) {
        if (summarySection) summarySection.style.display = "block";
        if (headerActions) headerActions.style.display = "flex";
        
        container.style.background = "white";
        container.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        container.style.borderRadius = "8px";
        
        var html = "";
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            var watch = watchData[item.name];
            var imgSrc = (watch && watch.images) ? watch.images[0] : "https://via.placeholder.com/150";
            var itemTotal = watch.price * item.quantity;

            html += `
                <div class="cart-item-row" style="display: flex; align-items: center; padding: 20px; border-bottom: 1px solid #f0f0f0;">
                    <div style="width: 50px; display: flex; justify-content: center;">
                        <input type="checkbox" class="cart-item-chk" value="${i}" onchange="calculateSelectedTotal()" checked>
                    </div>
                    <div style="flex: 3; display: flex; align-items: center; gap: 15px;">
                        <img src="${imgSrc}" style="width: 80px; height: 80px; object-fit: contain; background: #f9f9f9; border-radius: 4px;">
                        <div>
                            <span style="display: block; font-weight: bold; color: #333;">${item.name}</span>
                            <span style="font-size: 0.8rem; color: #999;">${watch.specs || 'Brand: Rolex'}</span>
                        </div>
                    </div>
                    <div style="flex: 1.5; text-align: center; color: #666;">${pesoFormat.format(watch.price)}</div>
                    <div style="flex: 1.5; display: flex; justify-content: center;">
                        <div style="display: flex; border: 1px solid #ddd; border-radius: 4px; overflow: hidden;">
                            <button onclick="updateCartQuantity(${i}, -1)" style="padding: 5px 12px; border: none; background: white; cursor: pointer;">-</button>
                            <input type="text" value="${item.quantity}" readonly style="width: 40px; text-align: center; border: none; background: #fafafa;">
                            <button onclick="updateCartQuantity(${i}, 1)" style="padding: 5px 12px; border: none; background: white; cursor: pointer;">+</button>
                        </div>
                    </div>
                    <div style="flex: 1.5; text-align: center; font-weight: bold; color: #4B0082;">${pesoFormat.format(itemTotal)}</div>
                    <div style="flex: 0.5; text-align: right;">
                        <button onclick="deleteCartItem(${i})" style="background: none; border: none; cursor: pointer; color: #ff4757; font-size: 1.2rem;">🗑️</button>
                    </div>
                </div>
            `;
        }
        container.innerHTML = html;
        updateSelectAllUI();
        calculateSelectedTotal();
    } else {
        if (summarySection) summarySection.style.display = "none";
        if (headerActions) headerActions.style.display = "none";
        
        container.style.background = "transparent";
        container.style.boxShadow = "none";
        container.style.border = "none";

        container.innerHTML = `
            <div style="text-align: center; padding: 100px 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; animation: fadeIn 0.8s ease-out;">
                
                <div style="margin-bottom: 10px; opacity: 0.8;">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4B0082" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="7"></circle>
                        <polyline points="12 9 12 12 13.5 13.5"></polyline>
                        <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.84a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.84 1h4.32a2 2 0 0 1 2 1.82l.35 3.83"></path>
                    </svg>
                </div>

                <div style="margin-bottom: 15px;">
                    <h2 style="font-family: serif; color: #2e004f; font-size: 1.8rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; margin: 0;">Your Collection is Empty</h2>
                    <p style="color: #888; font-size: 0.9rem; margin-top: 10px; letter-spacing: 0.5px;">Discover the perfect timepiece to define your style.</p>
                </div>
                
                <button onclick="showShop()" style="background: white; color: #4B0082; border: 1.5px solid #4B0082; padding: 14px 0; width: 300px; cursor: pointer; font-size: 0.9rem; border-radius: 4px; font-weight: 600; transition: 0.3s; letter-spacing: 2px; text-transform: uppercase;">
                    Explore Collection
                </button>

            </div>
        `;
    }
}

function updateCartQuantity(index, change) {
    if (index < 0 || index >= cart.length) return;

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += watchData[cart[i].name].price * cart[i].quantity;
    }

    updateCartDisplay();
    renderCartItems();
    renderFullCartPage();
}

function deleteCartItem(index) {
    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);

    total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += watchData[cart[i].name].price * cart[i].quantity;
    }

    updateCartDisplay();
    renderCartItems();
    renderFullCartPage();
    showNotification("Item removed from cart 🗑️");
}

function deleteSelectedItems() {
    var checkboxes = document.querySelectorAll('.cart-item-chk');
    
    var indicesToDelete = [];
    checkboxes.forEach(function(box) {
        if (box.checked) {
            indicesToDelete.push(parseInt(box.value));
        }
    });

    if (indicesToDelete.length === 0) {
        showNotification("Please select an item to delete! 🛑");
        return;
    }

    cart = cart.filter(function(item, index) {
        return !indicesToDelete.includes(index);
    });

    updateCartDisplay();
    renderCartItems();
    renderFullCartPage();
    calculateSelectedTotal(); 

    showNotification("Selected items removed 🗑️");
}

function toggleSelectAll(selectAllCheckbox) {
    var allItemCheckboxes = document.querySelectorAll('.cart-item-chk');

    allItemCheckboxes.forEach(function(box) {
        box.checked = selectAllCheckbox.checked;
    });

    calculateSelectedTotal();
}

function updateSelectAllUI() {
    var selectAllBox = document.getElementById('select-all-cb');
    var itemCheckboxes = document.querySelectorAll('.cart-item-chk');

    var allChecked = true;
    itemCheckboxes.forEach(function(box) {
        if (!box.checked) {
            allChecked = false;
        }
    });

    if (selectAllBox) {
        selectAllBox.checked = allChecked;
    }
}

function calculateSelectedTotal() {
    var selectedSubtotal = 0;
    var totalShipping = 0; 
    var checkedBoxes = document.querySelectorAll('.cart-item-chk:checked');

    let pesoFormat = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    checkedBoxes.forEach(function(box) {
        var cartIndex = parseInt(box.value); 
        if (!isNaN(cartIndex) && cartIndex >= 0 && cartIndex < cart.length) {
            var item = cart[cartIndex];
            var watch = watchData[item.name];
            if (watch) {
                selectedSubtotal += watch.price * item.quantity;
                totalShipping += (SHIPPING_FEE * item.quantity);
            }
        }
    });

    var totalWithShipping = selectedSubtotal + totalShipping;

    var subtotalDisplay = document.getElementById('full-cart-subtotal');
    var shippingDisplay = document.getElementById('cart-shipping-fee');
    var totalDisplay = document.getElementById('full-cart-total');

    if (subtotalDisplay) subtotalDisplay.innerText = pesoFormat.format(selectedSubtotal);
    if (shippingDisplay) shippingDisplay.innerText = pesoFormat.format(totalShipping);
    if (totalDisplay) totalDisplay.innerText = pesoFormat.format(totalWithShipping);

    updateSelectAllUI();
}

// ==================== CHECKOUT FUNCTIONS ====================
function openCheckout() {
    var checkedBoxes = document.querySelectorAll('.cart-item-chk:checked');

    if (checkedBoxes.length === 0) {
        showNotification("Please select at least one item to checkout! 🛒");
        return;
    }

    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'none';

    document.getElementById('checkout-page').style.display = 'block';

    var totalMerchandise = 0;
    var totalShipping = 0; 
    var itemsHTML = "";
    var container = document.getElementById('checkout-items-container');

    let pesoFormat = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    checkedBoxes.forEach(function(box) {
        var cartIndex = parseInt(box.value);
        var item = cart[cartIndex];
        var watch = watchData[item.name];

        if (watch) {
            var itemSubtotal = watch.price * item.quantity;
            totalMerchandise += itemSubtotal;
            
            totalShipping += (SHIPPING_FEE * item.quantity);

            itemsHTML += `
                <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; align-items: center; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="${watch.images[0]}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: contain; background: #f4f4f4; border-radius: 4px;"> 
                        <span style="font-weight: 500;">${item.name}</span>
                    </div>
                    <span style="text-align: center; color: #666;">${pesoFormat.format(watch.price)}</span>
                    <span style="text-align: center;">${item.quantity}</span>
                    <span style="text-align: right; font-weight: bold; color: var(--indigo-dark);">${pesoFormat.format(itemSubtotal)}</span>
                </div>
            `;
        }
    });
    
    if (container) container.innerHTML = itemsHTML;

    var grandTotal = totalMerchandise + totalShipping;

    document.getElementById('checkout-shipping-fee-display').innerText = pesoFormat.format(totalShipping);
    document.getElementById('checkout-subtotal').innerText = pesoFormat.format(totalMerchandise);
    document.getElementById('checkout-shipping-total').innerText = pesoFormat.format(totalShipping);
    document.getElementById('checkout-grand-total').innerText = pesoFormat.format(grandTotal);
    
    window.scrollTo(0, 0);
}

function updateCheckoutTotal() {
    var totalMerchandise = 0;
    var totalQuantity = 0;
    var checkedBoxes = document.querySelectorAll('.cart-item-chk:checked');

    checkedBoxes.forEach(function(box) {
        var cartIndex = parseInt(box.value);
        var item = cart[cartIndex];
        var watch = watchData[item.name];
        if (watch) {
            totalMerchandise += (watch.price * item.quantity);
            totalQuantity += item.quantity;
        }
    });

    var shippingDropdown = document.getElementById('shipping-method');
    var shippingRate = shippingDropdown ? parseInt(shippingDropdown.value) : 150; 
    
    var totalShipping = shippingRate * totalQuantity;
    var grandTotal = totalMerchandise + totalShipping;

    let pesoFormat = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 });

    document.getElementById('checkout-subtotal').innerText = pesoFormat.format(totalMerchandise);
    document.getElementById('checkout-shipping-total').innerText = pesoFormat.format(totalShipping);
    document.getElementById('checkout-grand-total').innerText = pesoFormat.format(grandTotal);
}

function placeShopeeOrder(event) {
    if (event) event.preventDefault(); 

    const nameBox = document.getElementById('checkout-name-input') || document.getElementById('cust-name');
    const addressBox = document.getElementById('checkout-address-input') || document.getElementById('cust-address');
    const grandTotal = document.getElementById('checkout-grand-total').innerText;

    nameBox.style.border = "1px solid #ccc";
    addressBox.style.border = "1px solid #ccc";

    const rawName = nameBox.value.trim();
    const rawAddress = addressBox.value.trim();

    if (rawName === "" || /\d/.test(rawName) || !rawName.includes(' ')) {
        showNotification("Please enter your full First and Last Name.");
        nameBox.style.border = "2px solid #ff4757";
        return; 
    }

    if (/\b[a-z]/.test(rawName)) {
        showNotification("Error: Please capitalize the first letter of your names.");
        nameBox.style.border = "2px solid #ff4757";
        return;
    }

    if (rawAddress.length < 10 || !rawAddress.toLowerCase().includes('city')) {
        showNotification("Please enter a complete address, including your City.");
        addressBox.style.border = "2px solid #ff4757";
        return;
    }

    if (/\b[a-z]/.test(rawAddress)) {
        showNotification("Error: Please capitalize the first letter of every word in your address.");
        addressBox.style.border = "2px solid #ff4757";
        return;
    }

    if (!rawAddress.includes(',')) {
        showNotification("Error: Please include a comma (,) after the Barangay or Street.");
        addressBox.style.border = "2px solid #ff4757";
        return;
    }

    let itemsHTML = `<div style="margin: 20px 0; border-top: 1px solid #eee; padding-top: 15px;">
                        <h4 style="margin-bottom: 15px; color: #2e004f; text-align: left;">Order Summary:</h4>`;

    const checkedBoxes = document.querySelectorAll('.cart-item-chk:checked');
    checkedBoxes.forEach(function(box) {
        const cartIndex = parseInt(box.value);
        const item = cart[cartIndex];
        const watch = watchData[item.name];

        if (watch) {
            itemsHTML += `
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                    <img src="${watch.images[0]}" style="width: 60px; height: 60px; object-fit: contain; background: #f9f9f9; border-radius: 6px; border: 1px solid #eee;">
                    <div style="text-align: left;">
                        <p style="margin: 0; font-weight: bold; font-size: 0.95rem;">${item.name}</p>
                        <p style="margin: 2px 0 0 0; color: #666; font-size: 0.85rem;">Qty: ${item.quantity}</p>
                    </div>
                </div>
            `;
        }
    });
    itemsHTML += `</div>`;

    const receiptDetails = document.getElementById('receipt-details');
    if (receiptDetails) {
        receiptDetails.innerHTML = `
            <div style="border-left: 4px solid #2e004f; padding-left: 15px; margin-bottom: 20px; text-align: left;">
                <p style="margin: 5px 0;"><strong>Customer:</strong> ${rawName}</p>
                <p style="margin: 5px 0;"><strong>Shipping To:</strong> ${rawAddress}</p>
                <p style="margin: 5px 0;"><strong>Amount Paid:</strong> <span style="color: #4CAF50; font-weight: bold;">${grandTotal}</span></p>
            </div>
            ${itemsHTML} 
            <p style="font-size: 0.75rem; color: #aaa; text-align: center; margin-top: 20px;">Transaction ID: #CW-${Date.now().toString().slice(-6)}</p>
        `;
    }

    nameBox.value = "";
    addressBox.value = "";
    const indicesToRemove = [];
    checkedBoxes.forEach(box => indicesToRemove.push(parseInt(box.value)));
    indicesToRemove.sort((a,b) => b - a).forEach(idx => cart.splice(idx, 1));

    if (typeof updateCartDisplay === "function") updateCartDisplay();
    if (typeof renderCartItems === "function") renderCartItems();

    navigateTo('receipt-page');
    window.scrollTo(0, 0);
}

function backToCart() {
    document.getElementById('checkout-page').style.display = 'none';

    var cartPage = document.getElementById('cart-page');
    if (cartPage) {
        cartPage.style.display = 'block';
        document.body.classList.add('static-header');
    } else {
        showShop(); 
    }
}

// ==================== ADDITIONAL EVENT LISTENERS ====================
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'cart-checkout-btn') {
        console.log("Force-loading cart page...");
        showCartPage();
    }
});

window.addEventListener('popstate', function(event) {
    if (window.location.hash === '#shop') {
        showShop();
    } else if (window.location.hash === '#cart') {
        showCartPage();
    } else {
        showHome();
    }
});

function navigateTo(pageId, headerClass = 'static-header') {
    const pages = [
        'homepage', 'shop-page', 'about-page', 'contact-page', 
        'privacy-page', 'terms-page', 'return-page', 'warranty-page',
        'receipt-page'
    ];

    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'none';
            el.style.paddingTop = "0"; 
        }
    });

    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';

    document.body.classList.remove('static-header', 'shop-active', 'on-cart-page');
    document.body.classList.add(headerClass);

    window.scrollTo(0, 0);
}

function showHome() { navigateTo('homepage', ''); }
function showAbout() { navigateTo('about-page', 'static-header'); }
function showContact() { navigateTo('contact-page', 'static-header'); }
function showPrivacy() { navigateTo('privacy-page', 'static-header'); }
function showTerms() { navigateTo('terms-page', 'static-header'); }
function showReturn() { navigateTo('return-page', 'static-header'); }
function showWarranty() { navigateTo('warranty-page', 'static-header'); }

function updateUserName(loggedInName) {
    const userDisplay = document.getElementById('user-display');
    
    if (userDisplay) {
        if (loggedInName === 'none' || !loggedInName) {
            userDisplay.innerHTML = '👤 Login';
        } else {
            userDisplay.innerHTML = `👤 ${loggedInName}`;
        }
    }
}   

let lastScrollTop = 0;
let ticking = false;

function handleScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!document.body.classList.contains('static-header')) {
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
    } else {
        header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    ticking = false;
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    
    if (!header) return; 

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
        header.classList.add('header-hidden');
    } 
    else {
        header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function processOrder(event) {
    event.preventDefault(); 

    const nameBox = document.getElementById('cust-name');
    const addressBox = document.getElementById('cust-address');
    const total = document.getElementById('checkout-total-display').innerText;

    if (nameBox.value.trim() === "" || addressBox.value.trim() === "") {
        alert("Please fill in both your Name and Delivery Address to complete your order.");
        
        if (nameBox.value.trim() === "") nameBox.style.border = "2px solid #ff4757";
        else nameBox.style.border = "1px solid #ccc";
        
        if (addressBox.value.trim() === "") addressBox.style.border = "2px solid #ff4757";
        else addressBox.style.border = "1px solid #ccc";
        
        return; 
    }

    const receiptDetails = document.getElementById('receipt-details');
    receiptDetails.innerHTML = `
        <div style="border-left: 4px solid #2e004f; padding-left: 15px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Customer:</strong> ${nameBox.value}</p>
            <p style="margin: 5px 0;"><strong>Shipping To:</strong> ${addressBox.value}</p>
            <p style="margin: 5px 0;"><strong>Amount Paid:</strong> <span style="color: #4CAF50; font-weight: bold;">${total}</span></p>
        </div>
        <p style="font-size: 0.75rem; color: #aaa; text-align: center;">Transaction ID: #CW-${Date.now().toString().slice(-6)}</p>
    `;

    closeCheckoutModal(); 
    navigateTo('receipt-page', 'static-header');
    
    cart = [];
    if (typeof updateCartUI === 'function') updateCartUI();
}
