export const btnCircle = () => {
    const btn = document.querySelector('.circulo');

    btn.addEventListener('mouseenter', () => {
        btn.classList.add('hovered');
    })
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hovered')
    })

    btn.addEventListener('click', (e) => {
        console.log('clicado');
        e.stopPropagation();

        btn.classList.remove('hovered');
        btn.classList.add('circulo-click');
    })

    document.addEventListener('click', (e) => {
        if(!btn.contains(e.target)) {
            btn.classList.remove('circulo-click');
        }
    })
}