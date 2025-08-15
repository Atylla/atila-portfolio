export const sectionFocus = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const navButton = document.querySelector(`.nav-btn[data-nav="${id}"]`);


                if (entry.isIntersecting) {
                    entry.target.classList.add('middle');
                    if(navButton) {
                        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                        navButton.classList.add('active');
                    }
                } else {
                    entry.target.classList.remove('middle');
                }
            });
        },
        {
            root: null,
            threshold: 0.70
        }
    );

    document.querySelectorAll('.bloco').forEach(section => {
        observer.observe(section);
    });
}