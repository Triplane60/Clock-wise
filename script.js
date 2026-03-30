let watchData = {};
let cart = [];
let isLoggedIn = false;
let currentCategory = 'all';
let releaseTimers = {};

// ============================================================
// ANIMATION FUNCTIONS
// ============================================================
async function loadWatchDataFromDB() {
    try {
        const res  = await fetch('get_all_watches.php');
        const responseText = await res.text();
        
        // Debug: log the raw response
        console.log('Raw response from get_all_watches.php:', responseText);
        
        // Check if response starts with HTML error tags
        if (responseText.trim().startsWith('<')) {
            console.error('Server returned HTML instead of JSON. Response:', responseText);
            showNotification('Server error: Invalid response format');
            return;
        }
        
        const data = JSON.parse(responseText);
        if (data.success) {
            Object.keys(data.watches).forEach(name => {
                watchData[name] = data.watches[name];
            });
        }
    } catch (e) {
        console.error('Failed to load watch data:', e);
        showNotification('Error loading product data. Please refresh the page.');
    }
}
// ============================================================
// 3. REGISTER — Replace handleRegister()
// ============================================================
async function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value;
    const confirm  = document.getElementById("reg-confirm-password").value;

    if (username === "") { showNotification("Please enter a username!"); return; }
    if (password.length < 8 || !/[a-zA-Z]/.test(password)) {
        showNotification("Password must be at least 8 characters and contain a letter!");
        return;
    }
    if (password !== confirm) { showNotification("Passwords do not match!"); return; }

    const formData = new FormData();
    formData.append('action', 'register');
    formData.append('username', username);
    formData.append('password', password);

    try {
        const res  = await fetch('auth.php', { method: 'POST', body: formData });
        const data = await res.json();

        if (data.success) {
            isLoggedIn = true;
            document.getElementById('nav-portfolio-link').style.display = 'inline-block';
            const userDisplay = document.getElementById("user-display");
            if (userDisplay) userDisplay.innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; letter-spacing: 1px; font-size: 0.85rem;">${data.username}</span>`;
            document.getElementById("reg-username").value = "";
            document.getElementById("reg-password").value = "";
            document.getElementById("reg-confirm-password").value = "";
            closeLogin();
            showNotification("Account created! Welcome, " + data.username + "!");
        } else {
            showNotification(data.message || "Registration failed.");
        }
    } catch (e) {
        showNotification("Server error. Please try again.");
    }
}

// ============================================================
// 4. LOGIN — Replace handleAuth()
// ============================================================
async function handleAuth(event) {
    if (event) event.preventDefault();

    const user = document.getElementById("auth-username").value;
    const pass = document.getElementById("auth-password").value;

    if (!user || !pass) { showNotification("Please enter both username and password!"); return; }

    const formData = new FormData();
    formData.append('action', 'login');
    formData.append('username', user);
    formData.append('password', pass);

    try {
        const res  = await fetch('auth.php', { method: 'POST', body: formData });
        const data = await res.json();

        if (data.success) {
            isLoggedIn = true;
            document.getElementById('nav-portfolio-link').style.display = 'inline-block';
            const userDisplay = document.getElementById("user-display");
            if (userDisplay) userDisplay.innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; letter-spacing: 1px; font-size: 0.85rem;">${data.username}</span>`;
            document.getElementById("auth-username").value = "";
            document.getElementById("auth-password").value = "";
            closeLogin();
            renderCartItems();
            updateCartDisplay();
            showShop();
            showNotification(`Welcome back, ${data.username.toLowerCase()}!`);
        } else {
            showNotification(data.message || "Invalid username or password!");
        }
    } catch (e) {
        showNotification("Server error. Please try again.");
    }
}

// ============================================================
// 5. LOGOUT — Replace executeLogout()
// ============================================================
async function executeLogout() {
    try {
        await fetch('auth.php?action=logout');
    } catch (e) {}

    isLoggedIn = false;
    document.getElementById('nav-portfolio-link').style.display = 'none';
    document.getElementById("user-display").innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;">Login</span>`;
    document.getElementById("logout-confirm-modal").style.display = "none";
    document.getElementById("auth-username").value = "";
    document.getElementById("auth-password").value = "";
    showNotification("Logged out successfully!");
    cart = [];
    renderCartItems();
    updateCartDisplay();
    showHome();
}

