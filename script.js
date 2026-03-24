// ==================== CONSTANTS ====================
const SHIPPING_FEE = 150; 
// ==================== WATCH DATA ====================
var watchData = {
    "Submariner 41": {
        category: "Gentlemen",
        desc: "The ultimate archetype of the modern diver's watch. Forged in exceptionally durable Oystersteel, it seamlessly transitions from ocean exploration to the boardroom..",
        specs: "Brand: Rolex",
        price: 950000.00,
        stock: 10,
        images: ["men-images/sub1.png", "men-images/sub2.png", "men-images/sub3.png"]
    },
    "Daytona Steel and Black Dial White Gold Oysterflex": {
        category: "Gentlemen",
        desc: "The ultimate tool watch for those who prefer 'stealth wealth.' This 18kt white gold Cosmograph Daytona features a high-contrast black dial and the innovative Oysterflex bracelet, combining high-performance engineering with understated luxury.",
        specs: "Brand: Rolex",
        price: 1850000.00,
        stock: 10,
        images: ["men-images/cos1.png", "men-images/cos2.png", "men-images/cos3.png"]
    },
    "GMT-Master II Two Tone Everose Oyster": {
        category: "Gentlemen",
        desc: "A sophisticated travel companion wrapped in warm Everose gold and Oystersteel. The bi-color Cerachrom bezel allows frequent flyers to track multiple time zones with timeless elegance.",
        specs: "Brand: Rolex",
        price: 1250000.00,
        stock: 10,
        images: ["men-images/gmt1.png", "men-images/gmt2.png", "men-images/gmt3.png"]
    },
    "Explorer II 42 Polar": {
        category: "Gentlemen",
        desc: "Designed to push the boundaries of human endurance in extreme environments. The highly legible white dial and prominent orange 24-hour hand ensure clarity in the darkest conditions.",
        specs: "Brand: Rolex",
        price: 680000.00,
        stock: 10,
        images: ["men-images/exp1.png", "men-images/exp2.png", "men-images/exp3.png"]
    },
    "Submariner Date 41 Two Tone Yellow Gold Bluesy": {
        category: "Gentlemen",
        desc: "A captivating blend of deep marine blue and brilliant 18ct yellow gold. This striking two-tone variation brings an undeniable aura of luxury to the iconic diver profile.",
        specs: "Brand: Rolex",
        price: 1150000.00,
        stock: 10,
        images: ["men-images/mar1.png", "men-images/mar2.png", "men-images/mar3.png"]
    },
    "MRG-B5000": {
        category: "Gentlemen",
        desc: "The absolute pinnacle of G-Shock engineering and craftsmanship. Hand-assembled on Casio's elite \"Premium Production Line\" in Japan, this full-titanium masterpiece features flawless Sallaz polishing.",
        specs: "Brand: G-Shock",
        price: 220000.00,
        stock: 10,
        images: ["men-images/mrg1.png", "men-images/mrg2.png", "men-images/mrg3.png"]
    },
    "MTG-B3000": {
        category: "Gentlemen",
        desc: "A sleek marvel of structural innovation. Its ultra-slim dual-core guard structure combines the warmth of resin with the sharp, faceted brilliance of polished metal.",
        specs: "Brand: G-Shock",
        price: 65000.00,
        stock: 10,
        images: ["men-images/mtg1.png", "men-images/mtg2.png", "men-images/mtg3.png"]
    },
    "GMW-B5000": {
        category: "Gentlemen",
        desc: "The legendary 1983 origin story, reborn in full stainless steel. It pairs the classic digital square aesthetic with modern Bluetooth connectivity and Tough Solar power.",
        specs: "Brand: G-Shock",
        price: 35000.00,
        stock: 10,
        images: ["men-images/gmw1.png", "men-images/gmw2.png", "men-images/gmw3.png"]
    },
    "GM-B2100": {
        category: "Gentlemen",
        desc: "This octagonal design became a global phenomenon for its slim, wearable profile. The full-metal version is water-resistant to 200m and virtually indestructible.",
        specs: "Brand: G-Shock",
        price: 35000.00,
        stock: 10,
        images: ["men-images/gm1.png", "men-images/gm2.png", "men-images/gm3.png"]
    },
    "GWG-B1000": {
        category: "Gentlemen",
        desc: "An unstoppable force built to conquer the harshest terrain on Earth. Engineered with mud-resist construction, sapphire crystal, and forged carbon for extreme tactical durability.",
        specs: "Brand: G-Shock",
        price: 50000.00,
        stock: 10,
        images: ["men-images/gwg1.png", "men-images/gwg2.png", "men-images/gwg3.png"]
    },
    "Navitimer B01 Chronograph 46": {
        category: "Gentlemen",
        desc: "The definitive watch for aviation professionals. Its commanding 46mm presence showcases the legendary circular slide rule, powered by the masterful Breitling Manufacture Caliber 01.",
        specs: "Brand: Breitling",
        price: 520000.00,
        stock: 10,
        images: ["men-images/nav.png", "men-images/nav1.png", "men-images/nav2.png"]
    },
    "Superocean Heritage B31 Automatic 44": {
        category: "Gentlemen",
        desc: "A stunning tribute to Breitling's 1950s diving legacy. The combination of a high-tech ceramic bezel and a mesh-style bracelet offers the perfect blend of vintage charm and modern performance.",
        specs: "Brand: Breitling",
        price: 310000.00,
        stock: 10,
        images: ["men-images/sup.png", "men-images/sup1.png", "men-images/sup2.png"]
    },
    "Chronomat B01 42":{
        category: "Gentlemen",
        desc: "Breitling’s all-purpose sports watch in its most luxurious form. Featuring the signature \"Rouleaux\" bracelet, this piece makes a bold, unapologetic statement in solid gold.",
        specs: "Brand: Breitling",
        price: 485000.00,
        stock: 10,
        images: ["men-images/chr.png", "men-images/chr1.png", "men-images/chr2.png"]
    },
    "Super Avenger B01 Chronograph 46":{
        category: "Gentlemen",
        desc: "Built for those who demand maximum presence and extreme robustness. Shock-resistant and highly legible, it is the ultimate tool for demanding aerial and terrestrial missions.",
        specs: "Brand: Breitling",
        price: 340000.00,
        stock: 10,
        images: ["men-images/ave.png", "men-images/ave1.png", "men-images/ave2.png"]
    },
    "Professional Endurance Pro 44":{
        category: "Gentlemen",
        desc: "The ultimate luxury sports watch designed for rigorous physical activity. Its ultra-lightweight Breitlight case is 3.3 times lighter than titanium, offering peak comfort and vibrant style.",
        specs: "Brand: Breitling",
        price: 185000.00,
        stock: 10,
        images: ["men-images/end.png", "men-images/end1.png", "men-images/end2.png"]
    },
    "Grand Complications Celestial Rose Gold":{
        category: "Gentlemen",
        desc: "A masterpiece of astronomical precision, the Celestial features a rotating chart of the heavenly sky. This rose gold complication traces the stars, the phases of the moon, and the meridian passage of Sirius, bringing the galaxy to your wrist.",
        specs: "Brand: Patek Philippe",
        price: 23500000.00,
        stock: 10,
        images: ["new-arrivals/ome1.png", "new-arrivals/ome2.png", "new-arrivals/ome3.png"]
    },
    "Lady Datejust 28 Two Tone Everose Aubergine Dial With Diamonds":{
        category: "Ladies",
        desc: "A breathtaking blend of Oystersteel and Everose gold. The rich aubergine dial, accented with brilliant-cut diamonds, offers unmatched evening elegance.",
        specs: "Brand: Rolex",
        price: 1350000.00,
        stock: 10,
        images: ["women-images/lad1.png", "women-images/lad2.png", "women-images/lad3.png"]
    },
    "Datejust 31 Diamond-Set Silver Dial Yellow Gold President":{
        category: "Ladies",
        desc: "Exude timeless elegance with this striking 18kt yellow gold timepiece. It features a classic silver dial illuminated by brilliant diamond hour markers, all beautifully presented on the prestigious President bracelet.",
        specs: "Brand: Rolex",
        price: 1150000.00,
        stock: 10,
        images: ["women-images/dat1.png", "women-images/dat2.png", "women-images/dat3.png"]
    },
    "Oyster Perpetual 36 Candy Pink Dial":{
        category: "Ladies",
        desc: "A vibrant pop of color backed by legendary Rolex reliability. The candy pink dial brings a playful yet highly exclusive energy to a timeless silhouette.",
        specs: "Brand: Rolex",
        price: 950000.00,
        stock: 10,
        images: ["women-images/oys1.png", "women-images/oys2.png", "women-images/oys3.png"]
    },
    "Lady-Datejust Sky Lavender Sugilite Stone Dial Yellow Gold":{
        category: "Ladies",
        desc: "A true collector's piece featuring a rare and vibrant Sky Lavender Sugilite stone dial. Each natural stone dial offers a unique pattern of deep purples and lavenders, set against the luxurious warmth of 18kt yellow gold.",
        specs: "Brand: Rolex",
        price: 820000.00,
        stock: 10,
        images: ["women-images/daj1.png", "women-images/daj2.png", "women-images/daj3.png"]
    },
    "Datejust 31 Champagne Diamond Dial Two-Tone Jubilee":{
        category: "Ladies",
        desc: "A quintessential classic, this Datejust 31 features a radiant champagne dial adorned with elegant diamond hour markers. The signature two-tone Oystersteel and yellow gold finish is perfectly complemented by the iconic, five-piece link Jubilee bracelet.",
        specs: "Brand: Rolex",
        price: 650000.00,
        stock: 10,
        images: ["women-images/air1.png", "women-images/air2.png", "women-images/air3.png"]
    },
    "Navitimer 32":{
        category: "Ladies",
        desc: "The legendary pilot's watch, elegantly resized for the feminine wrist. It trades the complex slide rule for a clean, radiant dial that brings aviation heritage to everyday luxury.",
        specs: "Brand: Breitling",
        price: 250000.00,
        stock: 10,
        images: ["women-images/nav.png", "women-images/nav1.png", "women-images/nav2.png"]
    },
    "Chronomat Automatic 36 South Sea":{
        category: "Ladies",
        desc: "A tropical escape in horological form. Adorned with a dazzling gem-set bezel and vivid dial, it brings a vibrant, exotic flair to the classic Chronomat.",
        specs: "Brand: Breitling",
        price: 480000.00,
        stock: 10,
        images: ["women-images/chr.png", "women-images/chr1.png", "women-images/chr2.png"]
    },
    "Superocean Automatic 36":{
        category: "Ladies",
        desc: "High-performance underwater capability meets coastal chic. Its bright, legible dial and durable build make it the ultimate companion for the active, modern woman.",
        specs: "Brand: Breitling",
        price: 280000.00,
        stock: 10,
        images: ["women-images/sup.png", "women-images/sup1.png", "women-images/sup2.png"]
    },
    "Lady Premier 32":{
        category: "Ladies",
        desc: "Refined, dressy, and unmistakably elegant. This piece combines vintage-inspired charm with a slim, graceful profile that slips perfectly under any tailored cuff.",
        specs: "Brand: Breitling",
        price: 260000.00,
        stock: 10,
        images: ["women-images/lap.png", "women-images/lap1.png", "women-images/lap2.png"]
    },
    "Professional Endurance Pro 38":{
        category: "Ladies",
        desc: "he ultimate luxury athleisure watch. Crafted from ultra-lightweight proprietary materials, it delivers vibrant style and rugged durability for high-intensity lifestyles.",
        specs: "Brand: Breitling",
        price: 185000.00,
        stock: 10,
        images: ["women-images/end.png", "women-images/end1.png", "women-images/end2.png"]
    },
    "Ingenieur Automatic 35":{
        category: "Ladies",
        desc: "A masterclass in integrated bracelet design. This timepiece offers a highly architectural, anti-magnetic build that feels both industrial and incredibly chic.",
        specs: "Brand: IWC Schaffhausen",
        price: 350000.00,
        stock: 10,
        images: ["women-images/ing.png", "women-images/ing2.png", "women-images/ing1.png"]
    },
    "Portofino Automatic 34":{
        category: "Ladies",
        desc: "The pure essence of Mediterranean luxury. Its uncluttered, minimalist dial and perfectly round case offer a timeless, understated grace that never goes out of style.",
        specs: "Brand: IWC Schaffhausen",
        price: 320000.00,
        stock: 10,
        images: ["women-images/por.png", "women-images/por1.png", "women-images/por2.png"]
    },
    "Portofino Automatic Moon Phase 37":{
        category: "Ladies",
        desc: "A poetic complication for the romantic soul. The meticulously crafted moon phase display sits beautifully atop a pristine dial, offering starry elegance.",
        specs: "Brand: IWC Schaffhausen",
        price: 490000.00,
        stock: 10,
        images: ["women-images/pot.png", "women-images/pot2.png", "women-images/pot1.png"]
    },
    "Portofino Perpetual Calendar":{
        category: "Ladies",
        desc: "A true mechanical masterpiece. This highly complex movement automatically tracks the date, month, and leap years without needing adjustment, wrapped in a sleek Portofino case.",
        specs: "Brand: IWC Schaffhausen",
        price: 1250000.00,
        stock: 10,
        images: ["women-images/prt.png", "women-images/prt1.png", "women-images/prt2.png"]
    },
    "Portofino Automatic Day & Night 34":{
        category: "Ladies",
        desc: "Track the passing of time with celestial beauty. A delicate sun and moon disc slowly rotates on the dial, perfectly capturing the magic of day and night.",
        specs: "Brand: IWC Schaffhausen",
        price: 410000.00,
        stock: 10,
        images: ["women-images/pro.png", "women-images/pro1.png", "women-images/pro2.png"]
    },
    "Complications Annual Calendar Diamond and Mother of Pearl White Gold":{
        category: "Ladies",
        desc: "A mechanical masterpiece featuring an annual calendar and moon phase, elegantly set in a diamond-bezel 18k white gold case with a mother-of-pearl dial.",
        specs: "Brand: Patek Philippe",
        price: 3850000.00,
        stock: 10,
        images: ["new-arrivals/omg1.png", "new-arrivals/omg2.png", "new-arrivals/omg3.png"]
    },
    "Circus Minute Repeater":{
        category: "New Arrivals",
        desc: "A horological theater. This rare platinum timepiece features hand-carved gold automatons that perform a circus act in sync with the minute repeater’s chime.",
        specs: "Brand: Ulysse Nardin",
        price: 18750000.00,
        stock: 10,
        images: ["new-arrivals/uly1.png", "new-arrivals/uly2.png", "new-arrivals/uly3.png"]
    },
    "Executive Skeleton Tourbillon":{
        category: "New Arrivals",
        desc: "A bold fusion of transparency and power. This titanium tourbillon features an ultra-light skeletonized movement with an impressive 170-hour power reserve.",
        specs: "Brand: Ulysse Nardin",
        price: 1100000.00,
        stock: 10,
        images: ["new-arrivals/ule1.png", "new-arrivals/ule3.png", "new-arrivals/ule2.png"]
    },
    "Freak X Black Titanium":{
        category: "New Arrivals",
        desc: "Defying convention with no dial and no hands. A flying carousel rotates to tell the time, housed in a sleek, DLC-coated titanium case for the modern rebel.",
        specs: "Brand: Ulysse Nardin",
        price: 1200000.00,
        stock: 10,
        images: ["new-arrivals/uls1.png", "new-arrivals/uls2.png", "new-arrivals/uls3.png"]
    },
    "Overseas Tourbillon Skeleton Titanium":{
        category: "New Arrivals",
        desc: "The pinnacle of sporty elegance. This grade 5 titanium masterpiece houses an ultra-slim skeletonized tourbillon movement, certified by the prestigious Hallmark of Geneva.",
        specs: "Brand: Vacheron Constantin",
        price: 10500000.00,
        stock: 10,
        images: ["new-arrivals/vac1.png", "new-arrivals/vac2.png", "new-arrivals/vac3.png"]
    },
    "Kalla Geneva Diamond and White Gold":{
        category: "New Arrivals",
        desc: "A masterpiece of high jewelry and horology, featuring over 25 carats of emerald-cut diamonds meticulously set in an 18k white gold case and bracelet.",
        specs: "Brand: Vacheron Constantin",
        price: 28000000.00,
        stock: 10,
        images: ["new-arrivals/vah1.png", "new-arrivals/vah2.png", "new-arrivals/vah3.png"]
    },
    "Traditionelle White Gold":{
        category: "New Arrivals",
        desc: "The essence of pure watchmaking. This 18k white gold timepiece features a clean, minimalist dial and a manual-wind movement, embodying timeless Vacheron elegance.",
        specs: "Brand: Vacheron Constantin",
        price: 1350000.00,
        stock: 10,
        images: ["new-arrivals/vae1.png", "new-arrivals/vae2.png", "new-arrivals/vae3.png"]
    },
    "Rotonde Calendar Aperture and Power Reserve Steel":{
        category: "New Arrivals",
        desc: "A sophisticated Cartier complication featuring a large date aperture and power reserve indicator, housed in a polished steel case with a signature blue cabochon crown.",
        specs: "Brand: Cartier",
        price: 580000.00,
        stock: 10,
        images: ["new-arrivals/car1.png", "new-arrivals/car2.png", "new-arrivals/car3.png"]
    },
    "Ballon Bleu Rose Gold":{
        category: "New Arrivals",
        desc: "Floating like a balloon with a sapphire cabochon guarded by an 18k rose gold arc, this iconic timepiece balances classic Cartier style with modern curves.",
        specs: "Brand: Cartier",
        price: 1150000.00,
        stock: 10,
        images: ["new-arrivals/cat1.png", "new-arrivals/cat2.png", "new-arrivals/cat3.png"]
    },
    "Pasha Chronograph Yellow Gold Quartz":{
        category: "New Arrivals",
        desc: "An 18k yellow gold icon featuring a distinctive screw-down crown cap and blue cabochons, blending Cartier’s sporty heritage with timeless luxury.",
        specs: "Brand: Cartier",
        price: 450000.00,
        stock: 10,
        images: ["new-arrivals/cai1.png", "new-arrivals/cai2.png", "new-arrivals/cai3.png"]
    },
    "Mercedes-Benz 500K Roadster Platinum":{
        category: "New Arrivals",
        desc: "A rare horological tribute to automotive history, this platinum timepiece features a skeletonized dial showcasing a miniature 500K Roadster sculpture.",
        specs: "Brand: Audemars Piguet",
        price: 2900000.00,
        stock: 10,
        images: ["new-arrivals/aud1.png", "new-arrivals/aud2.png", "new-arrivals/aud3.png"]
    },
    "Royal Oak Concept Split-Seconds Chronograph GMT Carbon":{
        category: "New Arrivals",
        desc: "A high-performance beast in forged carbon and titanium, featuring a split-seconds chronograph and GMT function for the ultimate technical collector.",
        specs: "Brand: Audemars Piguet",
        price: 10200000.00,
        stock: 10,
        images: ["new-arrivals/aue1.png", "new-arrivals/aue2.png", "new-arrivals/aue3.png"]
    },
    "Royal Oak Concept CW1 Alacrite":{
        category: "New Arrivals",
        desc: "The original Concept that started it all. Crafted from rare Alacrite 602, this mechanical masterpiece houses a tourbillon and a linear power reserve indicator.",
        specs: "Brand: Audemars Piguet",
        price: 8800000.00,
        stock: 10,
        images: ["new-arrivals/aup1.png", "new-arrivals/aup2.png", "new-arrivals/aup3.png"]
    },
    "Half Hunter Limited Edition":{
        category: "New Arrivals",
        desc: "A collaboration with Pininfarina featuring a 10-day tourbillon. This titanium masterpiece offers total transparency through its sapphire 'half-hunter' case design.",
        specs: "Brand: David Candaux",
        price: 5500000.00,
        stock: 2,
        images: ["new-arrivals/dav1.png", "new-arrivals/dav2.png", "new-arrivals/dav3.png"]
    },
    "Opus VII":{
        category: "New Arrivals",
        desc: "A mechanical 'mystery' watch that displays hours, minutes, or power reserve only on demand through a single push-button, limited to just 50 pieces worldwide.",
        specs: "Brand: Harry Winston",
        price: 4950000.00,
        stock: 2,
        images: ["new-arrivals/har1.png", "new-arrivals/har2.png", "new-arrivals/har3.png"]
    },
    "Villeret Split Seconds Chronograph Platinum":{
        category: "New Arrivals",
        desc: "Understated platinum excellence. This ultra-slim timepiece houses one of the world's thinnest automatic split-seconds chronograph movements for timing two events simultaneously.",
        specs: "Brand: Blancpain",
        price: 860000.00,
        stock: 2,
        images: ["new-arrivals/bla1.png", "new-arrivals/bla2.png", "new-arrivals/bla3.png"]
    },
    "Zeitwerk Date White Gold":{
        category: "New Arrivals",
        desc: "The first mechanical watch with a digital jumping numerals display and a unique peripheral glass date ring that turns red to indicate the current day.",
        specs: "Brand: A. Lange & Sohne",
        price: 5750000.00,
        stock: 2,
        images: ["new-arrivals/als1.png", "new-arrivals/als2.png", "new-arrivals/als3.png"]
    }
};

