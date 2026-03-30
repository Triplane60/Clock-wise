<?php
$servername = "localhost";
$username = "root"; 
$password = "";     
$dbname = "clockwise_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>Clock-wise | Luxury Store</title>
    <script>
        function showShop() {
            console.log("showShop (inline) called");
            if (typeof _showShop === 'function') {
                _showShop();
            } else {
                console.error("_showShop (from script.js) is NOT defined");
                if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
                const shopPage = document.getElementById('shop-page');
                if (shopPage) shopPage.style.display = 'block';
            }
        }
    </script>
</head>
<body>

    <div id="homepage">
        <header class="main-header" style="justify-content: space-between;">
            <div class="logo">
                <img src="logo.png" alt="Clock-wise logo" class="nav-logo" onclick="openSecretAdminLogin()" style="cursor: pointer;">
            </div>
            
            <div style="position: absolute; left: 50%; transform: translateX(-50%); color: #D4AF37; font-family: 'Georgia', serif; letter-spacing: 3px; font-size: 1.1rem; font-weight: bold; white-space: nowrap;">
                ✧ WELCOME TO CLOCK-WISE ✧
            </div>

            <nav class="home-nav">
                <a href="javascript:void(0);" onclick="showShop()" style="color: white; margin-right: 25px; text-decoration: none; font-weight: bold;">Shop</a>
                <a href="javascript:void(0);" onclick="showAbout()" style="color: white; margin-right: 25px; text-decoration: none; font-weight: bold;">About</a>
                <a href="javascript:void(0);" onclick="showContact()" style="color: white; text-decoration: none; font-weight: bold;">Contact</a>
                <a href="javascript:void(0);" onclick="showMyOrders()" id="nav-portfolio-link" style="display: none; color: white; margin-left: 25px; text-decoration: none; font-weight: bold;">My Portfolio</a>
            </nav>
        </header>

        <section class="tiktok-hero" style="margin-top: 0 !important; padding-top: 100px !important; align-items: flex-start !important;">
            <div class="hero-text">
                <h1 style="font-size: 4rem; color: #2e004f; margin-bottom: 20px; font-family: 'Playfair Display', serif;">Define Your<br>Style</h1>
                <p style="color: #666; font-size: 1.1rem; margin-bottom: 40px; max-width: 450px; line-height: 1.6;">Bold luxury inspired by heritage — Crafted for precision, movement, and everyday confidence.</p>
                
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <button onclick="showShopWithCategory('all')" style="padding: 16px 35px; background-color: #2e004f; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Shop The Drop</button>
                    <button onclick="showShopWithCategory('new-arrivals')" style="padding: 16px 35px; background-color: transparent; color: #2e004f; border: 2px solid #2e004f; border-radius: 6px; font-weight: bold; cursor: pointer;">View All New Styles</button>
                </div>
            </div>

           <div class="hero-visuals" style="flex: 1; min-width: 350px; position: relative; height: 600px; display: flex; align-items: center; overflow: hidden;">
    
                <div class="guarantee-badge" style="position: absolute; top: 10%; right: 5%; background: white; padding: 12px 25px; border-radius: 50px; box-shadow: 0 15px 30px rgba(0,0,0,0.1); z-index: 10; font-weight: bold; font-size: 0.9rem; color: #333; display: flex; align-items: center; gap: 8px;">
                    <span style="color: #2e004f; font-size: 1.2rem;">★</span> 100% Satisfaction Guaranteed
                </div>

                <div id="pill-track" style="display: flex; gap: 30px; height: 460px; transition: transform 0.8s ease-in-out; padding-left: 20px;">
                    <?php
                    $pill_sql = "SELECT * FROM products LIMIT 8";
                    $pill_result = $conn->query($pill_sql);

                    if ($pill_result->num_rows > 0) {
                        while($pill_row = $pill_result->fetch_assoc()) {
                            echo '<div class="moving-pill" onclick="goToProduct(\'' . $pill_row["name"] . '\')" style="cursor: pointer;">';
                            echo '  <img src="' . $pill_row["image_main"] . '" alt="' . $pill_row["name"] . '" style="transform: scale(0.98);">';
                            echo '</div>';
                        }
                    }
                    ?>
                </div>
            </div>
        </section>
        <section class="features-grid">
            <div class="feature-item">
                <span class="feature-icon"><i class="fas fa-shield-alt"></i></span> <h4>Secure Checkout</h4>
                <p>Shop with confidence—your payments are fully protected with bank-level encryption.</p>
            </div>

            <div class="feature-item">
                <span class="feature-icon"><i class="fas fa-shipping-fast"></i></span> <h4>Global Express Delivery</h4>
                <p>Your timepieces arrive via our secure, fully insured global priority courier service.</p>
            </div>

            <div class="feature-item">
                <span class="feature-icon"><i class="fas fa-user-tie"></i></span> <h4>Bespoke Concierge</h4>
                <p>Dedicated assistance for your collection, available whenever you require.</p>
            </div>

            <div class="feature-item">
                <span class="feature-icon"><i class="fas fa-box-open"></i></span> <h4>Pristine Returns</h4>
                <p>If the fit isn't perfect, our concierge will facilitate a seamless, secure return.</p>
            </div>
        </section>

        <section class="category-showcase">
            <h2>Shop by Category</h2>
            <div class="category-grid">
                <div class="category-card" onclick="showShopWithCategory('gentlemen')">
                    <img src="gentlemen.png" alt="Gentlemen's Watches" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 0 auto 15px;">
                    <h3>Gentlemen's Watches</h3>
                </div>
                
                <div class="category-card" onclick="showShopWithCategory('ladies')">
                    <img src="ladies.png" alt="Ladies' Watches" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 0 auto 15px;">
                    <h3>Ladies' Watches</h3>
                </div>
                
                <div class="category-card" onclick="showShopWithCategory('new-arrivals')">
                    <img src="arrival.png" alt="New Arrivals" style="width: 100%; max-width: 290px; height: auto; display: block; margin: 0 auto 15px;">
                    <h3>New Arrivals</h3>
                </div>
            </div>
        </section>

        <section class="newsletter-section">
            <div class="newsletter-content">
                <h3>Stay Connected. Stay Stylish.</h3>
                <p> Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
                    <input type="email" id="newsletter-email" placeholder="Your Email" required>
                    <button type="submit">Join Now</button>
                </form>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61581583744975" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/clockwise.mnl?igsh=bWRtbnpkdmJ1Z3Rv&utm_source=qr&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExbXY1ZkJIbzBYbWN2S2VpdnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR66F6oG17hZv-EgSjQrqGm9qqnck9b9vh0pjfpA1wtwhfVHN1rwL5FmZ5_YSg_aem_A3sC8LEeVsL2QvnkHtbDMw" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>


    <div id="about-page" style="display:none; background:#f5f5f5; min-height:100vh;">

        <header class="main-header" style="justify-content: space-between;">
            <div class="logo">
                <img src="logo.png" class="nav-logo" onclick="showHome()" style="cursor:pointer;">
            </div>

            <nav class="home-nav">
                <a href="javascript:void(0);" onclick="showShop()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Shop</a>
                <a href="javascript:void(0);" onclick="showAbout()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">About</a>
                <a href="javascript:void(0);" onclick="showContact()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Contact</a>
            </nav>
        </header>

        <div style="max-width:900px; margin:0 auto; background:white; padding:40px; border-radius:6px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

            <h1 style="color: #3b0066; font-family: 'Playfair Display', serif; margin-bottom: 20px;">About Clock-wise</h1>

                <p style="color: #555; line-height: 1.8; margin-bottom: 15px; font-size: 1.1rem; font-family: 'Playfair Display', serif; font-style: italic;">
                    "Where Time Meets Style."
                </p>

                <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                    Clock-wise was founded on a singular vision: to bring the pinnacle of global haute horlogerie to the most discerning collectors in the Philippines. We are not merely a boutique; we are a curated gallery of mechanical art.
                </p>

                <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                    Our collection spans the spectrum of horological excellence. From the robust, deep-sea heritage of the Omega Seamaster to the architectural, multi-million peso brilliance of Audemars Piguet and Ulysse Nardin, every piece in our vault is meticulously selected. We cater to those who understand that a watch is far more than a tool to tell time—it is a wearable legacy, an heirloom, and a definitive statement of personal prestige.
                </p>

                <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                    At Clock-wise, our philosophy extends beyond the timepieces themselves. We pride ourselves on providing an unparalleled concierge experience. Whether you are acquiring your first luxury watch or hunting for a highly elusive limited edition to complete your collection, our experts are dedicated to guiding you with discretion, knowledge, and absolute integrity.
                </p>

                <p style="color: #555; line-height: 1.8; margin-top: 30px; font-weight: bold; color: #3b0066;">
                    Discover your signature timepiece today. Welcome to Clock-wise.
                </p>

            </div>
        </div>


        <div id="contact-page" style="display:none; background:#f5f5f5; min-height:100vh;">

        <header class="main-header" style="justify-content: space-between;">
            <div class="logo">
                <img src="logo.png" class="nav-logo" onclick="showHome()" style="cursor:pointer;">
            </div>

            <nav class="home-nav">
                <a href="javascript:void(0);" onclick="showShop()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Shop</a>
                <a href="javascript:void(0);" onclick="showAbout()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">About</a>
                <a href="javascript:void(0);" onclick="showContact()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Contact</a>
            </nav>
        </header>

        <div style="max-width:800px; margin:0 auto; background:white; padding:40px; border-radius:6px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

            <h1 style="color: #3b0066; font-family: 'Playfair Display', serif; margin-bottom: 20px;">Contact the Concierge</h1>

            <p style="color: #555; line-height: 1.8; margin-bottom: 30px;">
                Whether you are seeking to acquire a highly coveted limited edition, arrange a private viewing, or inquire about your recent acquisition, our dedicated advisory team is at your complete disposal. We provide a bespoke service tailored to the needs of discerning collectors.
            </p>

            <div style="display: flex; flex-direction: column; gap: 25px; border-top: 1px solid #eee; padding-top: 25px;">
                
                <div>
                    <h3 style="color: #3b0066; font-size: 1.1rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Digital Inquiries</h3>
                    <p style="color: #555; margin: 0; font-weight: bold;">support@clockwise.com</p>
                    <p style="color: #888; font-size: 0.9rem; margin-top: 5px;">Our experts aim to respond to all correspondence within 24 hours.</p>
                </div>

                <div>
                    <h3 style="color: #3b0066; font-size: 1.1rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Direct Line</h3>
                    <p style="color: #555; margin: 0; font-weight: bold;">+63 912 345 6789</p>
                    <p style="color: #888; font-size: 0.9rem; margin-top: 5px;">Available Monday to Saturday, 10:00 AM - 7:00 PM (PHT).</p>
                </div>

                <div>
                    <h3 style="color: #3b0066; font-size: 1.1rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">The Boutique</h3>
                    <p style="color: #555; margin: 0; font-weight: bold;">Maragondon, Cavite, PH</p>
                    <p style="color: #b8860b; font-size: 0.9rem; margin-top: 5px; font-style: italic;">* By private appointment only. Please contact us to schedule a secure viewing.</p>
                </div>

            </div>

        </div>
    </div>

    <div id="my-orders-page" style="display: none; background: #f4f4f6; min-height: 100vh; padding-top: 120px; padding-bottom: 80px;">
        <div style="max-width: 900px; margin: 0 auto; padding: 0 40px;">
            
            <button id="portfolio-back-btn" onclick="showHome()" style="background: transparent; border: none; color: #3b0066; font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; margin-bottom: 30px; opacity: 0.7; transition: 0.3s;">
                ← Back to Home
            </button>
            
            <div style="text-align: center; margin-bottom: 50px;">
                <p style="font-size: 0.75rem; letter-spacing: 4px; color: #5a0099; text-transform: uppercase; margin-bottom: 10px;">✦ Clockwise Boutique ✦</p>
                <h1 style="font-family: 'Cormorant Garamond', serif; color: #2e004f; font-size: 2.8rem; font-weight: 300; letter-spacing: 3px; text-transform: uppercase; margin: 0;">My Portfolio</h1>
                <div style="width: 60px; height: 1px; background: #5a0099; margin: 15px auto;"></div>
                <p style="color: #999; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">A legacy of precision and elegance</p>
            </div>
            <div id="my-orders-list"></div>
            <div id="clear-portfolio-container" style="text-align: center; margin-top: 40px; padding-bottom: 60px; display: none;">
                <button onclick="clearPortfolio()" class="clear-btn">Securely Clear History</button>
            </div>
        </div>
    </div>

    <div id="secure-clear-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 0, 30, 0.5); backdrop-filter: blur(12px); z-index: 9999; align-items: center; justify-content: center;">
    
        <div class="portfolio-fade-in" style="background: white; width: 420px; padding: 45px; border: 2px solid #3b0066; border-radius: 35px; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.4);">
            
            <div style="margin-bottom: 25px; display: flex; justify-content: center; opacity: 0.8;">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5a0099" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <circle cx="12" cy="12" r="0.5"></circle>
                    <polyline points="12 7 12 12 15 15"></polyline>
                </svg>
            </div>
            
            <h2 style="font-family: 'Cormorant Garamond', serif; color: #2e004f; font-size: 1.8rem; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 15px;">
                Secure Archive Wipe
            </h2>
            
            <div style="width: 40px; height: 1.5px; background: #3b0066; margin: 15px auto 20px; opacity: 0.3;"></div>
            
            <p style="color: #666; font-size: 0.85rem; line-height: 1.7; margin-bottom: 35px; font-family: 'Montserrat', sans-serif; letter-spacing: 1px;">
                Are you sure you want to securely clear your private portfolio history? This action is permanent and cannot be reversed.
            </p>

            <div style="display: flex; gap: 15px; justify-content: center;">
                <button onclick="closeSecureModal()" style="background: transparent; border: 1px solid #ddd; color: #999; padding: 14px 28px; cursor: pointer; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; border-radius: 8px;">
                    Cancel
                </button>
                <button onclick="confirmSecureClear()" style="background: #3b0066; border: none; color: white; padding: 14px 28px; cursor: pointer; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; border-radius: 8px; box-shadow: 0 4px 15px rgba(59, 0, 102, 0.2);">
                    Confirm Wipe
                </button>
            </div>
        </div>
    </div>

    <div id="shop-page" style="display: none;">
        <header class="main-header">
            <div class="logo">
                <img src="logo.png" alt="Clock-wise Logo" class="nav-logo" onclick="showHome();">
            </div>
            <div class="search-container">
                <input type="text" id="search-input" class="search-input" placeholder="Search watches..." onkeyup="searchWatches()" autocomplete="off">
                <button class="search-btn" onclick="searchWatches()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
            <div class="header-actions" style="display: flex; gap: 20px; align-items: center;">
            <div class="cart-wrapper">
                <span onclick="showCartPage()" style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-bag-shopping" style="font-size: 1.2rem; color: #ffffff !important;"></i> 
                    <span id="cart-count" style="background-color: #ffffff !important; color: #3b0066 !important; border-radius: 50%; padding: 2px 6px; font-size: 0.75rem; font-weight: bold;">0</span>
                </span>
                
                <div id="cart-dropdown">
                    <h3 style="margin-top: 0; color: #888; font-weight: normal; font-size: 0.95rem; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Recently Added Products</h3>
                    
                    <div id="cart-items-list" style="max-height: 300px; overflow-y: auto; margin-bottom: 15px; font-size: 0.95rem;">
                        <p id="empty-cart-msg" style="color: #888; font-style: italic; text-align: center; padding: 20px;">Your cart is empty.</p>
                    </div>
                    
                    <div class="button-container" style="display: flex; justify-content: flex-end; width: 100%; padding-top: 10px;">
                        <button id="cart-checkout-btn" 
                                onclick="showCartPage(); console.log('Cart button clicked!');" 
                                style="display: none; padding: 10px 20px; background-color: var(--indigo-dark); color: white; border: none; cursor: pointer; border-radius: 4px; font-weight: bold;">
                            View My Shopping Cart
                        </button>
                    </div>
                </div>
            </div>
                <div style="position: relative; display: inline-block;">
                    <span onclick="handleUserClick()" style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: #ffffff !important;" id="user-display">
                        <i class="fa-solid fa-circle-user" style="font-size: 1.2rem;"></i> 
                        <span style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;">Login</span>
                    </span>
                    <div id="user-dropdown" class="user-dropdown" style="display: none; position: absolute; right: 0; top: 35px; background: #ffffff; min-width: 150px; border-radius: 5px; box-shadow: 0 8px 16px rgba(0,0,0,0.2); z-index: 1000;">
                        <button onclick="handleLogout()" class="dropdown-item" style="width: 100%; padding: 10px; border: none; background: none; text-align: left; cursor: pointer; color: #333; font-weight: bold;">Logout</button>
                    </div>
                </div>
            </div>
        </header>

        <nav class="category-bar">
            <button class="nav-item active" onclick="filterCategory('all')">All Watches</button>
            <button class="nav-item" onclick="filterCategory('men')">Gentlemen</button>
            <button class="nav-item" onclick="filterCategory('ladies')">Ladies</button>
            <button class="nav-item" onclick="filterCategory('arrivals')">New Arrivals</button>
        </nav>


        <div class="hero-banner-fade" id="luxury-fade-banner">
    
            <div class="fade-slide active-slide" style="background: linear-gradient(45deg, #1f1c2c, #928dab);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: white;">The ₱28M Masterpiece</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #e0e0e0;">Kalla Geneva Diamond and White Gold. Pure brilliance.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #ffffff; color: #1f1c2c; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('Kalla Geneva Diamond and White Gold')">View Details</button>
                </div>
            </div>

            <div class="fade-slide" style="background: linear-gradient(45deg, #0f2027, #203a43, #2c5364);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: white;">Celestial Perfection</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #e0e0e0;">Grand Complications Celestial in Rose Gold.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #ffffff; color: #0f2027; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('Grand Complications Celestial Rose Gold')">View Details</button>
                </div>
            </div>

            <div class="fade-slide" style="background: linear-gradient(45deg, #141e30, #243b55);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: white;">Acoustic Marvel</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #e0e0e0;">Circus Minute Repeater. A symphony of haute horlogerie.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #ffffff; color: #141e30; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('Circus Minute Repeater')">View Details</button>
                </div>
            </div>

            <div class="fade-slide" style="background: linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: white;">Architectural Brilliance</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #e0e0e0;">Overseas Tourbillon Skeleton Titanium.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #ffffff; color: #3a1c71; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('Overseas Tourbillon Skeleton Titanium')">View Details</button>
                </div>
            </div>

            <div class="fade-slide" style="background: linear-gradient(45deg, #000000, #434343);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: white;">Forged Carbon & Ceramic</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #e0e0e0;">Royal Oak Concept Split-Seconds Chronograph GMT.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #ffffff; color: #000000; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('Royal Oak Concept Split-Seconds Chronograph GMT Carbon')">View Details</button>
                </div>
            </div>

            <div class="fade-slide" style="background: linear-gradient(45deg, #8e9eab, #eef2f3);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: #333;">Diamond & Mother of Pearl</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #555;">Complications Annual Calendar in White Gold.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #333; color: #ffffff; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('Complications Annual Calendar Diamond and Mother of Pearl White Gold')">View Details</button>
                </div>
            </div>

            <div class="fade-slide" style="background: linear-gradient(45deg, #111111, #1e3c72, #2a5298);">
                <div class="fade-content">
                    <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: 'Playfair Display', serif; color: white;">Titanium Armor</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px; color: #e0e0e0;">MRG-B5000. The absolute pinnacle of digital resilience.</p>
                    <button class="add-btn" style="width: 200px; padding: 12px; border: none; background-color: #ffffff; color: #1e3c72; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;" onclick="openDetails('MRG-B5000')">View Details</button>
                </div>
            </div>

        </div>

        <main class="content-area">
            <div class="product-grid" id="watchContainer">
                <?php
                $sql = "SELECT * FROM products";
                $result = $conn->query($sql);

                if ($result && $result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                    $name = htmlspecialchars($row["name"]);
                    $price = isset($row["price"]) ? (float)$row["price"] : 0;
                    $stock = isset($row["stock_quantity"]) ? (int)$row["stock_quantity"] : 10;
                    $brand = isset($row["brand"]) ? htmlspecialchars($row["brand"]) : 'Unknown';
                    $description = isset($row["description"]) ? htmlspecialchars($row["description"]) : 'Description not available.';
                    
                    // Get image scale from database, default to 1.0 if not set
                    $scale = isset($row["image_scale"]) ? (float)$row["image_scale"] : 1.0;
                    
                    // Get additional images
                    $image_main = isset($row["image_main"]) ? $row["image_main"] : '';
                    $image_2 = isset($row["image_2"]) ? $row["image_2"] : '';
                    $image_3 = isset($row["image_3"]) ? $row["image_3"] : '';
                    $image_4 = isset($row["image_4"]) ? $row["image_4"] : '';
                    
                    $catLabel = "";
                    if ($row["category"] == "men") { $catLabel = "GENTLEMEN'S COLLECTION"; } 
                    elseif ($row["category"] == "ladies") { $catLabel = "LADIES' COLLECTION"; } 
                    else { $catLabel = strtoupper($row["category"]) . " COLLECTION"; }
                ?>
                    <div class="watch-card <?= $row["category"] ?>">
                        
                        <div class="image-container">
                            <img src="<?= $image_main ?>" class="image-placeholder" 
                                 data-name="<?= $name ?>" 
                                 data-brand="<?= $brand ?>" 
                                 data-stock="<?= $stock ?>" 
                                 data-price="<?= $price ?>"
                                 data-description="<?= $description ?>"
                                 data-image-main="<?= $image_main ?>"
                                 data-image-2="<?= $image_2 ?>"
                                 data-image-3="<?= $image_3 ?>"
                                 data-image-4="<?= $image_4 ?>"
                                 alt="<?= $name ?>" style="transform: scale(<?= $scale ?>);">
                        </div>
                        
                        <div style="display: flex; flex-direction: column; flex-grow: 1;">
                            <h3 style="margin: 0 0 10px 0; font-size: 1.1rem; flex-grow: 1;"><?= $name ?></h3>
                            <p class="category-tag" style="margin-bottom: 5px;"><?= $catLabel ?></p>
                            
                            <p class="price" style="margin-bottom: 15px;">₱<?= number_format($price, 2) ?></p>
                            
                            <button class="details-btn" 
                                    data-name="<?= $name ?>" 
                                    data-brand="<?= $brand ?>" 
                                    data-stock="<?= $stock ?>" 
                                    data-price="<?= $price ?>"
                                    data-description="<?= $description ?>"
                                    data-image-main="<?= $image_main ?>"
                                    data-image-2="<?= $image_2 ?>"
                                    data-image-3="<?= $image_3 ?>"
                                    data-image-4="<?= $image_4 ?>"
                                    style="margin-bottom: 8px;">View Details</button>
                            <button class="add-btn" 
                                    data-name="<?= $name ?>" 
                                    data-price="<?= $price ?>" 
                                    data-stock="<?= $stock ?>"
                                    data-brand="<?= $brand ?>"
                                    data-description="<?= $description ?>"
                                    data-image-main="<?= $image_main ?>"
                                    data-image-2="<?= $image_2 ?>"
                                    data-image-3="<?= $image_3 ?>"
                                    data-image-4="<?= $image_4 ?>"
                                    >Add to Cart</button>
                        </div>

                    </div>
                <?php 
                    }
                } else {
                    echo "<p style='text-align: center; color: #666; width: 100%; grid-column: 1 / -1; padding: 50px;'>No products found.</p>";
                }
                ?>
        </main>


           <div id="cart-page" style="display: none; padding: 50px 10% 40px; background-color: #f5f5f5;">
                <div style="display: flex; gap: 20px; align-items: flex-start; max-width: 1200px; margin: 0 auto;">
                    
                    <div style="flex: 2;">
                        <div id="cart-header-actions" style="background: white; padding: 15px 25px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; color: #666; font-size: 0.9rem;">
                            <div style="margin-bottom: 10px;">
                                <button onclick="showShop()" style="background: transparent; border: none; color: var(--indigo-dark); font-size: 1.1rem; cursor: pointer; font-weight: bold; padding: 8px 0; display: flex; align-items: center; transition: color 0.3s;">
                                    ← Continue Shopping
                                </button>
                            </div>

                            <div style="display: flex; align-items: center; gap: 10px;">
                               <input type="checkbox" id="select-all-cb" onchange="toggleSelectAll(this)" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="select-all-cb" style="cursor: pointer;">SELECT ALL</label>
                            </div>
                            <div onclick="deleteSelectedItems()" style="cursor: pointer; color: indigo;">🗑️ DELETE</div>
                        </div>
                        
                        <div id="full-cart-items-container" style="background: white; padding: 0 25px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            </div>
                    </div>

                    <div id="cart-summary-section" style="flex: 1; background: white; padding: 25px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); position: sticky; top: 120px;">
                        <h3 style="margin-top: 0; font-size: 1.1rem; color: #333;">Order Summary</h3>
                        
                        <div style="display: flex; justify-content: space-between; margin: 15px 0; color: #666; font-size: 0.95rem;">
                            <span>Subtotal</span>
                            <span id="full-cart-subtotal">₱0.00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 15px 0;">
                        <span>Shipping Fee</span>
                        <span id="cart-shipping-fee">₱0.00</span>
                    </div>
                        
                        <div style="display: flex; margin: 20px 0;">
                            <input type="text" placeholder="Enter Voucher Code" style="flex: 1; padding: 10px; border: 1px solid #ddd; border-right: none; outline: none;">
                            <button style="background: #17a2b8; color: white; border: none; padding: 0 20px; font-weight: bold; cursor: pointer;">APPLY</button>
                        </div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 20px;">
                            <span style="color: #333;">Subtotal</span>
                            <div style="text-align: right;">
                                <span id="full-cart-total" style="color: indigo; font-size: 1.5rem; font-weight: bold;">₱0.00</span><br>
                                <span style="font-size: 0.75rem; color: #999;">VAT included, where applicable</span>
                            </div>
                        </div>
                        
                        <button onclick="openCheckout()" style="width: 100%; background: indigo; color: white; border: none; padding: 15px; font-weight: bold; border-radius: 2px; cursor: pointer; margin-top: 20px; font-size: 1rem;">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>

                </div>
            </div>

            <div id="checkout-page" style="display: none; background-color: #f5f5f5; padding-bottom: 50px; padding-top: 220px;">
                <main style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">                   
                    <button onclick="backToCart()" style="background: transparent; border: none; color: var(--indigo-dark); font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-bottom: 20px; padding: 0; display: flex; align-items: center; transition: color 0.3s;">
                        ← Back to Cart
                    </button>

                    <section style="background: white; padding: 25px; border-radius: 3px; box-shadow: 0 1px 1px rgba(0,0,0,0.05); margin-bottom: 20px; border-top: 4px solid indigo;">
    
                        <div style="margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid #f0f0f0;">
                            <div style="display: flex; align-items: center; color: indigo; margin-bottom: 20px;">
                                <i class="fa-solid fa-location-dot" style="font-size: 1.2rem; margin-right: 8px;"></i>
                                <h3 style="margin: 0; font-size: 1.1rem;">Delivery Address</h3>
                            </div>

                            <div style="display: grid; grid-template-columns: 130px 1fr; gap: 15px; align-items: center;">
                                <label style="font-weight: bold; color: #333;">Customer Name:</label>
                                <input type="text" id="checkout-name-input" placeholder="Enter your full name" autocomplete="off"
                                    style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 0.9rem; width: 100%; box-sizing: border-box;">

                                <label style="font-weight: bold; color: #333; align-self: start;">Full Address:</label>
                                <textarea id="checkout-address-input" placeholder="Street, Barangay, City" rows="2"
                                        style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 0.9rem; resize: none; width: 100%; box-sizing: border-box;"></textarea>

                                <label style="font-weight: bold; color: #333;">Contact Number:</label>
                                <input 
                                type="tel" 
                                id="checkout-contact-input" 
                                placeholder="09XX-XXX-XXXX" 
                                autocomplete="off"
                                maxlength="13"
                                oninput="formatPhoneNumber(this)"
                                style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 0.9rem; width: 100%; box-sizing: border-box;"
                                >       
                                </div>
                        </div>

                        <div style="margin-top: 25px; padding-top: 25px; border-top: 1px solid #f0f0f0;">
                            <div style="display: flex; align-items: center; color: indigo; margin-bottom: 20px;">
                                <<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="indigo" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                <h3 style="margin: 0; font-size: 1.1rem;">Payment Method</h3>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">

                                <label onclick="selectPayment(this)" style="display: flex; align-items: center; gap: 12px; padding: 14px 18px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s;">
                                    <input type="radio" name="payment-method" value="Cash on Delivery" style="display:none;">
                                    <div style="width: 40px; height: 40px; background: #f3f0ff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"></rect><path d="M16 8h4l3 3v5h-7V8z"></path><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700; font-size: 0.85rem; color: #2e004f; font-family: 'Montserrat', sans-serif;">Cash on Delivery</div>
                                        <div style="font-size: 0.7rem; color: #888; font-family: 'Montserrat', sans-serif;">Pay when you receive</div>
                                    </div>
                                </label>

                                <label onclick="selectPayment(this)" style="display: flex; align-items: center; gap: 12px; padding: 14px 18px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s;">
                                    <input type="radio" name="payment-method" value="GCash / Maya" style="display:none;">
                                    <div style="width: 40px; height: 40px; background: #f3f0ff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.88 11.3a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700; font-size: 0.85rem; color: #2e004f; font-family: 'Montserrat', sans-serif;">GCash / Maya</div>
                                        <div style="font-size: 0.7rem; color: #888; font-family: 'Montserrat', sans-serif;">eCash payment</div>
                                    </div>
                                </label>

                                <label onclick="selectPayment(this)" style="display: flex; align-items: center; gap: 12px; padding: 14px 18px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s;">
                                    <input type="radio" name="payment-method" value="Credit / Debit Card" style="display:none;">
                                    <div style="width: 40px; height: 40px; background: #f3f0ff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700; font-size: 0.85rem; color: #2e004f; font-family: 'Montserrat', sans-serif;">Credit / Debit Card</div>
                                        <div style="font-size: 0.7rem; color: #888; font-family: 'Montserrat', sans-serif;">Visa, Mastercard, etc.</div>
                                    </div>
                                </label>

                                <label onclick="selectPayment(this)" style="display: flex; align-items: center; gap: 12px; padding: 14px 18px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s;">
                                    <input type="radio" name="payment-method" value="Bank Transfer" style="display:none;">
                                    <div style="width: 40px; height: 40px; background: #f3f0ff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
                                    </div>
                                    <div>
                                        <div style="font-weight: 700; font-size: 0.85rem; color: #2e004f; font-family: 'Montserrat', sans-serif;">Bank Transfer</div>
                                        <div style="font-size: 0.7rem; color: #888; font-family: 'Montserrat', sans-serif;">Direct bank deposit</div>
                                    </div>
                                </label>

                            </div>
                        </div>

                        <h3 style="margin-top: 0; color: #333;">Products Ordered</h3>
                        
                        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; color: #888; font-size: 0.9rem; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
                            <span>Product</span>
                            <span style="text-align: center;">Unit Price</span>
                            <span style="text-align: center;">Amount</span>
                            <span style="text-align: right;">Item Subtotal</span>
                        </div>

                        <div id="checkout-items-container"></div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center; background: #fafdff; padding: 15px; border-top: 1px dashed #ddd; margin-top: 15px;">
                            <span style="font-weight: bold; color: purple;">Shipping Fee:</span>
                            <span><strong id="checkout-shipping-fee-display">₱0.00</strong></span>
                        </div>
                    </section>

                    <section style="background: white; padding: 25px; border-radius: 3px; box-shadow: 0 1px 1px rgba(0,0,0,0.05);">
                        <div style="text-align: right; background: #fffcf5; padding: 20px; border: 1px dashed #f6e6b4;">
                            <p>Merchandise Subtotal: <span id="checkout-subtotal" style="display: inline-block; width: 120px;">₱0.00</span></p>
                            <p>Shipping Total: <span id="checkout-shipping-total" style="display: inline-block; width: 120px;">₱0.00</span></p>
                            <h2 style="color: indigo; margin-top: 20px;">Total Payment: <span id="checkout-grand-total">₱0.00</span></h2>
                        </div>
                        
                        <div style="text-align: right; margin-top: 20px;">
                            <button onclick="placeShopeeOrder()" style="background: indigo; color: white; border: none; padding: 15px 40px; font-size: 1.1rem; font-weight: bold; border-radius: 2px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Place Order</button>
                        </div>
                    </section>
                </main>
            </div>
            <div id="cart-modal" class="modal">
                <div class="modal-content">
                    <span class="close-btn">&times;</span>                   
                    <h2>Your Cart</h2>
                    <button onclick="showShop()" style="background: transparent; border: none; color: var(--indigo-dark); font-size: 1rem; cursor: pointer; font-weight: bold; margin-bottom: 20px; padding: 0; display: flex; align-items: center;">
                        ← Continue Shopping
                    </button>
                    <div id="cart-items-list-modal"></div>
                    <hr style="border: 0; border-top: 1px solid #303056; margin: 20px 0;">
                    <p style="font-size: 1.2rem; font-weight: bold;">Total: ₱<span id="cart-total-price">0.00</span></p>
                    <button class="add-btn" style="background-color: #4caf50;" onclick="alert('Proceeding to checkout!')">Checkout</button>
                </div>
            </div>

            <div id="details-modal" class="modal">
                <div class="modal-content" style="max-width: 900px; display: flex; gap: 40px; padding: 50px; position: relative;">
                    
                    <span class="close-btn" onclick="closeDetails()" style="position: absolute; right: 25px; top: 15px; font-size: 30px; cursor: pointer; color: #333;">&times;</span>
                    
                    <div style="flex: 1; display: flex; flex-direction: column;">
                        <!-- Main Image Container -->
                        <div style="display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 15px; min-height: 400px; position: relative;">
                            <img id="modal-main-image" src="" alt="Luxury Watch" style="max-width: 100%; max-height: 400px; object-fit: contain; cursor: pointer;">
                            
                            <!-- Image Navigation Arrows (hidden by default) -->
                            <div id="modal-prev-btn" onclick="changeModalImage(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: none; align-items: center; justify-content: center; font-size: 18px;">‹</div>
                            <div id="modal-next-btn" onclick="changeModalImage(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: none; align-items: center; justify-content: center; font-size: 18px;">›</div>
                        </div>
                        
                        <!-- Thumbnail Gallery -->
                        <div id="modal-thumbnails" style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
                            <!-- Thumbnails will be dynamically added here -->
                        </div>
                    </div>
                    
                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                        <!-- Brand Name -->
                        <p id="modal-brand" style="font-size: 1.1rem; color: #666; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; font-weight: 500;">BRAND</p>
                        
                        <!-- Watch Title -->
                        <h2 id="modal-title" style="font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 15px; color: #1a1a1a;">Watch Title</h2>
                        
                        <!-- Stock Indicator -->
                        <div id="modal-stock" style="margin-bottom: 15px;">
                            <span id="stock-badge" style="padding: 6px 12px; border-radius: 20px; font-size: 0.9rem; font-weight: 500;">In Stock</span>
                        </div>
                        
                        <p id="modal-desc" style="font-size: 1.1rem; color: #555; line-height: 1.8; margin-bottom: 25px;">Description will load here...</p>
                        
                        <p id="modal-price" style="font-size: 1.8rem; font-weight: bold; color: #2e004f; margin-bottom: 30px;">₱0.00</p>
                        
                        <button class="add-btn" style="padding: 16px 30px; background-color: #2e004f; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 1.1rem; transition: 0.3s;">Add to Cart</button>
                    </div>
                    
                </div>
            </div>

            <div id="login-modal" class="modal">
                <div class="modal-content">
                    <span class="close-btn" onclick="closeLogin()">&times;</span>
                    <h2 id="login-title" style="text-align: center; color: #2e004f; margin-top: 0;">Welcome Back</h2>
                    <p id="login-subtitle" style="text-align: center; color: #666; margin-bottom: 20px;">Please login to start shopping</p>

                    <div id="login-form-content">
                        <input type="text" 
                            id="auth-username" 
                            maxlength="16" 
                            autocomplete="off" 
                            placeholder="Username" 
                            style="width: 100%; padding: 14px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
                        <div style="width: 100%; margin-bottom: 15px; position: relative;">
                            <input type="password" id="auth-password" maxlength="10" placeholder="Password" required style="width: 100%; padding: 14px; padding-right: 45px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
                            
                            <span onclick="togglePasswordVisibility('auth-password', this)" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; display: flex; align-items: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            </span>
                        </div>

                        <div style="text-align: right; margin-bottom: 15px;">
                            <a href="javascript:void(0);" onclick="handleForgotPassword();" style="color: #7e57c2; font-size: 14px; text-decoration: none; font-weight: bold;">Forgot Password?</a>
                        </div>

                        <button onclick="handleAuth(event)" style="width: 100%; padding: 14px; background-color: #2e004f; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-bottom: 15px;">Login</button>

                        <p style="text-align: center; font-size: 14px; color: #666;">Don't have an account? <a href="#" onclick="toggleAuth(); return false;" style="color: #7e57c2; font-weight: bold; text-decoration: none;">Register here</a></p>
                    </div>

                    <div id="register-form-content" style="display: none;">
                        <input type="text" 
                            id="reg-username" 
                            maxlength="16" 
                            autocomplete="off" 
                            placeholder="Username" 
                            style="width: 100%; padding: 14px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
                        <div style="width: 100%; margin-bottom: 15px; position: relative;">
                            <input type="password" id="reg-password" maxlength="10" placeholder="Create Password" required style="width: 100%; padding: 14px; padding-right: 45px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
                            
                            <span onclick="togglePasswordVisibility('reg-password', this)" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; display: flex; align-items: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            </span>
                        </div>

                        <div style="width: 100%; margin-bottom: 20px; position: relative;">
                            <input type="password" id="reg-confirm-password" maxlength="10" placeholder="Confirm Password" required style="width: 100%; padding: 14px; padding-right: 45px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
                            
                            <span onclick="togglePasswordVisibility('reg-confirm-password', this)" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; display: flex; align-items: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            </span>
                        </div>

                        <button onclick="handleRegister(event)" style="width: 100%; padding: 14px; background-color: #2e004f; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-bottom: 15px;">Create Account</button>

                        <p style="text-align: center; font-size: 14px; color: #666;">Already have an account? <a href="#" onclick="toggleAuth(); return false;" style="color: #7e57c2; font-weight: bold; text-decoration: none;">Login here</a></p>
                    </div>
                </div>
            </div>

        <div id="reset-modal" class="modal" style="display: none;">
            <div class="modal-content" style="max-width: 400px; padding: 30px; border-radius: 8px; text-align: center;">
                <span class="close" onclick="closeResetModal()" style="float: right; cursor: pointer; font-size: 24px;">&times;</span>
                <h2 style="color: var(--indigo-dark); margin-bottom: 20px;">Reset Password</h2>
                
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 20px;">Enter your username and new password.</p>

                <div style="margin-bottom: 15px;">
                    <input type="text" id="reset-username" placeholder="Username" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>

                <div style="margin-bottom: 15px; position: relative;">
                    <input type="password" id="reset-new-password" maxlength="10" placeholder="New Password" style="width: 100%; padding: 10px; padding-right: 45px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                    <span onclick="togglePasswordVisibility('reset-new-password', this)" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; display: flex; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    </span>
                </div>

                <div style="margin-bottom: 20px; position: relative;">
                    <input type="password" id="reset-confirm-password" maxlength="10" placeholder="Confirm New Password" style="width: 100%; padding: 10px; padding-right: 45px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                    <span onclick="togglePasswordVisibility('reset-confirm-password', this)" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; display: flex; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    </span>
                </div>

                <button onclick="saveNewPassword()" style="width: 100%; padding: 12px; background: var(--indigo-dark); color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Save New Password</button>
                <p onclick="backToLoginFromReset()" style="text-align: center; margin-top: 25px; cursor: pointer; position: relative; z-index: 10;">
                    <span style="color: var(--indigo-dark); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid var(--indigo-dark); padding-bottom: 2px; pointer-events: none;">
                        Return to Login
                    </span>
                </p>
            </div>
        </div>

        <div id="logout-confirm-modal" class="modal">
            <div class="modal-content" style="max-width: 350px; text-align: center; background-color: #ffffff; padding: 30px; border-radius: 10px;">
                <h2 style="color: #2e004f; margin-bottom: 10px;">Sign Out?</h2>
                <p style="color: #555; margin-bottom: 25px;">Are you sure you want to log out of your account?</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="closeLogoutModal()" style="flex: 1; padding: 10px; border: 2px solid #7e57c2; background: white; color: #7e57c2; font-weight: bold; border-radius: 5px; cursor: pointer;">Cancel</button>
                    <button onclick="executeLogout()" style="flex: 1; padding: 10px; border: none; background: #2e004f; color: white; font-weight: bold; border-radius: 5px; cursor: pointer;">Yes, Logout</button>
                </div>
            </div>
        </div>
    </div>

    <div id="receipt-page" class="content-area" style="display: none; min-height: 100vh; background: #f8f9fa; padding: 0; margin: 0;">
    
        <div style="background: #2e004f; width: 100%; height: 130px; position: static; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center;">
    
            <div style="width: 100%; max-width: 1600px; display: flex; align-items: center; justify-content: space-between; padding: 0 50px;">
                
                <div class="logo">
                    <img src="logo.png" style="height: 110px; display: block;" alt="Clockwise Logo">
                </div>

                <div style="color: white; font-weight: bold; letter-spacing: 1px; font-size: 24px; opacity: 0.9;">
                    OFFICIAL RECEIPT
                </div>
                
            </div>
        </div>

        <div style="padding: 40px 20px;">
            <div class="receipt-container" style="background: white; padding: 40px; border-radius: 12px; max-width: 550px; margin: 0 auto; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.08); border: 1px solid #eee;">
                <h2 style="color: #2e004f; margin-top: 0; font-family: 'Playfair Display', serif; font-size: 2rem;">Order Confirmed!</h2>
                <p style="color: #666; font-size: 1.1rem;">Thank you for choosing Clockwise. Your luxury timepiece is being prepared for shipment.</p>
                
                <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">
                
                <div id="receipt-details" style="text-align: left; line-height: 1.8; color: #333; font-size: 1rem;">
                    </div>

                <button onclick="window.location.href='index.html';" class="btn-primary" style="margin-top: 40px; padding: 18px 30px; border-radius: 50px; background: #2e004f; color: white; border: none; cursor: pointer; width: 100%; font-weight: bold; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Return to Shop</button>
            </div>
        </div>
    </div>

