document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    var status = document.getElementById("formStatus");
    
    async function handleSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                "Accept": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                status.textContent = "Message envoyé avec succès !";
                status.style.color = "green";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, "errors")) {
                        status.textContent = data["errors"].map(error => error["message"]).join(", ");
                        status.style.color = "red";
                    } else {
                        status.textContent = "Oops! Il y a eu un problème lors de l'envoi.";
                        status.style.color = "red";
                    }
                })
            }
        }).catch(error => {
            status.textContent = "Oops! Il y a eu un problème lors de l'envoi.";
            status.style.color = "red";
        });
    }
    form.addEventListener("submit", handleSubmit);

    // Fonction d'animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});