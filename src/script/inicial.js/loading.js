export const loadingInitial = () => {
    /*
    const tela = document.querySelector('body');
    const load = document.createElement('div');
    const barra = document.createElement('span');
    const p = document.createElement('p');

    p.innerText = 'Carregando';
    load.appendChild(p);
    load.appendChild(barra);

    load.classList.add('loading-initial');
    p.classList.add('texto-loading');
    barra.classList.add('barra-loading');

    tela.append(load);
    */
   const load = document.querySelector('.loading-initial');

    setTimeout(() => {
        load.classList.add('fade-out');

        setTimeout(() => {
            load.remove();
        }, 500);
    }, 3000);
}