// ============================================================
// 6. RESET PASSWORD — Replace saveNewPassword()
// ============================================================
async function saveNewPassword() {
    const username    = document.getElementById("reset-username").value.trim();
    const newPassword = document.getElementById("reset-new-password").value;
    const confirm     = document.getElementById("reset-confirm-password").value;

    if (!username) { showNotification("Please enter a username!"); return; }
    if (newPassword.length < 8 || newPassword.length > 10) {
        showNotification("Password must be between 8 and 10 characters!");
        return;
    }
    if (newPassword !== confirm) { showNotification("Passwords do not match!"); return; }

    const formData = new FormData();
    formData.append('action', 'reset_password');
    formData.append('username', username);
    formData.append('new_password', newPassword);
    formData.append('confirm_password', confirm);

    try {
        const res  = await fetch('auth.php', { method: 'POST', body: formData });
        const data = await res.json();

        if (data.success) {
            closeResetModal();
            showNotification("Password updated! Please log in.");
            openLoginModal();
        } else {
            showNotification(data.message || "Reset failed.");
        }
    } catch (e) {
        showNotification("Server error. Please try again.");
    }
}

// ============================================================
// 7. PLACE ORDER — Replace placeShopeeOrder()
// ============================================================
async function placeShopeeOrder(event) {
    if (event) event.preventDefault();

    const nameBox    = document.getElementById('checkout-name-input');
    const addressBox = document.getElementById('checkout-address-input');
    const contactBox = document.getElementById('checkout-contact-input');
    const grandTotal = document.getElementById('checkout-grand-total').innerText;
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');

    nameBox.style.border    = "1px solid #ccc";
    addressBox.style.border = "1px solid #ccc";
    if (contactBox) contactBox.style.border = "1px solid #ddd";

    const rawName    = nameBox.value.trim();
    const rawAddress = addressBox.value.trim();
    const rawContact = contactBox ? contactBox.value.trim() : '';

    if (!selectedPayment) { showNotification("Please select a payment method!"); return; }
    if (rawName === "" || /\d/.test(rawName) || !rawName.includes(' ')) {
        showNotification("Please enter your full First and Last Name.");
        nameBox.style.border = "2px solid #ff4757";
        return;
    }
    if (rawAddress.length < 10) {
        showNotification("Please enter a complete delivery address.");
        addressBox.style.border = "2px solid #ff4757";
        return;
    }
    const digitOnly = rawContact.replace(/\D/g, '');
    if (digitOnly.length < 11) {
        showNotification("Please enter a valid 11-digit contact number.");
        if (contactBox) { contactBox.style.border = "2px solid #ff4757"; contactBox.focus(); }
        return;
    }

    const arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + 4);
    const formattedArrival = arrivalDate.toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' });

    const orderId = 'CW-' + Date.now().toString().slice(-6);
    const checkedBoxes = document.querySelectorAll('.cart-item-chk:checked');

    const order = {
        id:            orderId,
        date:          new Date().toLocaleString(),
        arrivalDate:   formattedArrival,
        customer:      rawName,
        address:       rawAddress,
        contact:       rawContact,
        paymentMethod: selectedPayment.value,
        items:         Array.from(checkedBoxes).map(box => {
                           const item = cart[parseInt(box.value)];
                           return { name: item.name, quantity: item.quantity, price: item.price };
                       }),
        total:         grandTotal
    };

    try {
        const res  = await fetch('orders.php', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ action: 'place_order', ...order })
        });
        const data = await res.json();

        if (!data.success) {
            showNotification("Order failed: " + (data.message || "Unknown error"));
            return;
        }
    } catch (e) {
        showNotification("Server error. Please try again.");
        return;
    }

    // Update local watchData stock
    checkedBoxes.forEach(box => {
        const item = cart[parseInt(box.value)];
        if (item && watchData[item.name]) {
            watchData[item.name].stock -= item.quantity;
        }
    });

    // Build receipt HTML
    let itemsHTML = `<div style="margin: 20px 0; border-top: 1px solid #eee; padding-top: 15px;"><h4 style="margin-bottom: 15px; color: #2e004f; text-align: left;">Order Summary:</h4>`;
    checkedBoxes.forEach(box => {
        const item  = cart[parseInt(box.value)];
        const watch = watchData[item.name];
        if (watch) {
            itemsHTML += `
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                    <img src="${watch.images[0]}" style="width: 60px; height: 60px; object-fit: contain; background: #f9f9f9; border-radius: 6px; border: 1px solid #eee;">
                    <div style="text-align: left;">
                        <p style="margin: 0; font-weight: bold; font-size: 0.95rem;">${item.name}</p>
                        <p style="margin: 0; font-size: 0.75rem; color: #888;">${watch.specs || ''}</p>
                        <p style="margin: 2px 0 0 0; color: #666; font-size: 0.8rem;">Qty: ${item.quantity}</p>
                    </div>
                </div>`;
        }
    });
    itemsHTML += `</div>`;

    const receiptDetails = document.getElementById('receipt-details');
    if (receiptDetails) {
        receiptDetails.innerHTML = `
            <div style="border-left: 4px solid #2e004f; padding-left: 15px; margin-bottom: 20px; text-align: left;">
                <p style="margin: 5px 0;"><strong>Customer:</strong> ${rawName}</p>
                <p style="margin: 5px 0;"><strong>Shipping To:</strong> ${rawAddress}</p>
                <p style="margin: 5px 0;"><strong>Contact Number:</strong> ${rawContact}</p>
                <p style="margin: 5px 0;"><strong>Payment:</strong> ${selectedPayment.value}</p>
                <p style="margin: 5px 0;"><strong>Amount To Pay:</strong> <span style="color: #4CAF50; font-weight: bold;">${grandTotal}</span></p>
                <p style="margin: 5px 0;"><strong>Estimated Arrival:</strong> ${formattedArrival}</p>
            </div>
            ${itemsHTML}
            <p style="font-size: 0.75rem; color: #aaa; text-align: center; margin-top: 20px;">Transaction ID: #${orderId}</p>
        `;
    }

    nameBox.value = "";
    addressBox.value = "";
    if (contactBox) contactBox.value = "";

    const indicesToRemove = Array.from(checkedBoxes).map(b => parseInt(b.value));
    indicesToRemove.sort((a, b) => b - a).forEach(idx => cart.splice(idx, 1));

    updateCartDisplay();
    renderCartItems();
    navigateTo('receipt-page');
    window.scrollTo(0, 0);
}