<!-- PRIVACY POLICY PAGE -->
    <div id="privacy-page" style="display:none; background:#f5f5f5; min-height:100vh;">

    <header class="main-header" style="justify-content: space-between;">
        <div class="logo">
        <img src="logo.png" class="nav-logo" onclick="showHome()" style="cursor:pointer;">
        </div>

        <nav class="home-nav">
        <a href="javascript:void(0);" onclick="showShop()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Shop</a>
        <a href="javascript:void(0);" onclick="showAbout()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">About</a>
        <a href="javascript:void(0);" onclick="showContact()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Contact</a>
        </nav>
    </header>

    <div style="max-width:900px; margin:0 auto; background:white; padding:40px; border-radius:6px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

        <h1 style="color: #3b0066; font-family: 'Playfair Display', serif; margin-bottom: 20px;">Privacy Policy</h1>

            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                At Clock-wise, we understand that true luxury requires absolute discretion. We treat your personal and financial information with the highest degree of confidentiality and state-of-the-art security.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">1. Data Collection & Bank-Level Security</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                When utilizing our concierge services or placing an order, we collect essential data including your name, delivery coordinates, and contact details. All financial transactions are processed through highly encrypted, PCI-compliant gateways. Clock-wise does not store your direct credit card information on our servers.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">2. How We Utilize Your Information</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Your information is strictly used to facilitate secure, insured deliveries, process payments, and provide you with personalized VIP concierge services. If you opt-in, we may discreetly notify you regarding the arrival of highly requested limited-edition pieces.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">3. The Clock-wise Promise</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Your privacy is a cornerstone of our business. Your personal information will never be sold, leased, or shared with third-party marketing agencies. We only share necessary data with trusted logistics partners specifically for the secure delivery of your timepiece.
            </p>

            <div style="text-align: center; margin-top: 30px;">
                <button onclick="showMainPage()" style="padding: 12px 30px; background: #3b0066; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: bold; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#5a0099';" onmouseout="this.style.backgroundColor='#3b0066';">← Back to Home</button>
            </div>

        </div>
    </div>



