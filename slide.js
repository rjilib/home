window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.aboutme, .job, .job2, .abilities, .job');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            section.classList.add('active');
        }
    });
});
