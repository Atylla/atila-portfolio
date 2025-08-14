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

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('dark');
        document.body.classList.toggle('dark-mode');
    })
}