export const btnCircle = () => {
    const btn = document.querySelector('.circulo');

    btn.addEventListener('mouseenter', () => {
        if (!btn.classList.contains('circulo-click')) {
            btn.classList.add('hovered');
        }
    });

    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hovered')
    })

    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        if (btn.classList.contains('circulo-click')) {
            btn.classList.remove('circulo-click');
        } else {
            btn.classList.remove('hovered');
            btn.classList.add('circulo-click');
        }
    })

    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target)) {
            btn.classList.remove('circulo-click');
        }
    })
}