<!-- TERMS OF SERVICE PAGE -->
    <div id="terms-page" style="display:none; background:#f5f5f5; min-height:100vh;">

    <header class="main-header" style="justify-content: space-between;">
        <div class="logo">
        <img src="logo.png" class="nav-logo" onclick="showHome()" style="cursor:pointer;">
        </div>

        <nav class="home-nav">
        <a href="javascript:void(0);" onclick="showShop()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Shop</a>
        <a href="javascript:void(0);" onclick="showAbout()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">About</a>
        <a href="javascript:void(0);" onclick="showContact()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Contact</a>
        </nav>
    </header>

    <div style="max-width:900px; margin:0 auto; background:white; padding:40px; border-radius:6px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

        <h1 style="color: #3b0066; font-family: 'Playfair Display', serif; margin-bottom: 20px;">Terms of Service</h1>

            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Welcome to Clock-wise, the premier destination for luxury timepieces. By accessing our boutique online, you agree to be bound by the following elite service terms.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">1. Boutique Pricing & Exclusivity</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                All prices are listed in Philippine Pesos (PHP) unless otherwise stated. Given the extreme rarity of certain limited-edition pieces (such as Audemars Piguet and Vacheron Constantin), adding an item to your cart does not reserve the stock. Orders are only finalized upon successful payment clearance and dispatch confirmation from our team. Clock-wise reserves the right to adjust pricing based on global market fluctuations without prior notice.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">2. Authenticity Guarantee</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Clock-wise unconditionally guarantees that every timepiece sold is 100% authentic, bearing its original manufacturer serial numbers, and has been legally sourced. 
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">3. Order Fulfillment & Fraud Prevention</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                To protect our high-net-worth clients, all transactions undergo rigorous security checks. We reserve the right to cancel any order flagged by our fraud prevention systems. Clients must provide highly accurate shipping details; Clock-wise holds no liability for lost transit due to incorrect client information.
            </p>

            <div style="text-align: center; margin-top: 30px;">
                <button onclick="showMainPage()" style="padding: 12px 30px; background: #3b0066; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: bold; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#5a0099';" onmouseout="this.style.backgroundColor='#3b0066';">← Back to Home</button>
            </div>

        </div>
    </div>



