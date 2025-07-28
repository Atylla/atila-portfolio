const bulletInfos = {
    sobre: [
        'Sobre mim',
        'Atila Souza, graduado em Engenharia de Software',
        'Atuo como desenvolvedor em constante aprendizado',
        'Além de web, também exploro mobile, desktop e backend'
    ],
    graduacao: [
        'Graduação',
        'Engenharia de Software - UNIGRAN',
        'Curso Tecnico de T.I - MEDIOTEC',
        'Curso de Robótica - CIA cursos'
    ],
    abordagem: [
        'Abordagem',
        'Busco entender o todo: UI, lógica, infraestrutura',
        'Gosto de criar soluções funcionais, criativas e bem pensadas',
        'Trago uma postura curiosa, analítica e proativa'
    ],
    fora: [
        'Fora do código',
        'Músico multi-instrumentista',
        'Fã de RPG e filosofia',
        'Uso essas paixões pra pensar diferente e criar com empatia'
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
