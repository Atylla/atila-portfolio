const bulletInfos = {
    sobre: [
        'Sobre mim',
        'Apaixonado por tecnologia',
        'Criativo',
        'Muito bom'
    ],
    graduacao: [
        'Graduação',
        'Engenharia de Software - UNIGRAN',
        'Curso Tecnico de T.I - MEDIOTEC',
        'Curso de Robótica - CIA cursos'
    ],
    abordagem: [
        'Abordagem',
        'Soluções criativas com foco em usabilidade'
    ],
    fora: [
        'Fora do código',
        'Filosofia',
        'RPG',
        'Musico'
    ]

}

export const btnCircle = () => {
    const btn = document.querySelector('.circulo');
    const boxIcons = document.querySelector('.container-icons');
    const icons = document.querySelectorAll('.icon');
    const bulletPoint = document.getElementById('bullet-point');
    const bpBefore = document.querySelector('.bullet-point');

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
            boxIcons.classList.remove('visible');
        } else {
            btn.classList.remove('hovered');
            btn.classList.add('circulo-click');
            boxIcons.classList.add('visible');
        }
    })

    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !boxIcons.contains(e.target)) {
            btn.classList.remove('circulo-click');
            boxIcons.classList.remove('visible');
            bulletPoint.classList.remove('show');
            bulletPoint.innerHTML = '';
        }
    });

    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const categoria = icon.id || icon.classList[1];
            const infos = bulletInfos[categoria];

            if (infos && infos.length > 0) {
                const primeiro = `<span class="info-destaque">${infos[0]}</span>`;
                const restantes = infos.slice(1).map(info => `• ${info}`).join('<br>');

                bulletPoint.innerHTML = [primeiro, restantes].filter(Boolean).join('<br>');
            } else {
                bulletPoint.textContent = '• Sem informações.';
            }

            bulletPoint.classList.remove('show');

            void bulletPoint.offsetWidth;

            bulletPoint.classList.add('show');
        });
    });
}