const savedStock = localStorage.getItem('watchStock');
if (savedStock) {
    const stockMap = JSON.parse(savedStock);
    Object.keys(stockMap).forEach(name => {
        if (watchData[name]) {
            watchData[name].stock = stockMap[name];
        }
    });
}

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
var releaseTimers = {};

// ==================== PAGE NAVIGATION ====================
function hideAllPages() {
    const pages = [
        'homepage', 
        'shop-page', 
        'my-orders-page',
        'warranty-section',
        'main-footer',      
        'about-page',
        'contact-page'
    ];

    pages.forEach(pageId => {
        const page = document.getElementById(pageId);
        if (page) {
            page.style.display = 'none';
        }
    });
}

function showHome() {
    hideAllPages();
    document.getElementById('homepage').style.display = 'block';
    
    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'none';
    
    var cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) cartWrapper.style.display = 'inline-block';

    document.body.classList.add('static-header');
    document.body.classList.remove('on-cart-page', 'shop-active');

    let mainLogo = document.querySelector('.nav-logo');
    if (mainLogo) {
        mainLogo.style.pointerEvents = 'auto';
        mainLogo.style.opacity = '1';
    }

    history.pushState({ page: 'home' }, null, '#home');

    setTimeout(() => {
        window.scrollTo(0, 0); 
    }, 10); 
}