<!-- RETURN POLICY PAGE -->
    <div id="return-page" style="display:none; background:#f5f5f5; min-height:100vh;">

    <header class="main-header" style="justify-content: space-between;">
        <div class="logo">
        <img src="logo.png" class="nav-logo" onclick="showHome()" style="cursor:pointer;">
        </div>

        <nav class="home-nav">
        <a href="javascript:void(0);" onclick="showShop()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Shop</a>
        <a href="javascript:void(0);" onclick="showAbout()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">About</a>
        <a href="javascript:void(0);" onclick="showContact()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Contact</a>
        </nav>
    </header>

        <div style="max-width:900px; margin:0 auto; background:white; padding:40px; border-radius:6px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

        <h1 style="color: #3b0066; font-family: 'Playfair Display', serif; margin-bottom: 20px;">Return & Exchange Policy</h1>

            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                At Clock-wise, we curate our collection to meet the highest standards of haute horlogerie. If your newly acquired timepiece does not completely meet your expectations, we offer a strict <strong>7-Day Return and Exchange Privilege</strong> from the date of delivery.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">1. Conditions for Return</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Due to the delicate and high-value nature of our inventory, returns and exchanges are only accepted under the following strict conditions:
            </p>
            <ul style="color: #555; line-height: 1.8; margin-bottom: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;">The timepiece must be entirely unworn, unaltered, and in pristine showroom condition.</li>
                <li style="margin-bottom: 8px;">All original factory seals, protective plastics, and tags must remain completely intact and unremoved.</li>
                <li style="margin-bottom: 8px;">The original presentation box, warranty cards, manuals, and certificates of authenticity must be returned in flawless condition.</li>
            </ul>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">2. The Inspection Process</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Upon receiving a returned item, it will undergo a rigorous micro-inspection by our certified master watchmakers. If the timepiece shows any hairline scratches, signs of wear, or missing components, the return will be rejected and the watch will be sent back to the client.
            </p>

            <p style="color: #555; line-height: 1.8; margin-top: 30px; font-style: italic;">
                Please contact our Concierge Team to initiate a return. We will arrange fully insured, specialized transit for the safe return of the timepiece.
            </p>

            <div style="text-align: center; margin-top: 30px;">
                <button onclick="showMainPage()" style="padding: 12px 30px; background: #3b0066; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: bold; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#5a0099';" onmouseout="this.style.backgroundColor='#3b0066';">← Back to Home</button>
            </div>

        </div>
    </div>



