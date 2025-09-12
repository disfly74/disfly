// Fonction pour gérer l'apparition des éléments
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}

// Options de l'observateur
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

// Créer un nouvel observateur
const observer = new IntersectionObserver(handleIntersection, options);

// Cibler tous les éléments avec la classe 'hidden'
document.querySelectorAll('.hidden').forEach(element => {
    observer.observe(element);
});