function showShop() {
    var footer = document.querySelector('footer');
    if (footer) footer.style.display = 'block';
    document.querySelectorAll('#my-orders-page > div[style*="position: fixed"]')
        .forEach(function(el) { el.style.display = 'none'; });
    if (document.getElementById('homepage')) document.getElementById('homepage').style.display = 'none';
    if (document.getElementById('about-page')) document.getElementById('about-page').style.display = 'none';
    if (document.getElementById('contact-page')) document.getElementById('contact-page').style.display = 'none';
    if (document.getElementById('checkout-page')) document.getElementById('checkout-page').style.display = 'none';
    if (document.getElementById('my-orders-page')) document.getElementById('my-orders-page').style.display = 'none';
    
    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'none';

    document.getElementById('shop-page').style.display = 'block';

    var cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) cartWrapper.style.display = 'inline-block';

    document.body.classList.remove('static-header');
    document.body.classList.remove('on-cart-page');
    document.body.classList.add('shop-active'); 

    document.querySelector('.category-bar').style.display = 'flex';
    document.querySelector('.hero-banner-fade').style.display = 'block';
    document.querySelector('.content-area').style.display = 'block';

    history.pushState({ page: 'shop' }, null, '#shop');

    if (typeof filterCategory === 'function') filterCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const searchContainer = document.querySelector('#shop-page .search-container');
    if (searchContainer) searchContainer.style.display = 'flex'; 

    const luxeDesign = document.querySelector('.cart-luxe-design');
    if (luxeDesign) luxeDesign.style.display = 'none';
}

