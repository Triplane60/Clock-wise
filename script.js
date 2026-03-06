function filterCategory(category) {
    const cards = document.querySelectorAll('.watch-card');
    const buttons = document.querySelectorAll('.nav-item');


    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block'; 
        } else if (card.classList.contains(category)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';  
        }
    });
}