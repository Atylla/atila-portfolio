export const sectionFocus = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('middle');
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