function showShopWithCategory(category) {
    showShop();
    setTimeout(function() {
        filterCategory(category);
    }, 50);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCartPage() {
    ['about-page','contact-page','privacy-page',
     'terms-page','return-page','warranty-page'].forEach(id => {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('shop-page').style.display = 'block'; 
    document.getElementById('checkout-page').style.display = 'none';

    document.querySelector('.category-bar').style.display = 'none';
    document.querySelector('.hero-banner-fade').style.display = 'none';
    document.querySelector('.content-area').style.display = 'none';

    var cartPage = document.getElementById('cart-page');
    if (cartPage) {
        cartPage.style.display = 'block';
        
        cartPage.classList.remove('cart-fade-in');
        void cartPage.offsetWidth; 
        cartPage.classList.add('cart-fade-in');
    }

    const searchContainer = document.querySelector('#shop-page .search-container');
    
    if (searchContainer) {
        searchContainer.style.display = 'none'; 
        
        const oldSpacer = document.querySelector('.cart-header-spacer');
        if (oldSpacer) oldSpacer.remove();
        
        let luxeDesign = document.querySelector('.cart-luxe-design');
        if (!luxeDesign) {
            luxeDesign = document.createElement('div');
            luxeDesign.className = 'cart-luxe-design';
            
            luxeDesign.style.cssText = 'position: absolute; left: 50%; transform: translateX(-50%); color: #7e57c2; font-family: "Georgia", serif; letter-spacing: 3px; font-size: 1.1rem; font-weight: bold; white-space: nowrap;';
            luxeDesign.innerHTML = '✧ SECURE CHECKOUT ✧';
            
            searchContainer.parentElement.insertBefore(luxeDesign, searchContainer);
        } else {
            luxeDesign.style.display = 'block';
        }
    }

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
        document.getElementById('nav-portfolio-link').style.display = 'inline-block';
        var userDisplay = document.getElementById("user-display");
        if (userDisplay) userDisplay.innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; letter-spacing: 1px; font-size: 0.85rem;">${activeUser}</span>`;
    } else {
        isLoggedIn = false;
        document.getElementById('nav-portfolio-link').style.display = 'none';
    }

    showHome();
};

function openLoginModal() {
    document.getElementById("login-modal").style.display = "block";
}

function closeLogin() {
    var modal = document.getElementById("login-modal");
    if (!modal) return;

    modal.style.transition = 'opacity 0.4s ease';
    modal.style.opacity = '0';

    setTimeout(() => {
        modal.style.display = "none";
        modal.style.opacity = "1";

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
    }, 400);
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
        showNotification("Please enter a username!");
        return;
    }

    if (password.length < 8 || !/[a-zA-Z]/.test(password)) {
        showNotification("Password must be at least 8 characters and contain a letter!");
        return;
    }
    if (password !== confirm) {
        showNotification("Passwords do not match!");
        return;
    }

    if (localStorage.getItem("user_" + username)) {
        showNotification("Username already exists! Choose another.");
        return;
    }

    localStorage.setItem("user_" + username, password);

    isLoggedIn = true;
    localStorage.setItem("currentUser", username);

    document.getElementById('nav-portfolio-link').style.display = 'inline-block';

    var userDisplay = document.getElementById("user-display");
    if (userDisplay) userDisplay.innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; letter-spacing: 1px; font-size: 0.85rem;">${username}</span>`;

    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
    document.getElementById("reg-confirm-password").value = "";

    closeLogin();

    showNotification("Account created! Welcome, " + username + "!");
}

function handleAuth(event) {
    if (event) event.preventDefault();

    var user = document.getElementById("auth-username").value;
    var pass = document.getElementById("auth-password").value;

    if (user === "" || pass === "") {
        showNotification("Please enter both username and password!");
        return;
    }

    var savedPass = localStorage.getItem("user_" + user);

    if (savedPass && savedPass === pass) {
        isLoggedIn = true;
        localStorage.setItem("currentUser", user);

        document.getElementById('nav-portfolio-link').style.display = 'inline-block';

        var userDisplay = document.getElementById("user-display");
        if (userDisplay) userDisplay.innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; letter-spacing: 1px; font-size: 0.85rem;">${user}</span>`;

        document.getElementById("auth-username").value = "";
        document.getElementById("auth-password").value = "";
        document.getElementById("auth-password").type = "password";

        closeLogin();
        renderCartItems();      
        updateCartDisplay();
        showShop();    
        showNotification("Welcome back, Admin!");
    } else {
        showNotification("Invalid username or password!");
    }
}

function handleForgotPassword() {
    const loginModal = document.getElementById("login-modal");
    const resetModal = document.getElementById("reset-modal");

    if (loginModal) {
        loginModal.style.display = "none";
    }

    if (resetModal) {
        resetModal.style.opacity = "0";
        resetModal.style.display = "flex";
        
        setTimeout(() => {
            resetModal.style.transition = "opacity 0.3s ease";
            resetModal.style.opacity = "1";
        }, 10);
    }
}

function saveNewPassword() {
    var username = document.getElementById("reset-username").value.trim();
    var newPassword = document.getElementById("reset-new-password").value;
    var confirmPassword = document.getElementById("reset-confirm-password").value;

    if (username === "") {
        showNotification("Please enter a username!", "user");
        return;
    }

    var savedPass = localStorage.getItem("user_" + username);
    if (!savedPass) {
        showNotification("Account not found! Please check the username.");
        return;
    }

    if (newPassword.length < 8 || newPassword.length > 10) {
        showNotification("Password must be between 8 and 10 characters!");
        return;
    }

    if (newPassword !== confirmPassword) {
        showNotification("Passwords do not match!");
        return;
    }

    localStorage.setItem("user_" + username, newPassword);

    closeResetModal();
    showNotification("Password updated! Please log in.");
    openLoginModal();
}

function backToLoginFromReset() {
    const loginModal = document.getElementById("login-modal");
    const resetModal = document.getElementById("reset-modal");

    if (resetModal) {
        resetModal.style.display = "none";
        document.getElementById("reset-username").value = "";
        document.getElementById("reset-new-password").value = "";
        document.getElementById("reset-confirm-password").value = "";
    }

    if (loginModal) {
        loginModal.style.opacity = "0";
        loginModal.style.display = "flex";
        
        setTimeout(() => {
            loginModal.style.transition = "opacity 0.3s ease";
            loginModal.style.opacity = "1";
        }, 10);
    }
}

function closeResetModal() {
    const resetModal = document.getElementById("reset-modal");
    if (!resetModal) return;

    resetModal.style.transition = "opacity 0.4s ease";
    resetModal.style.opacity = "0";

    setTimeout(() => {
        resetModal.style.display = "none";
        resetModal.style.opacity = "1";

        document.getElementById("reset-username").value = "";
        document.getElementById("reset-new-password").value = "";
        document.getElementById("reset-confirm-password").value = "";
    }, 400);
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
    document.getElementById('nav-portfolio-link').style.display = 'none';
    localStorage.removeItem("currentUser");

    document.getElementById("user-display").innerHTML = `<i class="fa-solid fa-circle-user" style="font-size: 1.2rem; color: #ffffff !important;"></i> <span style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;">Login</span>`;
    document.getElementById("logout-confirm-modal").style.display = "none";

    document.getElementById("auth-username").value = "";
    document.getElementById("auth-password").value = "";
    document.getElementById("auth-password").type = "password";

    showNotification("Logged out successfully!");

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
        showNotification("Please login first to add items to your cart!");
        openLoginModal();
        return;
    }

    var watch = watchData[watchName];
    var existingItemIndex = cart.findIndex(item => item.name === watchName);
    if (watch.stock <= 0) {
        showNotification("Sorry! " + watchName + " is completely sold out.");
        return; 
    }

    if (existingItemIndex > -1) {
        if (cart[existingItemIndex].quantity >= watch.stock) {
            showNotification("Limit reached! We only have " + watch.stock + " in stock.");
            return;
        }
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name: watchName, price: watch.price, quantity: 1 });
    }

    total += watch.price;
    updateCartDisplay();
    renderCartItems();
    showNotification(watchName + " added to cart!");

    let stockDisplay = document.getElementById('modal-stock-count');
    if (stockDisplay) {
        let cartItem = cart.find(item => item.name === watchName);
        let quantityInCart = cartItem ? cartItem.quantity : 0;
        let availableStock = watch.stock - quantityInCart;
        
        stockDisplay.innerText = availableStock;
        
        if (availableStock <= 0) {
            stockDisplay.parentElement.style.color = "red";
            stockDisplay.innerText = "0 (Sold Out)";
        }
    }
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
                <p style="color: #888; margin-bottom: 15px; font-size: 0.85rem; letter-spacing: 0.5px;">Your cart is empty.</p>
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
       html += '<p class="brand-line" style="font-weight: 700; font-size: 1.0rem; color: #2e004f; text-transform: uppercase; margin-bottom: 10px;">' + brand + '</p>';
    }

    html += '<p class="watch-description">' + data.desc + '</p>';

    var cartItem = cart.find(item => item.name === name);
    var quantityInCart = cartItem ? cartItem.quantity : 0;
    var availableStock = data.stock - quantityInCart;
    var stockColor = availableStock < 5 ? "#ff4757" : "#2ed573";
    var stockText = availableStock <= 0 ? "0 (Sold Out)" : availableStock;
    html += '<p class="stock" style="color: ' + stockColor + '; font-weight:bold; margin-top: 15px;">In Stock: <span id="modal-stock-count">' + stockText + '</span></p>';
    
    var formattedPrice = data.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    html += '<p class="price" style="font-size: 1.3rem; font-weight: bold; color: #2e004f; margin-bottom: 15px;">₱' + formattedPrice + '</p>';

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
    const detailsModal = document.getElementById('details-modal'); 
    if (!detailsModal) return;

    detailsModal.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    detailsModal.style.opacity = '0';
    detailsModal.style.transform = 'translateY(10px)';

    setTimeout(() => {
        detailsModal.style.display = 'none';
        detailsModal.style.opacity = '1';
        detailsModal.style.transform = 'translateY(0)';
    }, 400);
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
    const existing = document.getElementById('custom-notification');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.id = 'custom-notification';
    
    const textSpan = document.createElement('span');
    textSpan.innerText = message;
    textSpan.style.position = 'relative';

    notif.appendChild(textSpan);

    Object.assign(notif.style, {
        position: 'fixed',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%) translateY(20px)',
        background: 'rgba(59, 0, 102, 0.95)', 
        color: 'white',
        padding: '10px 48px',
        borderRadius: '2px', 
        clipPath: 'polygon(15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0% 50%)',
        borderLeft: '2px solid rgba(255, 255, 255, 0.1)', 
        borderRight: '2px solid rgba(255, 255, 255, 0.1)',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '2.5px', 
        textTransform: 'uppercase',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        opacity: '0',
        transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
        zIndex: '1000000'
    });

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.transform = 'translateX(-50%) translateY(0)';
        notif.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 600);
    }, 3500);
}

