// ============================================================
// MODAL IMAGE SLIDER FUNCTIONS
// ============================================================
let currentModalImageIndex = 0;
let modalImages = [];

function setupModalSlider(data) {
    // Collect all available images
    modalImages = [data.image_main];
    if (data.image_2) modalImages.push(data.image_2);
    if (data.image_3) modalImages.push(data.image_3);
    if (data.image_4) modalImages.push(data.image_4);
    
    currentModalImageIndex = 0;
    
    // Show/hide navigation arrows based on image count
    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');
    
    if (modalImages.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    
    // Setup thumbnails
    setupThumbnails();
    
    // Set main image
    updateModalImage();
}

function setupThumbnails() {
    const thumbnailContainer = document.getElementById('modal-thumbnails');
    thumbnailContainer.innerHTML = '';
    
    modalImages.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.style.cssText = `
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 4px;
            cursor: pointer;
            border: 2px solid ${index === currentModalImageIndex ? '#2e004f' : '#ddd'};
            transition: border-color 0.3s ease;
        `;
        
        thumb.onclick = () => {
            currentModalImageIndex = index;
            updateModalImage();
            updateThumbnailStyles();
        };
        
        thumbnailContainer.appendChild(thumb);
    });
}

function updateThumbnailStyles() {
    const thumbnails = document.querySelectorAll('#modal-thumbnails img');
    thumbnails.forEach((thumb, index) => {
        thumb.style.borderColor = index === currentModalImageIndex ? '#2e004f' : '#ddd';
    });
}

function changeModalImage(direction) {
    currentModalImageIndex += direction;
    
    // Wrap around
    if (currentModalImageIndex < 0) {
        currentModalImageIndex = modalImages.length - 1;
    } else if (currentModalImageIndex >= modalImages.length) {
        currentModalImageIndex = 0;
    }
    
    updateModalImage();
    updateThumbnailStyles();
}

function updateModalImage() {
    const mainImage = document.getElementById('modal-main-image');
    if (mainImage && modalImages[currentModalImageIndex]) {
        mainImage.src = modalImages[currentModalImageIndex];
    }
}

// ============================================================
// STOCK INDICATOR FUNCTION
// ============================================================
function updateStockIndicator(stock) {
    const stockBadge = document.getElementById('stock-badge');
    if (!stockBadge) return;
    
    const stockNum = parseInt(stock) || 0;
    
    if (stockNum > 0) {
        stockBadge.textContent = `In Stock: ${stockNum}`;
        stockBadge.style.cssText = `
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            background-color: #4caf50;
            color: white;
        `;
    } else {
        stockBadge.textContent = 'Out of Stock';
        stockBadge.style.cssText = `
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            background-color: #f44336;
            color: white;
        `;
    }
}