// ============================================================
// 8. SHOW MY ORDERS — Fetch from DB instead of localStorage
// ============================================================
async function showMyOrders() {
    navigateTo('my-orders-page', 'static-header');
    const orderList = document.getElementById('my-orders-list');
    if (!orderList) return;
    orderList.innerHTML = `<p style="text-align:center; color:#888; padding: 40px;">Loading your portfolio...</p>`;

    try {
        const res  = await fetch('orders.php?action=get_customer_orders');
        const data = await res.json();

        if (!data.success) {
            orderList.innerHTML = `<p style="text-align:center; color:#888;">Could not load orders.</p>`;
            return;
        }

        // Sort: active first, delivered second, released last
        const allOrders = data.orders.sort((a, b) => {
            const weight = { 'active': 1, 'pending-release': 1, 'delivered': 2, 'released': 3 };
            return (weight[a.status || 'active'] || 1) - (weight[b.status || 'active'] || 1);
        });

        renderPortfolioOrders(allOrders);
    } catch (e) {
        orderList.innerHTML = `<p style="text-align:center; color:#888;">Server error. Please try again.</p>`;
    }
}

// ============================================================
// 9. UPDATE ORDER STATUS (release, deliver, undo)
// ============================================================
async function updateOrderStatus(orderId, status) {
    try {
        const res = await fetch('orders.php', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ action: 'update_status', order_id: orderId, status: status })
        });
        const data = await res.json();
        return data.success;
    } catch (e) {
        return false;
    }
}

async function finalizeRelease(orderId) {
    if (releaseTimers[orderId]) {
        clearInterval(releaseTimers[orderId]);
        delete releaseTimers[orderId];
    }
    const ok = await updateOrderStatus(orderId, 'released');
    if (ok) {
        showNotification("Allocation released. The timepiece has returned to the vault.");
        showMyOrders();
        if (document.getElementById('admin-page')?.style.display !== 'none') {
            loadAdminDashboard();
        }
    }
}

