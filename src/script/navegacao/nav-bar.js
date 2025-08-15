export const navBar = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const dataNav = btn.getAttribute('data-nav');
            const section = document.getElementById(dataNav);

            if (section) {
                const yOffset = -75;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        })
    })
}

export const toggleInterruptor = () => {
    const toggle = document.querySelector('.toggleDark');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        const isDark = savedTheme === 'dark';
        toggle.classList.toggle('dark', isDark);
        document.body.classList.toggle('dark-mode', isDark);
    } else {
        const prefersDark = mediaQuery.matches;
        toggle.classList.toggle('dark', prefersDark);
        document.body.classList.toggle('dark-mode', prefersDark);
    }

    mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            toggle.classList.toggle('dark', e.matches);
            document.body.classList.toggle('dark-mode', e.matches);
        }
    });

    toggle.addEventListener('click', () => {
        const isDark = toggle.classList.toggle('dark');
        document.body.classList.toggle('dark-mode', isDark);

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
};
