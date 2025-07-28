const skill = {
    html5: {
        nome: 'Html5',
        progress: '90%',
        topicos: [
            'Estrutura Básica',
            'Tags Semânticas',
            'Formatação',
            'Listas',
            'Links e Navegação',
            'Imagens e Mídia',
            'Formulários',
            'Tabelas',
            'Atributos Globais'
        ]
    },
    css3: {
        nome: 'Css3',
        progress: '60%',
        topicos: [
            'Seletores básicos (classe, id, elemento)',
            'Box Model (margin, padding, border, content)',
            'Display (block, inline, inline-block, none)',
            'Posicionamento (relative, absolute, fixed)',
            'Flexbox (conceito e propriedades principais)',
            'Cores, fontes e background',
            'Pseudo-classes e pseudo-elementos',
            'Transições simples e hover',
        ]
    },
    javascript: {
        nome: 'JavaScript',
        progress: '70%',
        topicos: [
            'Variáveis (let, const, var)',
            'Tipos de dados e operadores',
            'Funções (declarativas, expressões e arrow)',
            'Condicionais e loops',
            'Manipulação de DOM (querySelector, addEventListener)',
            'Eventos e interatividade básica',
            'Arrays e objetos (e métodos comuns)',
            'Funções de ordem superior (map, filter, reduce)',
            'JSON e armazenamento local (localStorage)',
        ]
    },
    git: {
        nome: 'Git',
        progress: '50%',
        topicos: [
            'Git init e Git clone',
            'Git add, commit e status',
            'Git log e histórico de commits',
            'Branches: criação, merge e switch',
            'Git diff e git checkout',
        ]
    },
    github: {
        nome: 'GitHub',
        progress: '50%',
        topicos: [
            'Criação de repositório remoto',
            'Conectar repositório local ao GitHub (origin)',
            'Push e pull',
            'Fork e clone de projetos',
            'GitHub Pages (deploy básico)',
        ]
    },
    reactNative: {
        nome: 'React Native',
        progress: '50%',
        topicos: [
            'Criação de projeto com Expo',
            'Componentes funcionais',
            'JSX básico',
            'Uso de `useState`',
            'Estilização com StyleSheet',
            'ScrollView e FlatList',
            'Navigation básica (StackNavigation)',
        ]
    },
    electron: {
        nome: 'Electron',
        progress: '60%',
        topicos: [
            'Estrutura básica de projeto (main e renderer)',
            'Criação de janela (BrowserWindow)',
            'Integração com HTML/CSS/JS',
            'Main vs Renderer process',
            'IPC (comunicação entre processos)',
            'Build e empacotamento com Electron Forge ou Builder',
        ]
    }
}
    

export const skills = () => {

    const container = document.querySelector('.description-skills');
    const titulo = document.querySelector('.skill-nome');
    const barProgress = document.querySelector('.progress-bar');
    const progresso = document.querySelector('.progress');
    const wrapTopico = document.querySelector('.topico-wrap');
    
    let item = skill['javascript']; 

    if (item) {
        titulo.innerText = item.nome;
        progresso.style.width = item.progress;
        wrapTopico.innerHTML = '';

        item.topicos.forEach(i => {
            const topico = document.createElement('p');
            topico.innerText = i;
            wrapTopico.appendChild(topico);
        });
    }

    document.querySelectorAll('.skill-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const data = icon.getAttribute('data-skill');
            const skIcon = icon.querySelector('.sk-icon');

            item = skill[data];
            wrapTopico.innerHTML = '';

            document.querySelectorAll('.sk-icon.show').forEach(el => {
                el.classList.remove('show');
            });

            if(item) {
                titulo.innerText = item.nome

                progresso.style.width = item.progress;


                item.topicos.forEach(i => {
                    const topico = document.createElement('p');

                    topico.innerText = i;

                    wrapTopico.appendChild(topico);
                })
            }

            skIcon.classList.add('show');
        })
    })
}