async function undoRelease(orderId) {
    if (releaseTimers[orderId]) {
        clearInterval(releaseTimers[orderId]);
        delete releaseTimers[orderId];
    }
    const ok = await updateOrderStatus(orderId, 'active');
    if (ok) {
        showMyOrders();
        showNotification("Allocation retained. Your timepiece remains reserved. ✦");
    }
}

async function markOrderDelivered(orderId) {
    const ok = await updateOrderStatus(orderId, 'delivered');
    if (ok) {
        showNotification("Order marked as Received!");
        showMyOrders();
    }
}


// ============================================================
// 10. DELETE SINGLE ORDER
// ============================================================
async function deleteSingleOrder(orderId) {
    try {
        await fetch('orders.php', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ action: 'delete_order', order_id: orderId })
        });
    } catch (e) {}
    showMyOrders();
    showNotification("Order removed from registry.");
}

async function adminRemoveOrder(orderId) {
    try {
        await fetch('orders.php', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ action: 'delete_order', order_id: orderId })
        });
    } catch (e) {}
    loadAdminDashboard();
    showNotification("Order removed from registry.");
}

// ============================================================
// 11. ADMIN DASHBOARD — Fetch orders from DB
// ============================================================
async function loadAdminDashboard() {
    // ... keep all your stock management code exactly as is ...
    // Only replace the ORDERS section at the bottom:

    const orderList = document.getElementById('admin-order-list');
    if (!orderList) return;

    try {
        const res  = await fetch('orders.php?action=get_admin_orders');
        const data = await res.json();
        const orders = data.orders || [];

        if (orders.length === 0) {
            const revenueDisplay = document.getElementById('admin-revenue-display');
            if (revenueDisplay) revenueDisplay.innerText = '₱0.00';
            orderList.innerHTML = `
                <div class="admin-empty-state" style="text-align: center; padding: 80px 20px;">
                    <h3 style="color: #3b0066; font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 400; letter-spacing: 2px;">Your Registry is Quiet</h3>
                    <p style="color: #888; font-size: 0.85rem;">No transactions have been recorded yet.</p>
                </div>`;
            return;
        }

        const pesoFormat = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' });

        const adminGrandTotal = orders.reduce((sum, order) => {
            if (order.status === 'released') return sum;
            const val = parseFloat(String(order.total).replace(/[^0-9.-]+/g, '')) || 0;
            return sum + val;
        }, 0);

        const revenueDisplay = document.getElementById('admin-revenue-display');
        if (revenueDisplay) revenueDisplay.innerText = pesoFormat.format(adminGrandTotal);

        // Render order cards — same HTML as your current loadAdminDashboard
        // (keep your existing htmlContent template, nothing changes there)

    } catch (e) {
        orderList.innerHTML = `<p style="text-align:center; color:#888;">Server error loading orders.</p>`;
    }
}

// ============================================================
// 12. ADMIN CLEAR ALL RECORDS
// ============================================================
async function executeClearHistory() {
    try {
        await fetch('orders.php', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ action: 'clear_admin_orders' })
        });
    } catch (e) {}
    closeConfirmModal();
    setTimeout(() => {
        loadAdminDashboard();
        showNotification('Database wiped successfully.');
    }, 400);
}

// ============================================================
// 13. UPDATE ADMIN STOCK — Replace updateAdminStock()
// ============================================================
async function updateAdminStock(watchName) {
    let safeID = watchName.replace(/[^a-zA-Z0-9]/g, '-');
    let inputField = document.getElementById(`admin-input-${safeID}`);
    if (!inputField) return;

    let newStockValue = parseInt(inputField.value);
    if (isNaN(newStockValue) || newStockValue < 0) {
        showNotification("Please enter a valid stock number!");
        return;
    }

    try {
        const res = await fetch('stock.php', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ action: 'update_stock', name: watchName, stock: newStockValue })
        });
        const data = await res.json();

        if (data.success) {
            watchData[watchName].stock = newStockValue;
            loadAdminDashboard();
            showNotification(`${watchName} stock updated to ${newStockValue}!`);
        } else {
            showNotification("Stock update failed.");
        }
    } catch (e) {
        showNotification("Server error.");
    }
}