<!-- WARRANTY POLICY -->
    <div id="warranty-page" style="display:none; background:#f5f5f5; min-height:100vh;">

        <header class="main-header" style="justify-content: space-between;">
        <div class="logo">
        <img src="logo.png" class="nav-logo" onclick="showHome()" style="cursor:pointer;">
        </div>

        <nav class="home-nav">
        <a href="javascript:void(0);" onclick="showShop()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Shop</a>
        <a href="javascript:void(0);" onclick="showAbout()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">About</a>
        <a href="javascript:void(0);" onclick="showContact()" style="color:white; margin-right:25px; text-decoration:none; font-weight:bold;">Contact</a>
        </nav>
        </header>

        <div style="max-width:900px; margin:0 auto; background:white; padding:40px; border-radius:6px; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

        <h1 style="color: #3b0066; font-family: 'Playfair Display', serif; margin-bottom: 20px;">Warranty Policy</h1>

            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                At Clock-wise, every timepiece in our collection represents the pinnacle of haute horlogerie and rigorous craftsmanship. To ensure your absolute peace of mind, all watches purchased through our boutique are accompanied by a comprehensive <strong>5-Year International Boutique Warranty</strong>.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">1. What is Covered</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                Our warranty guarantees the flawless mechanical functioning of your watch. For a period of five (5) years from the date of purchase, Clock-wise will repair or replace, free of charge, any component determined to possess a manufacturing defect. This includes issues with the internal movement, hands, and dial markers occurring under normal and intended use.
            </p>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">2. Exclusions & Limitations</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                To maintain the integrity of your timepiece, please note that this warranty does not cover the following:
            </p>
            <ul style="color: #555; line-height: 1.8; margin-bottom: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Normal wear and tear, including scratches or aesthetic degradation to the case, sapphire crystal, bezel, or clasp.</li>
                <li style="margin-bottom: 8px;">The natural aging or wear of non-metal straps (e.g., leather, rubber, or fabric).</li>
                <li style="margin-bottom: 8px;">Water damage resulting from exposing the watch to depths or pressures beyond its official ATM resistance rating, or failing to secure the screw-down crown.</li>
                <li style="margin-bottom: 8px;">Damage caused by severe shock, dropping, negligence, or improper handling.</li>
                <li style="margin-bottom: 8px;">Any intervention, modification, or repair performed by unauthorized third-party technicians.</li>
            </ul>

            <h3 style="color: #3b0066; font-size: 1.2rem; margin-top: 25px; margin-bottom: 10px;">3. Claiming Warranty Service</h3>
            <p style="color: #555; line-height: 1.8; margin-bottom: 15px;">
                To initiate a warranty claim, the timepiece must be presented alongside the original proof of purchase and the stamped authenticity card. Please reach out to our Concierge Team via our Contact page to arrange for a secure, insured courier pickup of your timepiece. 
            </p>

            <p style="color: #555; line-height: 1.8; margin-top: 30px; font-style: italic;">
                Clock-wise reserves the right to make the final determination on all warranty claims after a thorough inspection by our certified master watchmakers.
            </p>

            <div style="text-align: center; margin-top: 30px;">
                <button onclick="showMainPage()" style="padding: 12px 30px; background: #3b0066; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: bold; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#5a0099';" onmouseout="this.style.backgroundColor='#3b0066';">← Back to Home</button>
            </div>

        </div>
    </div>

    <footer class="main-footer">
        <div class="footer-links">
        <a href="#" onclick="showPrivacy(); return false;">Privacy Policy</a>
        <a href="#" onclick="showTerms(); return false;">Terms of Service</a>
        <a href="#" onclick="showReturn(); return false;">Return & Exchange</a>
        <a href="#" onclick="showWarranty(); return false;">Warranty Policy</a>
        </div>

        <div class="footer-container">
            
        <div class="footer-column">
        <div class="footer-center">

        <img src="logo.png" alt="Clock-wise Logo" class="footer-logo">

        <p class="footer-description">
        Where time meets style. Your premium destination for exclusive 
        and luxury timepieces.
        </p>

        </div>
        </div>

        </div>

        <div class="footer-bottom">
        <p>&copy; 2026 Clock-wise Luxury Store. All Rights Reserved.</p>
        </div>
    </footer>

        <div id="toast" class="toast">Message goes here</div>

        <div id="admin-page" style="display: none; background-color: #f8f9fa; min-height: 100vh; font-family: 'Montserrat', sans-serif; padding-bottom: 50px;">

            <header style="display: flex; align-items: center; justify-content: space-between; padding: 15px 40px; background: white; border-bottom: 1px solid #eaeaea; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                <h2 style="margin: 0; color: #3b0066; font-family: 'Cormorant Garamond', serif; font-weight: bold; font-size: 26px; letter-spacing: 1px;">ClockWise <span style="font-weight: 300; color: #888;">| Admin</span></h2>
                
                <div style="display: flex; align-items: center; gap: 20px;">
                    <span style="background: #fdf0c5; color: #b8860b; padding: 6px 16px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 1px;">ADMIN PANEL</span>
                    <button onclick="logout()" style="background: none; border: none; color: #ff4757; font-weight: bold; cursor: pointer; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Log Out</button>
                </div>
            </header>

            <div style="padding: 30px 40px 0; max-width: 1200px; margin: 0 auto;">
                <div style="border-bottom: 2px solid #eaeaea; display: flex; gap: 30px;">
                    <button onclick="switchAdminTab('stock')" id="btn-tab-stock" style="background: none; border: none; color: #3b0066; padding: 10px 0; cursor: pointer; border-bottom: 3px solid #3b0066; font-weight: 700; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Stock Management</button>
                    <button onclick="switchAdminTab('orders')" id="btn-tab-orders" style="background: none; border: none; color: #999; padding: 10px 0; cursor: pointer; border-bottom: 3px solid transparent; font-weight: 700; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Order History</button>
                </div>
            </div>

            <div style="padding: 30px 40px; max-width: 1200px; margin: 0 auto;">
                
                <div id="admin-tab-stock" style="display: block;">
    
                    <h2 style="font-family: 'Cormorant Garamond', serif; color: #3b0066; font-size: 28px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 2px;">Stock Management</h2>
                    <p style="color: #888; font-size: 13px; margin-bottom: 30px;">View and manage inventory levels across all timepieces.</p>

                    <div style="display: flex; gap: 10px; margin-bottom: 25px;">
                        <button onclick="filterAdminStock('Gentlemen')" id="filter-Gentlemen" style="padding: 8px 18px; border-radius: 20px; border: 1px solid #3b0066; background: #3b0066; color: white; cursor: pointer; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; transition: 0.2s;">Gentlemen</button>
                        <button onclick="filterAdminStock('Ladies')" id="filter-Ladies" style="padding: 8px 18px; border-radius: 20px; border: 1px solid #eaeaea; background: white; color: #888; cursor: pointer; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; transition: 0.2s;">Ladies</button>
                        <button onclick="filterAdminStock('New Arrivals')" id="filter-NewArrivals" style="padding: 8px 18px; border-radius: 20px; border: 1px solid #eaeaea; background: white; color: #888; cursor: pointer; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; transition: 0.2s;">New Arrivals</button>
                    </div>

                    <div id="admin-stats-container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;"></div>

                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; background: #fafafa; border-bottom: 1px solid #eee; border-radius: 4px 4px 0 0;">
                        <div style="padding: 15px 25px; color: #888; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;">Timepiece Name</div>
                        <div style="padding: 15px 25px; color: #888; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;">Current Stock</div>
                        <div style="padding: 15px 25px; color: #888; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;">Adjust Stock</div>
                    </div>
                    <div id="admin-stock-list"></div>

                </div> 
                    <div id="admin-stock-list"></div>

                <div id="admin-tab-orders" style="display: none; background: #fdfdfd; min-height: 500px; padding: 30px; border-radius: 12px; border: 1px solid #ddd; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; border-bottom: 2px solid #3b0066; padding-bottom: 15px;">
    
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <h3 style="color: #3b0066; margin: 0; font-family: 'Playfair Display', serif; font-size: 24px;">Order Registry</h3>
                            
                            <div style="font-family: 'Montserrat', sans-serif; font-size: 13px; color: #555; background: #f0f0f5; padding: 6px 16px; border-radius: 20px; border: 1px solid #ddd;">
                                Lifetime Revenue: <strong id="admin-revenue-display" style="color: #28a745; font-size: 15px;">₱0.00</strong>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px; position: relative; max-width: 400px;">
                        <span style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #aaa;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                        <input type="text" id="admin-order-search" placeholder="Search by Order ID or Customer Name..." 
                            style="width: 100%; padding: 12px 15px 12px 40px; border: 1px solid #eee; border-radius: 8px; font-family: 'Montserrat', sans-serif; font-size: 0.8rem; outline: none; transition: 0.3s; background: #fafafa;"
                            onfocus="this.style.borderColor='#3b0066'; this.style.background='#fff'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.05)';"
                            onblur="this.style.borderColor='#eee'; this.style.background='#fafafa'; this.style.boxShadow='none';"
                            oninput="filterOrders()">
                    </div>

                    <div id="admin-order-list" style="min-height: 200px;">
                        <p style="text-align: center; color: #aaa; padding-top: 50px;">Waiting for data...</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="admin-login-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 11000; align-items: center; justify-content: center; backdrop-filter: blur(8px);">
            <div style="background: white; width: 90%; max-width: 350px; padding: 40px; border-radius: 15px; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.5);">
                <div style="font-size: 40px; margin-bottom: 10px;">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 20V12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V20" stroke-width="1.5"></path>
                    <circle cx="12" cy="12.5" r="4.5"></circle>
                    <path d="M12 10.5V12.5L13.5 13.5"></path>
                    <rect x="3" y="20" width="18" height="2" rx="0.5" fill="#3b0066"></rect>
                    </svg>
                </div>
                <h2 style="font-family: 'Playfair Display', serif; color: #3b0066; margin-bottom: 20px; letter-spacing: 2px; text-transform: uppercase; font-size: 20px;"> Administrative Access</h2>
                
                <input type="password" id="admin-secret-pass" placeholder="Enter Access Code" 
                    **onfocus="this.placeholder = ''"** **onblur="this.placeholder = 'Enter Access Code'"**
                    style="width: 100%; padding: 12px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center; font-size: 16px;">
                
                <div style="display: flex; gap: 10px;">
                    <button onclick="closeAdminLogin()" style="flex: 1; padding: 12px; border-radius: 50px; border: 1px solid #ddd; background: white; color: #888; cursor: pointer; font-weight: bold;">BACK</button>
                    <button onclick="checkAdminAccess()" style="flex: 1; padding: 12px; border-radius: 50px; border: none; background: #3b0066; color: white; cursor: pointer; font-weight: bold;">UNLOCK</button>
                </div>
                <p id="admin-error" style="color: #d63031; font-size: 12px; margin-top: 15px; display: none;">Invalid Access Code</p>
            </div>
        </div>

        </div> <div id="confirm-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10000; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
            <div style="background: white; width: 90%; max-width: 400px; padding: 40px; border-radius: 15px; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.4); border: 1px solid #eee;">
                <div style="margin-bottom: 25px; display: flex; justify-content: center; opacity: 0.6;">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </div>
                <h2 style="font-family: 'Playfair Display', serif; color: #3b0066; margin-bottom: 10px; font-size: 24px;">Clear History?</h2>
                <p style="color: #666; font-size: 14px; margin-bottom: 30px; line-height: 1.6;">You are about to delete all transaction records. This action is permanent and cannot be undone.</p>
                
                <div style="display: flex; gap: 12px;">
                    <button onclick="closeConfirmModal()" style="flex: 1; padding: 12px; border-radius: 50px; border: 1px solid #ddd; background: #f9f9f9; color: #666; cursor: pointer; font-weight: bold; font-size: 12px; transition: 0.3s;">CANCEL</button>
                    <button onclick="executeClearHistory()" style="flex: 1; padding: 12px; border-radius: 50px; border: none; background: #3b0066; color: white; cursor: pointer; font-weight: bold; font-size: 12px; transition: 0.3s;">YES, DELETE</button>
                </div>
            </div>
        </div>

        <div id="release-confirm-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 0, 20, 0.92); backdrop-filter: blur(16px); z-index: 99999; align-items: center; justify-content: center;">
            <div class="release-modal-box" style="background: white; width: 90%; max-width: 440px; border-radius: 4px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.6);">
                
                <div style="height: 4px; background: linear-gradient(90deg, #3b0066, #7e57c2, #b39ddb, #7e57c2, #3b0066);"></div>
                
                <div style="padding: 50px 45px; text-align: center;">
                    
                    <div style="margin-bottom: 25px; display: flex; justify-content: center;">
                        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                            <line x1="6" y1="1" x2="6" y2="4"></line>
                            <line x1="10" y1="1" x2="10" y2="4"></line>
                            <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                    </div>
        
                    <p style="font-family: 'Montserrat', sans-serif; font-size: 0.6rem; letter-spacing: 4px; text-transform: uppercase; color: #3b0066; margin-bottom: 15px;">Clockwise Boutique</p>
        
                    <h2 style="font-family: 'Cormorant Garamond', serif; color: #2e004f; font-size: 1.7rem; font-weight: 400; margin: 0 0 15px; letter-spacing: 1px; line-height: 1.3;">Release This Allocation?</h2>
                    
                    <div style="width: 40px; height: 1px; background: #7e57c2; margin: 0 auto 20px;"></div>
                    
                    <p style="font-family: 'Montserrat', sans-serif; color: #666; font-size: 0.8rem; line-height: 1.8; margin-bottom: 35px; letter-spacing: 0.5px;">
                        Are you certain you wish to release this acquisition back to our vault? You will have <strong style="color: #2e004f;">20 seconds</strong> to reverse this decision.
                    </p>
        
                    <div style="display: flex; gap: 12px;">
                        <button onclick="closeReleaseModal()" style="flex: 1; padding: 14px; background: white; border: 1px solid #ddd; color: #888; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: 0.3s;" onmouseover="this.style.borderColor='#999'; this.style.color='#333';" onmouseout="this.style.borderColor='#ddd'; this.style.color='#888';">
                            Retain Piece
                        </button>
                        <button id="release-confirm-btn" onclick="confirmRelease()" style="flex: 1; padding: 14px; background: #7e57c2; border: none; color: white; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: 0.3s; font-weight: 600;" onmouseover="this.style.background='#2e004f';" onmouseout="this.style.background='#1a0030';">
                            Release Allocation
                        </button>
                    </div>
                </div>
        
                <div style="height: 2px; background: linear-gradient(90deg, transparent, #7e57c2, transparent);"></div>
            </div>
        </div>

        <div id="date-tester" style="display:none; position:fixed; bottom:20px; right:20px; background:#2e004f; color:white; padding:15px 20px; border-radius:10px; z-index:99999; font-family:'Montserrat',sans-serif; font-size:0.75rem; box-shadow:0 5px 20px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div style="letter-spacing:2px; opacity:0.7; font-weight:600;">TEST DATE</div>
                <button onclick="closeTester()" style="background:transparent; color:#bbb; border:none; cursor:pointer; font-size:1.2rem; padding:0; line-height:1; transition:0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#bbb'">
                    &times;
                </button>
            </div>
            <div style="display:flex; gap:8px;">
                <input type="date" id="test-date-input" style="background:#3b0066; color:white; border:1px solid #7e57c2; padding:6px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer;">
                <button onclick="applyTestDate()" style="background:#7e57c2; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-size:0.75rem; transition:0.3s;" onmouseover="this.style.background='#8e67d2'" onmouseout="this.style.background='#7e57c2'">Apply</button>
                <button onclick="clearTestDate()" style="background:transparent; color:#bbb; border:1px solid #555; padding:6px 12px; border-radius:4px; cursor:pointer; font-size:0.75rem; transition:0.3s;" onmouseover="this.style.color='white'; this.style.borderColor='#888'" onmouseout="this.style.color='#bbb'; this.style.borderColor='#555'">Reset</button>
            </div>
        </div>


    <script src="animations.js"></script>
    <script src="modal-functions.js"></script>
    <script src="script.js"></script>
</body>
</html>
