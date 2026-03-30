// ============================================================
// ANIMATION FUNCTIONS
// ============================================================

// Hero Banner Fade Animation
let currentSlide = 0;
let fadeInterval;

function startFadeAnimation() {
    const slides = document.querySelectorAll('.fade-slide');
    if (slides.length === 0) return;
    
    // Clear any existing interval
    if (fadeInterval) {
        clearInterval(fadeInterval);
    }
    
    fadeInterval = setInterval(() => {
        slides[currentSlide].classList.remove('active-slide');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active-slide');
    }, 4000); // Change slide every 4 seconds
}

function stopFadeAnimation() {
    if (fadeInterval) {
        clearInterval(fadeInterval);
        fadeInterval = null;
    }
}

// TikTok-style Pill Carousel Animation
let pillPosition = 0;
let pillInterval;
let pillDirection = 1; // 1 for right, -1 for left

function startPillAnimation() {
    const pillTrack = document.getElementById('pill-track');
    if (!pillTrack) return;
    
    // Clear any existing interval
    if (pillInterval) {
        clearInterval(pillInterval);
    }
    
    pillInterval = setInterval(() => {
        const pills = pillTrack.querySelectorAll('.moving-pill');
        if (pills.length === 0) return;
        
        const pillWidth = 280; // Approximate width of each pill including gap
        const maxPosition = -(pills.length - 3) * pillWidth; // Show 3 pills at a time
        
        pillPosition += pillDirection * 2; // Smooth movement
        
        // Reverse direction at boundaries
        if (pillPosition >= 0 || pillPosition <= maxPosition) {
            pillDirection *= -1;
        }
        
        pillTrack.style.transform = `translateX(${pillPosition}px)`;
    }, 50); // Smooth animation
}

function stopPillAnimation() {
    if (pillInterval) {
        clearInterval(pillInterval);
        pillInterval = null;
    }
}

// Shop page fade-in animation
function triggerShopFadeIn() {
    const watchGrid = document.querySelector('.content-area');
    if (watchGrid) {
        // Remove active class first, then add it back to trigger fade-in
        watchGrid.classList.remove('category-fade-in', 'active');
        
        // Force a reflow
        void watchGrid.offsetWidth;
        
        // Add both classes to trigger proper fade-in animation
        watchGrid.classList.add('category-fade-in');
        
        // Add active class after a small delay to ensure fade-in works
        setTimeout(() => {
            watchGrid.classList.add('active');
        }, 50);
    }
}

// Initialize animations when page loads
function initializeAnimations() {
    console.log('Initializing animations...');
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        // Start hero banner animation
        startFadeAnimation();
        console.log('Hero banner animation started');
        
        // Start pill carousel animation
        startPillAnimation();
        console.log('Pill carousel animation started');
        
        // Trigger shop fade-in if we're on shop page
        if (window.location.pathname.includes('index.php') || window.location.pathname === '/') {
            const contentArea = document.querySelector('.content-area');
            const heroBanner = document.querySelector('.hero-banner-fade');
            
            // Check if we're on shop page (content area visible, hero banner not)
            if (contentArea && contentArea.style.display !== 'none' && 
                (!heroBanner || heroBanner.style.display === 'none')) {
                setTimeout(triggerShopFadeIn, 500);
            }
        }
    }, 100);
}

// Pause animations when page is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopFadeAnimation();
        stopPillAnimation();
        console.log('Animations paused (page hidden)');
    } else {
        startFadeAnimation();
        startPillAnimation();
        console.log('Animations resumed (page visible)');
    }
});

// Start animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
    // DOM is already loaded
    initializeAnimations();
}

// Also re-initialize when window loads (for backup)
window.addEventListener('load', () => {
    setTimeout(initializeAnimations, 200);
});

// Expose triggerShopFadeIn globally for other scripts
window.triggerShopFadeIn = triggerShopFadeIn;