// ============================================================
// 14. CONFIRM SECURE CLEAR (Customer portfolio)
// ============================================================
async function confirmSecureClear() {
    try {
        const res    = await fetch('orders.php?action=get_customer_orders');
        const data   = await res.json();
        const orders = data.orders || [];

        const released = orders.filter(o => o.status === 'released');
        const active   = orders.filter(o => o.status !== 'released');

        if (released.length === 0) {
            closeSecureModal();
            showNotification("No released allocations to clear. ✦");
            return;
        }

        // Delete only released orders
        for (const order of released) {
            await fetch('orders.php', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify({ action: 'delete_order', order_id: order.id })
            });
        }

        closeSecureModal();
        setTimeout(() => {
            showMyOrders();
            if (active.length > 0) {
                showNotification(`${active.length} active order(s) retained. Released allocations cleared.`);
            } else {
                showNotification("Released allocations have been securely wiped.");
            }
        }, 400);


function filterCategory(category) {
    currentCategory = category;

    const watchGrid = document.querySelector('.content-area');
    if (watchGrid) {
        // Remove active class first
        watchGrid.classList.remove('category-fade-in', 'active');
        
        // Use requestAnimationFrame for smooth transition
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                watchGrid.classList.add('category-fade-in', 'active');
            });
        });
    }

    document.querySelectorAll('.nav-item').forEach(function(btn) {
        btn.classList.remove('active');
        const onclickVal = btn.getAttribute('onclick') || '';
        if (onclickVal.includes("'" + category + "'")) {
            btn.classList.add('active');
        }
    });

    searchWatches();
}

function searchWatches() {
    const searchBox = document.getElementById('search-input');
    const query = searchBox ? searchBox.value.toLowerCase() : '';
    const watches = document.querySelectorAll('.watch-card');

    watches.forEach(function(watch) {
        const matchesText     = watch.innerText.toLowerCase().includes(query);
        const matchesCategory = currentCategory === 'all' || watch.classList.contains(currentCategory);
        watch.style.display   = (matchesText && matchesCategory) ? 'flex' : 'none';
    });
}

// ============================================================
// openDetails() — use data attributes instead of AJAX
// ============================================================
function openDetails(watchName) {
    // Find the button with this watch name to get data attributes
    const button = document.querySelector(`.details-btn[data-name="${watchName}"]`);
    if (!button) {
        console.error('Button not found for watch:', watchName);
        return;
    }
    
    // Get all data attributes from the button
    const data = {
        name: button.getAttribute('data-name'),
        brand: button.getAttribute('data-brand') || 'Unknown',
        stock: parseInt(button.getAttribute('data-stock')) || 10,
        price: parseFloat(button.getAttribute('data-price')) || 0,
        description: button.getAttribute('data-description') || 'Description not available.',
        image_main: button.getAttribute('data-image-main') || '',
        image_2: button.getAttribute('data-image-2') || '',
        image_3: button.getAttribute('data-image-3') || '',
        image_4: button.getAttribute('data-image-4') || ''
    };
    
    // Update watchData for cart functionality
    watchData[watchName] = {
        price: data.price,
        stock: data.stock,
        brand: data.brand,
        images: [data.image_main, data.image_2, data.image_3, data.image_4].filter(Boolean)
    };
    
    // Update modal fields
    document.getElementById('modal-brand').innerText = data.brand;
    document.getElementById('modal-title').innerText = data.name;
    document.getElementById('modal-desc').innerText = data.description;
    document.getElementById('modal-price').innerText = '₱' + data.price.toLocaleString('en-US', { minimumFractionDigits: 2 });
    
    // Setup image slider
    setupModalSlider(data);
    
    // Update stock indicator
    updateStockIndicator(data.stock);
    
    // Set add button onclick
    const addBtn = document.querySelector('#details-modal .add-btn');
    if (addBtn) {
        addBtn.onclick = () => addToCart(data.name);
    }
    
    // Show modal with fade-in
    const modal = document.getElementById('details-modal');
    modal.style.display = 'flex';
    modal.classList.add('modal-fade-in');
    
    // Remove fade-in class after animation
    setTimeout(() => {
        modal.classList.remove('modal-fade-in');
    }, 300);
}

