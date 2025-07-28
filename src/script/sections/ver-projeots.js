export const verProjetos = () => {
    const btn = document.querySelector('.ver-projetos');

    btn.addEventListener('click', () => {
        const section = document.getElementById('section-3');

        if (section) {
            const yOffset = -75;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    })


}