const skill = {
    html5: {
        nome: 'Html5',
        progress: '90%',
        topicos: [
            'Domínio de estrutura semântica',
            'Criação e organização de layouts',
            'Formulários funcionais e tabelas',
            'Links, listas e navegação eficaz',
            'Incorporação de imagens e mídia',
            'Uso correto de atributos globais'
        ]
    },
    css3: {
        nome: 'Css3',
        progress: '60%',
        topicos: [
            'Seletores e hierarquia avançada',
            'Controle do Box Model e posicionamento',
            'Layouts com Flexbox e Grid',
            'Estilização responsiva e cores',
            'Pseudo-classes e pseudo-elementos',
            'Transições e animações básicas'
        ]
    },
    javascript: {
        nome: 'JavaScript',
        progress: '70%',
        topicos: [
            'Manipulação de variáveis e tipos',
            'Funções declarativas e arrow',
            'Controle de fluxo: loops e condicionais',
            'Manipulação do DOM e eventos',
            'Arrays e objetos com métodos avançados',
            'Funções de ordem superior (map, filter, reduce)',
            'Trabalho com JSON e localStorage'
        ]
    },
    git: {
        nome: 'Git',
        progress: '50%',
        topicos: [
            'Gerenciamento de repositórios locais',
            'Controle de commits e histórico',
            'Criação e fusão de branches',
            'Diferenças de código e restauração',
            'Fluxos de trabalho colaborativos'
        ]
    },
    github: {
        nome: 'GitHub',
        progress: '50%',
        topicos: [
            'Criação e gerenciamento de repositórios remotos',
            'Integração com repositórios locais',
            'Push, pull e sincronização de código',
            'Fork, clone e contribuições externas',
            'Deploy de projetos com GitHub Pages'
        ]
    },
    react: {
        nome: 'React',
        progress: '63%',
        topicos: [
            'Criação de componentes funcionais e JSX',
            'Uso de props para comunicação entre componentes',
            'Gerenciamento de estado local com useState',
            'Manipulação de eventos e inputs controlados',
            'Renderização de listas com map e uso correto de keys',
            'Estilização de componentes com styled-components',
            'Chamadas a APIs com fetch ou axios dentro de useEffect',
            'Hooks básicos: useEffect para efeitos colaterais simples',
            'Conhecimento inicial de TypeScript com tipagem de props e estados simples',
            'Construção de formulários funcionais e validação básica no front-end'
        ]
    },
    reactNative: {
        nome: 'React Native',
        progress: '50%',
        topicos: [
            'Configuração de projetos com Expo',
            'Componentes funcionais e JSX',
            'Gerenciamento de estado com useState',
            'ScrollView, FlatList e navegação básica',
            'Estilização com StyleSheet'
        ]
    },
    electron: {
        nome: 'Electron',
        progress: '60%',
        topicos: [
            'Estrutura básica main e renderer',
            'Criação de janelas com BrowserWindow',
            'Integração HTML, CSS e JS',
            'Comunicação entre processos (IPC)',
            'Empacotamento com Electron Forge ou Builder'
        ]
    }
}


export const skills = () => {

    const titulo = document.querySelector('.skill-nome');
    const progresso = document.querySelector('.progress');
    const wrapTopico = document.querySelector('.topico-wrap');
    const btnVerProjetos = document.querySelector('.ver-projetos');

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

        btnVerProjetos.setAttribute('data-filter', 'javascript');
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

            btnVerProjetos.setAttribute('data-filter', data);

            if (item) {
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