// ==================== FILTER & SEARCH ====================
function filterCategory(category) {
    currentCategory = category;

        const watchGrid = document.querySelector('.content-area'); 
    if (watchGrid) {
        watchGrid.classList.remove('category-fade-in');
        void watchGrid.offsetWidth; 
        watchGrid.classList.add('category-fade-in');
    }
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
    var confirmModal = document.getElementById("confirm-modal");
    if (event.target == confirmModal) closeConfirmModal();

    var detailsModal = document.getElementById("details-modal");
    if (event.target == detailsModal) closeDetails();

    var loginModal = document.getElementById("login-modal");
    if (event.target == loginModal) closeLogin();

    var clearModal = document.getElementById("secure-clear-modal");
    if (event.target == clearModal) closeSecureModal();

    var cartModal = document.getElementById("cart-modal");
    if (event.target == cartModal) cartModal.style.display = "none";

    var cartDropdown = document.getElementById("cart-dropdown");
    var userDropdown = document.getElementById("user-dropdown");
    
    var clickedCart = event.target.closest('[onclick="toggleCartDropdown()"]') || event.target.closest('#cart-dropdown');
    var clickedUser = event.target.closest('#user-display') || event.target.closest('#user-dropdown');

    if (!clickedCart && cartDropdown) cartDropdown.style.display = "none";
    if (!clickedUser && userDropdown) userDropdown.style.display = "none";
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
        var loginModal = document.getElementById('login-modal');
        var forgotModal = document.getElementById('forgot-password-modal');
        var detailsModal = document.getElementById('details-modal');
        var adminModal = document.getElementById('admin-login-modal'); 
        var confirmModal = document.getElementById('confirm-modal');   

        if (loginModal && loginModal.style.display !== "none") closeLogin();
        else if (forgotModal && forgotModal.style.display !== "none") closeForgotPasswordModal();
        else if (detailsModal && detailsModal.style.display !== "none") closeDetails();
        
        else if (adminModal && adminModal.style.display === "flex") closeAdminLogin();
        else if (confirmModal && confirmModal.style.display === "flex") closeConfirmModal();
    }

    if (event.key === "Enter") {
        var focused = document.activeElement.id;
        var confirmModal = document.getElementById('confirm-modal');

        if (focused === "auth-username" || focused === "auth-password") {
            handleAuth(event);
        } 
        else if (focused === "reg-username" || focused === "reg-password" || focused === "reg-confirm-password") {
            if (typeof handleRegister === "function") handleRegister(event);
        } 
        else if (focused === "new-reset-password" || focused === "confirm-reset-password") {
            if (typeof executePasswordReset === "function") executePasswordReset();
        }
        
        else if (focused === "admin-secret-pass") {
            checkAdminAccess();
        }
        
        else if (confirmModal && confirmModal.style.display === "flex") {
            executeClearHistory();
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
                <div class="cart-item-row" style="display: flex; align-items: center; padding: 20px; border-bottom: 1px solid #f0f0f0; gap: 10px;">
                    <div style="width: 40px; display: flex; justify-content: center; flex-shrink: 0;">
                        <input type="checkbox" class="cart-item-chk" value="${i}" onchange="calculateSelectedTotal()" checked>
                    </div>
                    <div style="flex: 5; display: flex; align-items: center; gap: 15px; min-width: 0;">
                        <img src="${imgSrc}" style="width: 80px; height: 80px; object-fit: contain; background: #f9f9f9; border-radius: 4px; flex-shrink: 0;">
                        <div style="min-width: 0;">
                            <span style="display: block; font-weight: bold; color: #333;">${item.name}</span>
                            <span style="font-size: 0.8rem; color: #999;">${watch.specs || 'Brand: '}</span>
                        </div>
                    </div>
                    <div style="flex: 1.5; text-align: center; color: #666;">${pesoFormat.format(watch.price)}</div>
                    <div style="flex: 1.5; display: flex; justify-content: center;">
                        <div style="display: flex; border: 1px solid #ddd; border-radius: 4px; overflow: hidden;">
                            <button onclick="decreaseCartQuantity(${i}, -1)" style="padding: 5px 12px; border: none; background: white; cursor: pointer;">-</button>
                            <input type="text" value="${item.quantity}" readonly style="width: 40px; text-align: center; border: none; background: #fafafa;">
                            <button onclick="increaseCartQuantity(${i}, 1)" style="padding: 5px 12px; border: none; background: white; cursor: pointer;">+</button>
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
    showNotification("Item removed from cart.");
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
        showNotification("Please select an item to delete!");
        return;
    }

    cart = cart.filter(function(item, index) {
        return !indicesToDelete.includes(index);
    });

    updateCartDisplay();
    renderCartItems();
    renderFullCartPage();
    calculateSelectedTotal(); 

    showNotification("Selected items removed.");
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
        showNotification("Please select at least one item to checkout!");
        return;
    }

    window.scrollTo(0, 0);
    
    var cartPage = document.getElementById('cart-page');
    if (cartPage) cartPage.style.display = 'none';

    var checkoutPage = document.getElementById('checkout-page');
    if (checkoutPage) {
        checkoutPage.style.display = 'block';
        
        checkoutPage.classList.remove('checkout-fade-in');
        void checkoutPage.offsetWidth;
        checkoutPage.classList.add('checkout-fade-in');
    }

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

    if (rawAddress.length < 10) {
        showNotification("Please enter a complete delivery address.");
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
                    <p style="margin: 0; font-size: 0.75rem; color: #888;">${watch.specs || 'Brand: Luxury'}</p>
                    <p style="margin: 2px 0 0 0; color: #666; font-size: 0.8rem;">Qty: ${item.quantity}</p>
                </div>
            </div>`;
        }
    });
    itemsHTML += `</div>`;

    const arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + 4); 
    const formattedArrival = arrivalDate.toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' });
    const receiptDetails = document.getElementById('receipt-details');
    
    if (receiptDetails) {
        receiptDetails.innerHTML = `
            <div style="border-left: 4px solid #2e004f; padding-left: 15px; margin-bottom: 20px; text-align: left;">
                <p style="margin: 5px 0;"><strong>Customer:</strong> ${rawName}</p>
                <p style="margin: 5px 0;"><strong>Shipping To:</strong> ${rawAddress}</p>
                <p style="margin: 5px 0;"><strong>Amount To Pay:</strong> <span style="color: #4CAF50; font-weight: bold;">${grandTotal}</span></p>
                <p style="margin: 5px 0;"><strong>Estimated Arrival:</strong> <span style="color: #3b0066;">${formattedArrival}</span></p>
            </div>
            ${itemsHTML} 
            <p style="font-size: 0.75rem; color: #aaa; text-align: center; margin-top: 20px;">Transaction ID: #CW-${Date.now().toString().slice(-6)}</p>
        `;
    }

    nameBox.value = "";
    addressBox.value = "";
    
    checkedBoxes.forEach(box => {
        const cartIndex = parseInt(box.value);
        const item = cart[cartIndex];
        if (item && watchData[item.name]) {
            watchData[item.name].stock -= item.quantity;
        }
    });

    localStorage.setItem('watchStock', JSON.stringify(
        Object.fromEntries(
            Object.keys(watchData).map(name => [name, watchData[name].stock])
        )
    ));

    const order = {
        id: 'CW-' + Date.now().toString().slice(-6),
        date: new Date().toLocaleString(),
        arrivalDate: formattedArrival,
        customer: rawName,
        address: rawAddress,
        items: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
        total: grandTotal
    };

    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    customerOrders.push(order);
    localStorage.setItem('customerHistory', JSON.stringify(customerOrders));

    const adminOrders = JSON.parse(localStorage.getItem('adminHistory') || '[]');
    adminOrders.push(order); 
    localStorage.setItem('adminHistory', JSON.stringify(adminOrders));
    
    const indicesToRemove = [];
    checkedBoxes.forEach(box => indicesToRemove.push(parseInt(box.value)));
    indicesToRemove.sort((a,b) => b - a).forEach(idx => cart.splice(idx, 1));

    if (typeof updateCartDisplay === "function") updateCartDisplay();
    if (typeof renderCartItems === "function") renderCartItems();

    const receiptPage = document.getElementById('receipt-page');
    if (receiptPage) {
        receiptPage.classList.remove('receipt-fade-in');
        void receiptPage.offsetWidth; 
        receiptPage.classList.add('receipt-fade-in');
    }

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

function navigateTo(pageId, headerClass = '') {
    window.scrollTo(0, 0);
    var footer = document.querySelector('footer');
    var pagesWithoutFooter = ['cart-page', 'admin-page', 'receipt-page', 'my-orders-page', 'checkout-page'];
    if (footer) footer.style.display = pagesWithoutFooter.includes(pageId) ? 'none' : 'block';
    var sidePanels = document.querySelectorAll('#my-orders-page > div[style*="position: fixed"]');
    sidePanels.forEach(function(panel) {
        panel.style.display = pageId === 'my-orders-page' ? 'flex' : 'none';
    });
    const pages = [
    'homepage', 'shop-page', 'about-page', 'contact-page',
    'privacy-page', 'terms-page', 'return-page', 'warranty-page',
    'receipt-page', 'cart-page', "admin-page", 'my-orders-page'   
    ];

    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'none';
        }
    });

    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';

    document.body.classList.remove('static-header', 'shop-active', 'on-cart-page');
    
    if (headerClass && headerClass.trim() !== '') {
        document.body.classList.add(headerClass);
    }
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

   const transID = Date.now().toString().slice(-6);

    const receiptDetails = document.getElementById('receipt-details');
    receiptDetails.innerHTML = `
        <div style="border-left: 4px solid #2e004f; padding-left: 15px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Customer:</strong> ${nameBox.value}</p>
            <p style="margin: 5px 0;"><strong>Shipping To:</strong> ${addressBox.value}</p>
            <p style="margin: 5px 0;"><strong>Amount To Pay:</strong> <span style="color: #4CAF50; font-weight: bold;">${total}</span></p>
        </div>
        <p style="font-size: 0.75rem; color: #aaa; text-align: center;">Transaction ID: #CW-${transID}</p>
    `;

    const numericTotal = parseFloat(total.replace(/[^0-9.-]+/g,""));

    const newOrder = {
        id: "CW-" + transID,
        customer: nameBox.value,
        address: addressBox.value,
        date: new Date().toLocaleString('en-PH'),
        
        total: numericTotal, 

        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: cleanPrice(item.price) 
        }))
    };

    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    customerOrders.push(newOrder);
    localStorage.setItem('customerHistory', JSON.stringify(customerOrders));

    const adminOrders = JSON.parse(localStorage.getItem('adminHistory') || '[]');
    adminOrders.push(newOrder);
    localStorage.setItem('adminHistory', JSON.stringify(adminOrders));

    closeCheckoutModal(); 
    navigateTo('receipt-page', 'static-header');
    
    cart = [];
    if (typeof updateCartUI === 'function') updateCartUI();
}

function increaseCartQuantity(cartIndex) {
    let item = cart[cartIndex];
    let watchName = item.name;
    let masterStock = watchData[watchName].stock;

    if (item.quantity >= masterStock) {
        showNotification("Limit reached! We only have " + masterStock + " of those.");
        return;
    }

    item.quantity += 1;
    total += item.price;
    updateCartDisplay();
    renderCartItems();
    renderFullCartPage();
}

function decreaseCartQuantity(cartIndex) {
    let item = cart[cartIndex];

    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(cartIndex, 1);
    }
    total -= item.price;
    updateCartDisplay();
    renderCartItems();
    renderFullCartPage();
}

function subscribeNewsletter(event) {
    event.preventDefault(); 

    let emailBox = document.getElementById('newsletter-email');
    let emailText = emailBox.value.trim(); 

    if (!emailText.includes("@") || !emailText.includes(".")) {
        showNotification("Please enter a valid email address.");
        return; 
    }

    showNotification("Thank you! Exclusive offers will be sent to " + emailText);
    emailBox.value = ""; 
}

function updateAdminStock(watchName) {
    let safeID = watchName.replace(/\s+/g, '-');
    let inputField = document.getElementById(`admin-input-${safeID}`);
    
    if (!inputField) {
        console.error("Could not find input for: " + watchName);
        return;
    }

    let newStockValue = parseInt(inputField.value);

    if (isNaN(newStockValue) || newStockValue < 0) {
        showNotification("Please enter a valid stock number!");
        return;
    }

    watchData[watchName].stock = newStockValue;
    const allStock = Object.fromEntries(
    Object.keys(watchData).map(name => [name, watchData[name].stock])
    );
    localStorage.setItem('watchStock', JSON.stringify(allStock));

    loadAdminDashboard();
    showNotification(`${watchName} stock updated to ${newStockValue}!`);
}

function showAdmin() {
    if (document.getElementById('homepage')) {
        document.getElementById('homepage').style.display = 'none';
    }
    
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';

    const adminPage = document.getElementById('admin-page');
    if (adminPage) {
        adminPage.style.display = 'block';
        
        window.scrollTo(0, 0); 
    }

    loadAdminDashboard();
}

function switchAdminTab(tabName) {
    document.getElementById('admin-tab-stock').style.display = 'none';
    document.getElementById('admin-tab-orders').style.display = 'none';
    
    document.getElementById('btn-tab-stock').style.color = '#888';
    document.getElementById('btn-tab-stock').style.borderBottom = '3px solid transparent';
    document.getElementById('btn-tab-orders').style.color = '#888';
    document.getElementById('btn-tab-orders').style.borderBottom = '3px solid transparent';

    document.getElementById('admin-tab-' + tabName).style.display = 'block';
    document.getElementById('btn-tab-' + tabName).style.color = '#3b0066';
    document.getElementById('btn-tab-' + tabName).style.borderBottom = '3px solid #3b0066';

    loadAdminDashboard();
}

let currentAdminFilter = 'Gentlemen'; 

function filterAdminStock(category) {
    currentAdminFilter = category;
    
    const allBtns = ['Gentlemen', 'Ladies', 'NewArrivals'];
    allBtns.forEach(id => {
        let btn = document.getElementById('filter-' + id);
        if (btn) {
            btn.style.background = 'white';
            btn.style.color = '#888';
            btn.style.borderColor = '#eaeaea';
        }
    });

    let activeId = category === 'New Arrivals' ? 'NewArrivals' : category;
    let activeBtn = document.getElementById('filter-' + activeId);
    if (activeBtn) {
        activeBtn.style.background = '#3b0066';
        activeBtn.style.color = 'white';
        activeBtn.style.borderColor = '#3b0066';
    }

    loadAdminDashboard();
}

function loadAdminDashboard() {
    console.log("🛠️ Admin Dashboard: Refreshing data...");

    const tableBody = document.getElementById('admin-stock-list');
    const statsContainer = document.getElementById('admin-stats-container');
    
    if (tableBody && statsContainer) {
        tableBody.innerHTML = "";
        let stockIndex = 0;
        let totalProducts = 0, totalUnits = 0, lowOrOutStock = 0;
        
        for (let watchName in watchData) {
            let watch = watchData[watchName];
            let watchCategory = watch.category || "Gentlemen"; 
            
            if (watchCategory !== currentAdminFilter) continue; 

            totalProducts++;
            totalUnits += (watch.stock || 0);
            if (watch.stock <= 3) lowOrOutStock++;

            let badgeStyle = watch.stock <= 0 ? "background:#ffe5e5;color:#d63031;" : 
                             watch.stock <= 3 ? "background:#fff0d4;color:#e17055;" : 
                                                "background:#e3fcec;color:#00b894;";
            
            let badgeText = watch.stock <= 0 ? "Out of Stock" : 
                            watch.stock <= 3 ? "Low Stock" : "In Stock";

            let safeID = watchName.replace(/[^a-zA-Z0-9]/g, '-');
            let delay = stockIndex * 0.05;
            stockIndex++;
            tableBody.innerHTML += `
                <div class="admin-stock-row" style="animation-delay: ${delay}s; display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid #f9f9f9; align-items: center; padding: 15px 0;">
                    <div style="padding: 16px 25px; font-weight: 600; color: #333; font-size: 14px;">${watchName}</div>
                    <div style="padding: 16px 25px;">
                        <span style="${badgeStyle} padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">
                            ${watch.stock} — ${badgeText}
                        </span>
                    </div>
                    <div style="padding: 16px 25px; display: flex; align-items: center; gap: 10px;">
                        <input type="number" id="admin-input-${safeID}" value="${watch.stock}"
                            style="width: 60px; background: #f8f9fa; border: 1px solid #ddd; padding: 8px; border-radius: 4px; text-align: center; font-weight: bold;">
                        <button onclick="updateAdminStock('${watchName.replace(/'/g, "\\'")}')"
                                style="background: transparent; color: #3b0066; border: 1px solid #3b0066; padding: 7px 15px; cursor: pointer; font-weight: bold; border-radius: 4px; font-size: 11px; text-transform: uppercase;">
                            SAVE
                        </button>
                    </div>
                </div>`;
        }

        statsContainer.innerHTML = `
            <div style="background: white; border: 1px solid #eaeaea; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Total Products (${currentAdminFilter})</div>
                <div style="font-size: 32px; font-family: 'Cormorant Garamond', serif; color: #3b0066; font-weight: bold;">${totalProducts}</div>
            </div>
            <div style="background: white; border: 1px solid #eaeaea; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Total Units</div>
                <div style="font-size: 32px; font-family: 'Cormorant Garamond', serif; color: #3b0066; font-weight: bold;">${totalUnits}</div>
            </div>
            <div style="background: white; border: 1px solid #eaeaea; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Needs Attention</div>
                <div style="font-size: 32px; font-family: 'Cormorant Garamond', serif; color: ${lowOrOutStock > 0 ? '#d63031' : '#3b0066'}; font-weight: bold;">${lowOrOutStock}</div>
            </div>`;
    }

    const orderList = document.getElementById('admin-order-list');
    if (!orderList) {
        console.error("ERROR: Could not find 'admin-order-list' in HTML!");
        return;
    }

    const rawData = localStorage.getItem('adminHistory');
    const orders = JSON.parse(rawData || '[]');

    if (orders.length === 0) {
        const revenueDisplay = document.getElementById('admin-revenue-display');
        if (revenueDisplay) revenueDisplay.innerText = '₱0.00';
        orderList.innerHTML = `
            <div class="admin-empty-state" style="text-align: center; padding: 80px 20px;">
                <div style="margin-bottom: 25px; display: flex; justify-content: center; opacity: 0.4;">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg>
                </div>
                <h3 style="color: #3b0066; font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 400; letter-spacing: 2px; text-transform: capitalize; margin: 0 0 10px;">Your Registry is Quiet</h3>
                <p style="color: #888; font-family: 'Montserrat', sans-serif; font-size: 0.85rem; letter-spacing: 1px;">No transactions have been recorded in the archive yet.</p>
            </div>
        `;
        return;
    }

    const pesoFormat = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' });

    const safeFormat = (val) => {
        if (!val) return "₱0.00";
        if (String(val).includes('₱')) return val; 
        return pesoFormat.format(val);
    };

    const adminGrandTotal = orders.reduce((sum, order) => {
        if (order.status === 'released') return sum;
        const val = parseFloat(String(order.total).replace(/[^0-9.-]+/g, '')) || 0;
        return sum + val;
    }, 0);

    const revenueDisplay = document.getElementById('admin-revenue-display');
    if (revenueDisplay) {
        revenueDisplay.innerText = pesoFormat.format(adminGrandTotal);
    }

    let htmlContent = "";
    orders.slice().reverse().forEach((order, index) => {
        const delay = index * 0.1;
        const isReleased = order.status === 'released';

        const statusBadge = isReleased
            ? `<span style="background:#fff0f0; color:#c0392b; border:1px solid #f5c6cb; padding:3px 12px; border-radius:20px; font-size:0.65rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;">✦ Released</span>`
            : `<span style="background:#f0fff4; color:#2e7d32; border:1px solid #c8e6c9; padding:3px 12px; border-radius:20px; font-size:0.65rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;">✓ Active</span>`;

        htmlContent += `
            <div class="admin-order-card" style="animation-delay: ${delay}s; background: ${isReleased ? '#fffafa' : 'white'}; border: 1px solid ${isReleased ? '#fce4e4' : '#eee'}; border-radius: 10px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.02); opacity: ${isReleased ? '0.75' : '1'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #f9f9f9; padding-bottom: 10px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: 800; color: #3b0066; ${isReleased ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${order.id || 'ORDER'}</span>
                        ${statusBadge}
                    </div>
                    <span style="font-weight: 800; color: ${isReleased ? '#999' : '#2ed573'}; ${isReleased ? 'text-decoration: line-through;' : ''}">${safeFormat(order.total)}</span>
                </div>
                <div style="font-size: 0.85rem; color: #555; font-family: 'Montserrat', sans-serif; line-height: 1.8; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span><strong>Customer:</strong> <span style="font-weight: 400;">${order.customer || 'Valued Client'}</span></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span><strong>Address:</strong> <span style="font-weight: 400;">${order.address || 'Boutique Pickup'}</span></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-top: 5px;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <span><strong>Date:</strong> <span style="font-weight: 400; color: #888;">${order.date}</span></span>
                    </div>
                </div>
                <div style="margin-top: 15px; background: #fafafa; padding: 10px; border-radius: 5px;">
                    ${(order.items || []).map(item => `
                        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                            <span style="${isReleased ? 'text-decoration: line-through; color: #bbb;' : ''}">${item.name} (x${item.quantity})</span>
                            <span style="${isReleased ? 'text-decoration: line-through; color: #bbb;' : ''}">${safeFormat(item.price)}</span>
                        </div>
                    `).join('')}
                </div>
                ${isReleased ? `
                    <button onclick="adminRemoveOrder('${order.id}')" 
                        style="margin-top: 12px; background: transparent; border: 1px solid #ddd; color: #bbb; padding: 7px 14px; font-family: 'Montserrat', sans-serif; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 4px; display: flex; align-items: center; gap: 6px; transition: 0.3s;"
                        onmouseover="this.style.borderColor='#c0392b'; this.style.color='#c0392b';"
                        onmouseout="this.style.borderColor='#ddd'; this.style.color='#bbb';">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>
                        Remove from Registry
                    </button>
                ` : ''}
            </div>
        `;
    });

    orderList.innerHTML = htmlContent;
    console.log("✅ ORDER HISTORY RENDERED SUCCESSFULLY.");
}

function logout() {
    console.log("🔐 Admin logging out...");

    const adminPage = document.getElementById('admin-page');
    if (adminPage) adminPage.style.display = 'none';

    const home = document.getElementById('homepage');
    if (home) home.style.display = 'block';

    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'block';

    const shopHeader = document.querySelector('.main-header');
    if (shopHeader) shopHeader.style.display = 'flex';

    window.location.hash = '#shop';
    window.scrollTo(0, 0);

    showNotification("Logged out safely.");
}

function openClearHistoryModal() {
    document.getElementById('confirm-modal').style.display = 'flex';
}

function executeClearHistory() {
    localStorage.removeItem('adminHistory');
    
    closeConfirmModal();

    setTimeout(() => {
        loadAdminDashboard();
        if (typeof showNotification === 'function') {
            showNotification('Database wiped successfully.');
        }
    }, 400);
}

function closeConfirmModal() {
    const confirmModal = document.getElementById('confirm-modal');
    if (!confirmModal) return;

    confirmModal.style.transition = 'opacity 0.4s ease';
    confirmModal.style.opacity = '0';

    setTimeout(() => {
        confirmModal.style.display = 'none';
        confirmModal.style.opacity = '1';
    }, 400);
}

function cleanPrice(val) {
    if (typeof val === 'number') return val;
    let cleaned = String(val).replace(/[^0-9.]/g, '');
    return parseFloat(cleaned) || 0;
}

function openSecretAdminLogin() {
    document.getElementById('admin-login-modal').style.display = 'flex';
    
    document.getElementById('admin-secret-pass').value = ''; 
    
    const errorMsg = document.getElementById('admin-error');
    if (errorMsg) errorMsg.style.display = 'none';

    setTimeout(() => {
        document.getElementById('admin-secret-pass').focus();
    }, 100); 
}

function closeAdminLogin() {
    const adminModal = document.getElementById('admin-login-modal');
    if (!adminModal) return;

    adminModal.style.transition = 'opacity 0.4s ease';
    adminModal.style.opacity = '0';

    setTimeout(() => {
        adminModal.style.display = 'none';
        adminModal.style.opacity = '1';
    }, 400);
}

function checkAdminAccess() {
    const pass = document.getElementById('admin-secret-pass').value;
    const errorMsg = document.getElementById('admin-error');

    if (pass === 'admin123') {
        closeAdminLogin();

        const footer = document.querySelector('footer');
        if (footer) footer.style.display = 'none';

        navigateTo('admin-page', 'static-header');
        
        filterAdminStock('Gentlemen');
        loadAdminDashboard();

        showNotification("Access Granted. Ready to manage stock?");
    } else {
        errorMsg.style.display = 'block';
        document.querySelector('#admin-login-modal > div').animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });
    }
}

document.addEventListener("DOMContentLoaded", function() {
        let fadeSlides = document.querySelectorAll('.fade-slide');
        let currentFade = 0;

        setInterval(() => {
            fadeSlides[currentFade].classList.remove('active-slide');
            
            currentFade = (currentFade + 1) % fadeSlides.length;
            
            fadeSlides[currentFade].classList.add('active-slide');
        }, 5000); 
});

function showMyOrders() {
    const portfolioPage = document.getElementById('my-orders-page');
    if (portfolioPage) {
        portfolioPage.style.background = "#f8f9fa";
        portfolioPage.style.minHeight = "100vh";
    }
 
    navigateTo('my-orders-page', 'static-header');
 
    const orderList = document.getElementById('my-orders-list');
    const backBtn = document.getElementById('portfolio-back-btn');
    if (!orderList) return;
 
    const allOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]').reverse();
    const pesoFormat = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 });
 
    if (allOrders.length === 0) {
        if (backBtn) backBtn.style.display = 'none';
        orderList.innerHTML = `
            <div class="portfolio-fade-in" style="max-width: 600px; margin: 60px auto; padding: 70px 40px; background: #fff; border: 2px solid #3b0066; border-radius: 35px; text-align: center; box-shadow: 0 15px 35px rgba(0,0,0,0.05);">
                <div style="margin-bottom: 30px;">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </div>
                <h2 style="font-family: 'Cormorant Garamond', serif; color: #3b0066; font-size: 2.2rem; font-weight: 300; letter-spacing: 3px; text-transform: uppercase; margin: 0;">Your Vault is Empty</h2>
                <div style="width: 40px; height: 1px; background: #3b0066; margin: 20px auto; opacity: 0.4;"></div>
                <p style="font-family: 'Montserrat', sans-serif; color: #888; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px; line-height: 1.8;">Begin your legacy by exploring our <br> curated collection of fine timepieces.</p>
                <button onclick="showShop()" style="background: #2e004f; color: white; border: none; padding: 15px 40px; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; border-radius: 4px;">Explore Collection</button>
            </div>
        `;
        const clearBtnContainer = document.getElementById('clear-portfolio-container');
        if (clearBtnContainer) clearBtnContainer.style.display = 'none';
        return;
    }
 
    if (backBtn) backBtn.style.display = 'block';
 
    orderList.innerHTML = `
        <div class="portfolio-fade-in" style="max-width: 900px; margin: 0 auto; background: white; border: 1px solid #e0e0e0; border-radius: 15px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #f4f4f4; padding-bottom: 20px;">
                <h2 style="font-family: 'Cormorant Garamond', serif; color: #3b0066; font-size: 1.8rem; margin: 0;">Portfolio Registry</h2>
                <span style="font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                    ${allOrders.filter(o => o.status !== 'released').length} ${allOrders.filter(o => o.status !== 'released').length === 1 ? 'Order' : 'Orders'} Ongoing
                </span>
            </div>
            <div id="registry-items-container">
                ${allOrders.map(order => {
                    const orderTotal = (order.items || []).reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
                    let finalArrivalDate = order.arrivalDate;
                    if (!finalArrivalDate && order.date) {
                        let purchaseDate = new Date(order.date);
                        purchaseDate.setDate(purchaseDate.getDate() + 4);
                        finalArrivalDate = purchaseDate.toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' });
                    }
 
                    const status = order.status || 'active';
                    const isReleased = status === 'released';
                    const isPending = status === 'pending-release';
 
                    const statusBadge = isReleased
                        ? `<span style="background: #fff0f0; color: #c0392b; border: 1px solid #f5c6cb; padding: 4px 14px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-family: 'Montserrat', sans-serif;">✦ Released to Vault</span>`
                        : isPending
                        ? `<span style="background: #fff8e1; color: #b8860b; border: 1px solid #ffe082; padding: 4px 14px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-family: 'Montserrat', sans-serif;">⏳ Pending Release</span>`
                        : `<span style="background: #f0fff4; color: #2e7d32; border: 1px solid #c8e6c9; padding: 4px 14px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-family: 'Montserrat', sans-serif;">✓ Active</span>`;
 
                    const countdownBar = isPending ? `
                        <div style="margin-top: 20px; padding: 18px 20px; background: linear-gradient(135deg, #f3f0ff, #ede7f6); border-radius: 10px; border: 1px solid #4b0082;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <span style="color: #7e57c2; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase;">Release finalizing in</span>
                                <span id="release-timer-${order.id}" style="color: #7e57c2; font-weight: 700; font-size: 1rem; font-family: 'Cormorant Garamond', serif;">10s</span>
                            </div>
                            <div style="background: rgba(126, 87, 194, 0.15); border-radius: 50px; height: 4px; overflow: hidden;">
                                <div id="release-bar-${order.id}" style="height: 100%; background: linear-gradient(90deg, #7e57c2, #b39ddb); border-radius: 50px; width: 100%; transition: width 1s linear;"></div>
                            </div>
                            <button onclick="undoRelease('${order.id}')" style="margin-top: 14px; width: 100%; background: transparent; border: 1px solid #7e57c2; color: #7e57c2; padding: 10px; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 6px; transition: 0.3s;" onmouseover="this.style.background='#7e57c2'; this.style.color='white';" onmouseout="this.style.background='transparent'; this.style.color='#7e57c2';">
                                ↩ Undo Release
                            </button>
                        </div>
                    ` : '';
 
                    const releaseBtn = (!isReleased && !isPending) ? `
                        <button onclick="requestRelease('${order.id}')" 
                            style="margin-top: 15px; background: transparent; border: 1px solid #c0392b; color: #c0392b; padding: 9px 22px; font-family: 'Montserrat', sans-serif; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: 0.3s; font-weight: 600;"
                            onmouseover="this.style.background='#c0392b'; this.style.color='white';"
                            onmouseout="this.style.background='transparent'; this.style.color='#c0392b';">
                            Release Allocation
                        </button>
                    ` : '';

                    const trashBtn = isReleased ? `
                        <button onclick="deleteSingleOrder('${order.id}')" 
                            style="margin-top: 10px; background: transparent; border: 1px solid #ddd; color: #bbb; padding: 7px 14px; font-family: 'Montserrat', sans-serif; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 4px; display: flex; align-items: center; gap: 6px; transition: 0.3s;"
                            onmouseover="this.style.borderColor='#c0392b'; this.style.color='#c0392b';"
                            onmouseout="this.style.borderColor='#ddd'; this.style.color='#bbb';">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>
                            Remove from Registry
                        </button>
                    ` : ''; 
 
                    return `
                        <div style="border: 1px solid ${isReleased ? '#fce4e4' : '#f0f0f0'}; border-radius: 10px; padding: 25px; margin-bottom: 20px; background: ${isReleased ? '#fffafa' : 'white'}; opacity: ${isReleased ? '0.75' : '1'}; transition: 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                <strong style="color: #3b0066; font-size: 1.1rem; font-family: 'Montserrat', sans-serif; ${isReleased ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${order.id}</strong>
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    ${statusBadge}
                                    <span style="color: ${isReleased ? '#999' : '#28a745'}; font-weight: 700; font-size: 1.1rem; ${isReleased ? 'text-decoration: line-through;' : ''}">${pesoFormat.format(orderTotal)}</span>
                                </div>
                            </div>
                            <div style="font-size: 0.85rem; color: #555; font-family: 'Montserrat', sans-serif; line-height: 1.8; margin-bottom: 15px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <span><strong>Customer:</strong> <span style="font-weight: 400;">${order.customer || 'Valued Client'}</span></span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <span><strong>Address:</strong> <span style="font-weight: 400;">${order.address || 'Boutique Pickup'}</span></span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px; margin-top: 5px;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b0066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    <span><strong>Purchased:</strong> <span style="font-weight: 400; color: #888;">${order.date}</span></span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${isReleased ? '#999' : '#3b0066'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"></rect><path d="M16 8h4l3 3v5h-7V8z"></path><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                    <span style="color: ${isReleased ? '#999' : '#2e004f'};"><strong>Est. Arrival:</strong> <span style="font-weight: 400; color: ${isReleased ? '#999' : '#2e004f'};">${finalArrivalDate}</span></span>
                                </div>
                            </div>
                            <div style="background: #f8f9fa; padding: 12px 20px; border-radius: 6px; display: flex; justify-content: space-between; font-size: 0.85rem; font-family: 'Montserrat', sans-serif;">
                                <span style="${isReleased ? 'text-decoration: line-through; color: #bbb;' : ''}">${order.items[0]?.name} <small style="color:#999; margin-left: 5px;">(x${order.items[0]?.quantity})</small></span>
                                <strong style="${isReleased ? 'text-decoration: line-through; color: #bbb;' : ''}">${pesoFormat.format(order.items[0]?.price)}</strong>
                            </div>
                            ${countdownBar}
                            ${releaseBtn}
                            ${trashBtn}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
 
    const clearBtnContainer = document.getElementById('clear-portfolio-container');
    if (clearBtnContainer) {
        clearBtnContainer.style.display = 'none';
        clearBtnContainer.style.marginTop = '30px';
    }
}

function clearPortfolio() {
    const modal = document.getElementById('secure-clear-modal');
    const modalContent = modal.querySelector('.portfolio-fade-in');
    
    if (modal) {
        modal.style.display = 'flex';
            
        if (modalContent) {
            modalContent.classList.remove('portfolio-fade-in');
            void modalContent.offsetWidth; 
            modalContent.classList.add('portfolio-fade-in');
        }
    }
}

function closeSecureModal() {
    const modal = document.getElementById('secure-clear-modal');
    if (!modal) return;

    modal.style.transition = 'opacity 0.4s ease';
    modal.style.opacity = '0';

    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = '1';
    }, 400);
}

function confirmSecureClear() {
    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    
    const activeOrders = customerOrders.filter(o => o.status !== 'released');
    const releasedOrders = customerOrders.filter(o => o.status === 'released');

    if (releasedOrders.length === 0) {
        closeSecureModal();
        showNotification("No released allocations to clear. ✦");
        return;
    }

    localStorage.setItem('customerHistory', JSON.stringify(activeOrders));

    closeSecureModal();

    setTimeout(() => {
        showMyOrders();
        if (activeOrders.length > 0) {
            showNotification(`⚠️ ${activeOrders.length} active order(s) retained. Released allocations cleared.`);
        } else {
            showNotification("Released allocations have been securely wiped. 🔒");
        }
    }, 400);
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("currentUser")) {
        var portfolioLink = document.getElementById('nav-portfolio-link');
        if (portfolioLink) {
            portfolioLink.style.display = 'inline-block';
        }
    }
});

function requestRelease(orderId) {
    const modal = document.getElementById('release-confirm-modal');
    if (!modal) return;

    modal.dataset.orderId = orderId;
    
    modal.style.transition = "none";
    modal.style.opacity = "1";
    modal.style.display = "flex"; 

    const box = modal.querySelector('.release-modal-box');
    if (box) {
        box.style.transition = "none";
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";

        setTimeout(() => {
            box.style.transition = "opacity 0.4s ease, transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)"; 
        }, 10);
    }
}

function closeReleaseModal() {
    const modal = document.getElementById('release-confirm-modal');
    const box = modal.querySelector('.release-modal-box');
    if (!modal) return;

    if (box) {
        box.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
    }

    modal.style.transition = "opacity 0.4s ease";
    modal.style.opacity = "0";

    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = "1"; 
        if (box) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)"; 
        }
    }, 400);
}
 
function confirmRelease() {
    const modal = document.getElementById('release-confirm-modal');
    const orderId = modal.dataset.orderId;
    closeReleaseModal();
 
    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    const orderIndex = customerOrders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
 
    customerOrders[orderIndex].status = 'pending-release';
    localStorage.setItem('customerHistory', JSON.stringify(customerOrders));
 
    showMyOrders();
 
    let secondsLeft = 20;
    const bar = document.getElementById(`release-bar-${orderId}`);
    const timerText = document.getElementById(`release-timer-${orderId}`);
 
    if (bar) bar.style.width = '100%';
 
    const interval = setInterval(() => {
        secondsLeft--;
 
        if (timerText) timerText.innerText = secondsLeft + 's';
        if (bar) bar.style.width = (secondsLeft * 10) + '%';
 
        if (secondsLeft <= 0) {
            clearInterval(interval);
            delete releaseTimers[orderId];
            finalizeRelease(orderId);
        }
    }, 1000);
 
    releaseTimers[orderId] = interval;
}
 
function undoRelease(orderId) {
    if (releaseTimers[orderId]) {
        clearInterval(releaseTimers[orderId]);
        delete releaseTimers[orderId];
    }
 
    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    const orderIndex = customerOrders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        customerOrders[orderIndex].status = 'active';
        localStorage.setItem('customerHistory', JSON.stringify(customerOrders));
    }
 
    const adminOrders = JSON.parse(localStorage.getItem('adminHistory') || '[]');
    const adminIndex = adminOrders.findIndex(o => o.id === orderId);
    if (adminIndex !== -1) {
        adminOrders[adminIndex].status = 'active';
        localStorage.setItem('adminHistory', JSON.stringify(adminOrders));
    }
 
    showMyOrders();
    showNotification("Allocation retained. Your timepiece remains reserved. ✦");
}
 
function finalizeRelease(orderId) {
    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    const orderIndex = customerOrders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        customerOrders[orderIndex].status = 'released';
        localStorage.setItem('customerHistory', JSON.stringify(customerOrders));
    }
 
    const adminOrders = JSON.parse(localStorage.getItem('adminHistory') || '[]');
    const adminIndex = adminOrders.findIndex(o => o.id === orderId);
    if (adminIndex !== -1) {
        adminOrders[adminIndex].status = 'released';
        localStorage.setItem('adminHistory', JSON.stringify(adminOrders));
    }
 
    showMyOrders();
    showNotification("Allocation released. The timepiece has returned to the vault. 🏛️");
}

function deleteSingleOrder(orderId) {
    const customerOrders = JSON.parse(localStorage.getItem('customerHistory') || '[]');
    const updated = customerOrders.filter(o => o.id !== orderId);
    localStorage.setItem('customerHistory', JSON.stringify(updated));
    showMyOrders();
    showNotification("Order removed from registry. 🗑️");
}

function adminRemoveOrder(orderId) {
    const adminOrders = JSON.parse(localStorage.getItem('adminHistory') || '[]');
    const updated = adminOrders.filter(o => o.id !== orderId);
    localStorage.setItem('adminHistory', JSON.stringify(updated));
    loadAdminDashboard();
    showNotification("Order removed from registry. 🗑️");
}