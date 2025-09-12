document.addEventListener("DOMContentLoaded", () => {

    // Animation au chargement de la page
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        pageTransition.style.opacity = '1';
        setTimeout(() => {
            pageTransition.style.opacity = '0';
            pageTransition.style.visibility = 'hidden';
        }, 500);
    }
    
    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});