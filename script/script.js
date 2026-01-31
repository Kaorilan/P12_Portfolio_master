// Fonction pour ajouter la classe "navbarDark" à la navbar quand on descend
function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            navbar.classList.add("navbarDark");
        } else {
            navbar.classList.remove("navbarDark");
        }
    });
}

// Fonction pour fermer automatiquement le menu mobile après un clic sur un lien
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
}

// Chargement et affichage des compétences depuis le fichier JSON
function createSkillsFromJSON() {
    const container = document.querySelector("#skills-container");
    
    fetch("data/skills.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP lors du chargement de skills.json : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Pour chaque compétence, on crée une colonne Bootstrap
            data.forEach(item => {
                const col = document.createElement("div");
                col.className = "col-lg-4 col-md-6 mt-4";
                
                col.innerHTML = `
                    <div class="card skillsText h-100 text-center">
                        <div class="card-body">
                            <img 
                                src="images/${item.image}" 
                                alt="Logo ou illustration de la compétence ${item.title}" 
                                class="mb-3" 
                                loading="lazy" 
                                width="120" 
                                height="120"
                            >
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text">${item.text}</p>
                        </div>
                    </div>
                `;
                
                // Ajout direct de la colonne au container (pas besoin de row intermédiaire)
                container.appendChild(col);
            });
        })
        .catch(err => {
            console.error("Erreur lors du chargement des compétences :", err);
            // Optionnel : afficher un message d'erreur visible sur la page
            container.innerHTML = '<p class="text-danger text-center">Erreur de chargement des compétences. Veuillez réessayer plus tard.</p>';
        });
}

// Chargement et affichage des projets depuis le fichier JSON
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio-container");
    
    fetch("data/portfolio.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP lors du chargement de portfolio.json : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Pour chaque projet, on crée une colonne Bootstrap
            data.forEach(item => {
                const col = document.createElement("div");
                col.className = "col-lg-4 col-md-6 mt-4";
                
                col.innerHTML = `
                    <div class="card portfolioContent h-100">
                        <img 
                            src="images/${item.image}" 
                            class="card-img-top" 
                            alt="Illustration du projet ${item.title}" 
                            loading="lazy" 
                            width="100%" 
                            height="200"
                        >
                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text flex-grow-1">${item.text}</p>
                            <div class="text-center mt-3">
                                <a href="${item.link}" class="btn btn-success" target="_blank" rel="noopener">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                `;
                
                // Ajout direct de la colonne au container
                container.appendChild(col);
            });
        })
        .catch(err => {
            console.error("Erreur lors du chargement du portfolio :", err);
            // Optionnel : message d'erreur visible
            container.innerHTML = '<p class="text-danger text-center">Erreur de chargement des projets. Veuillez réessayer plus tard.</p>';
        });
}

// Lancement de toutes les fonctions une fois la page chargée
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();