// ============================================================
// addToCart() — works with DB data passed from openDetails
// ============================================================
function addToCart(watchName, price, stock) {
    if (!isLoggedIn) {
        showNotification("Please login first to add items to your cart!");
        openLoginModal();
        return;
    }

    if (price === undefined && watchData[watchName]) {
        price = watchData[watchName].price;
        stock = watchData[watchName].stock;
    }

    if (!price) { showNotification("Could not add item."); return; }
    if (stock <= 0) { showNotification("Sorry! " + watchName + " is sold out."); return; }

    const existingIndex = cart.findIndex(item => item.name === watchName);

    if (existingIndex > -1) {
        if (cart[existingIndex].quantity >= stock) {
            showNotification("Limit reached! Only " + stock + " in stock.");
            return;
        }
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ name: watchName, price: price, quantity: 1 });
    }

    updateCartDisplay();
    renderCartItems();
    showNotification(watchName + " added to cart!");
}

function closeDetails() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        // Start fade-out transition
        modal.classList.remove('modal-fade-in');
        modal.classList.add('modal-fade-out');
        
        // Wait for transition to complete before hiding
        const handleTransitionEnd = (e) => {
            if (e.target === modal && e.propertyName === 'opacity') {
                modal.style.display = 'none';
                modal.classList.remove('modal-fade-out');
                modal.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
        
        // Fallback timeout in case transitionend doesn't fire
        const fallbackTimeout = setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('modal-fade-out');
            modal.removeEventListener('transitionend', handleTransitionEnd);
        }, 300);
        
        // Listen for transition end
        modal.addEventListener('transitionend', handleTransitionEnd);
        
        // Clear fallback if transition ends successfully
        modal.addEventListener('transitionend', () => {
            clearTimeout(fallbackTimeout);
        }, { once: true });
    }
}

function _showShop() {
    console.log("_showShop called");
    console.log("homepage element:", document.getElementById('homepage'));
    if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
    if (document.getElementById('about-page')) document.getElementById('about-page').style.display = 'none';
    if (document.getElementById('contact-page')) document.getElementById('contact-page').style.display = 'none';
    if (document.getElementById('cart-page')) document.getElementById('cart-page').style.display = 'none';
    if (document.getElementById('my-orders-page')) document.getElementById('my-orders-page').style.display = 'none';
    if (document.getElementById('privacy-page')) document.getElementById('privacy-page').style.display = 'none';
    if (document.getElementById('terms-page')) document.getElementById('terms-page').style.display = 'none';
    if (document.getElementById('return-page')) document.getElementById('return-page').style.display = 'none';
    if (document.getElementById('warranty-page')) document.getElementById('warranty-page').style.display = 'none';
    
    const shopPage = document.getElementById('shop-page');
    if (shopPage) shopPage.style.display = 'block';
    window.scrollTo(0, 0);
}

function showShop() {
    _showShop();
    
    // Trigger shop fade-in animation
    setTimeout(() => {
        if (window.triggerShopFadeIn) {
            window.triggerShopFadeIn();
        }
    }, 100);
}

function showHome() {
    if (document.getElementById('shop-page')) document.getElementById('shop-page').style.display = 'none';
    if (document.getElementById('about-page')) document.getElementById('about-page').style.display = 'none';
    if (document.getElementById('contact-page')) document.getElementById('contact-page').style.display = 'none';
    if (document.getElementById('cart-page')) document.getElementById('cart-page').style.display = 'none';
    
    const homePage = document.getElementById('homepage');
    if (homePage) homePage.style.display = 'block';
    window.scrollTo(0, 0);
}

function showAbout() {
    if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
    if (document.getElementById('shop-page')) document.getElementById('shop-page').style.display = 'none';
    if (document.getElementById('contact-page')) document.getElementById('contact-page').style.display = 'none';
    
    const aboutPage = document.getElementById('about-page');
    if (aboutPage) aboutPage.style.display = 'block';
    window.scrollTo(0, 0);
}

function showContact() {
    if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
    if (document.getElementById('shop-page')) document.getElementById('shop-page').style.display = 'none';
    if (document.getElementById('about-page')) document.getElementById('about-page').style.display = 'none';
    
    const contactPage = document.getElementById('contact-page');
    if (contactPage) contactPage.style.display = 'block';
    window.scrollTo(0, 0);
}

