// Fonction pour gérer l'apparition des éléments
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Arrête d'observer une fois l'élément affiché
        }
    });
}

// Options de l'observateur
const options = {
    root: null, // La fenêtre du navigateur
    rootMargin: '0px',
    threshold: 0.2 // Déclenche l'animation quand 20% de l'élément est visible
};

// Créer un nouvel observateur
const observer = new IntersectionObserver(handleIntersection, options);

// Cibler tous les éléments avec la classe 'hidden'
document.querySelectorAll('.hidden').forEach(element => {
    observer.observe(element);
});