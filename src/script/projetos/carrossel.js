export const carrossel = () => {
    const container = document.querySelector('.projetos-container');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const cards = document.querySelectorAll('.projetos');

    let currentIndex = 1;

    function centerCard(index) {
        const card = cards[index];
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;

        const scrollPosition = cardLeft - (containerWidth / 2 - cardWidth / 2);
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        centerCard(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        centerCard(currentIndex);
    });

    centerCard(currentIndex);

    
}