function navigateTo(pageId, bodyClass) {
    // Hide main pages
    if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
    if (document.getElementById('shop-page')) document.getElementById('shop-page').style.display = 'none';
    if (document.getElementById('about-page')) document.getElementById('about-page').style.display = 'none';
    if (document.getElementById('contact-page')) document.getElementById('contact-page').style.display = 'none';
    if (document.getElementById('cart-page')) document.getElementById('cart-page').style.display = 'none';
    if (document.getElementById('my-orders-page')) document.getElementById('my-orders-page').style.display = 'none';

    // Show target page
    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';
    
    window.scrollTo(0, 0);
}

function showShopWithCategory(category) {
    showShop();
    setTimeout(function() { filterCategory(category); }, 50);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// GLOBAL CLICK LISTENER (For dynamically loaded buttons)
// ============================================================
document.addEventListener('click', function(e) {
    const detailsTrigger = e.target.closest('.details-btn, .image-placeholder');
    if (detailsTrigger && detailsTrigger.hasAttribute('data-name')) {
        const watchName = detailsTrigger.getAttribute('data-name');
        openDetails(watchName);
        return;
    }

    const addBtn = e.target.closest('.add-btn');
    if (addBtn && addBtn.hasAttribute('data-name') && !addBtn.closest('#details-modal')) {
        const watchName = addBtn.getAttribute('data-name');
        const watchPrice = parseFloat(addBtn.getAttribute('data-price'));
        const watchStock = parseInt(addBtn.getAttribute('data-stock'));
        
        addToCart(watchName, watchPrice, watchStock);
        return;
    }
});

// ============================================================
// UI & NOTIFICATION FUNCTIONS
// ============================================================
function showNotification(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerText = message;
        toast.className = "toast show";
        // Hide after 3 seconds
        setTimeout(function() { 
            toast.className = toast.className.replace("show", ""); 
        }, 3000);
    } else {
        // Fallback just in case the toast HTML is missing
        alert(message); 
    }
}

function openLoginModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        loginModal.style.display = 'flex'; 
    }
}

function closeLogin() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        loginModal.style.display = 'none';
    }
}

// ============================================================
// FOOTER LINK FUNCTIONS
// ============================================================
function showPrivacy() {
    // Hide all main content
    const mainContent = document.querySelector('.hero-banner-fade, .content-area');
    if (mainContent) mainContent.style.display = 'none';
    
    // Hide other pages
    document.getElementById('terms-page').style.display = 'none';
    document.getElementById('return-page').style.display = 'none';
    document.getElementById('warranty-page').style.display = 'none';
    
    // Show privacy page
    document.getElementById('privacy-page').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showTerms() {
    // Hide all main content
    const mainContent = document.querySelector('.hero-banner-fade, .content-area');
    if (mainContent) mainContent.style.display = 'none';
    
    // Hide other pages
    document.getElementById('privacy-page').style.display = 'none';
    document.getElementById('return-page').style.display = 'none';
    document.getElementById('warranty-page').style.display = 'none';
    
    // Show terms page
    document.getElementById('terms-page').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showReturn() {
    // Hide all main content
    const mainContent = document.querySelector('.hero-banner-fade, .content-area');
    if (mainContent) mainContent.style.display = 'none';
    
    // Hide other pages
    document.getElementById('privacy-page').style.display = 'none';
    document.getElementById('terms-page').style.display = 'none';
    document.getElementById('warranty-page').style.display = 'none';
    
    // Show return page
    document.getElementById('return-page').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showWarranty() {
    // Hide all main content
    const mainContent = document.querySelector('.hero-banner-fade, .content-area');
    if (mainContent) mainContent.style.display = 'none';
    
    // Hide other pages
    document.getElementById('privacy-page').style.display = 'none';
    document.getElementById('terms-page').style.display = 'none';
    document.getElementById('return-page').style.display = 'none';
    
    // Show warranty page
    document.getElementById('warranty-page').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Function to return to main page from any policy page
function showMainPage() {
    // Hide all policy pages
    document.getElementById('privacy-page').style.display = 'none';
    document.getElementById('terms-page').style.display = 'none';
    document.getElementById('return-page').style.display = 'none';
    document.getElementById('warranty-page').style.display = 'none';
    
    // Show main content
    const mainContent = document.querySelector('.hero-banner-fade, .content-area');
    if (mainContent) mainContent.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}