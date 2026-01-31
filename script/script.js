// Navbar sombre au scroll
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

// Fermeture menu mobile après clic
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

// Chargement compétences depuis JSON
function createSkillsFromJSON() {
    const container = document.querySelector("#skills-container");
    fetch("data/skills.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const col = document.createElement("div");
                col.className = "col-lg-4 col-md-6 mt-4";
                col.innerHTML = `
                    <div class="card skillsText h-100 text-center">
                        <div class="card-body">
                            <img src="images/${item.image}" alt="${item.title} logo" class="mb-3" loading="lazy" width="120" height="120">
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text">${item.text}</p>
                        </div>
                    </div>
                `;
                container.appendChild(col);
            });
        })
        .catch(err => console.error("Erreur chargement skills.json", err));
}

// Chargement projets depuis JSON
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio-container");
    fetch("data/portfolio.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const col = document.createElement("div");
                col.className = "col-lg-4 col-md-6 mt-4";
                col.innerHTML = `
                    <div class="card portfolioContent h-100">
                        <img src="images/${item.image}" class="card-img-top" alt="${item.title}" loading="lazy" width="100%" height="200">
                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text flex-grow-1">${item.text}</p>
                            <div class="text-center mt-3">
                                <a href="${item.link}" class="btn btn-success" target="_blank" rel="noopener">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(col);
            });
        })
        .catch(err => console.error("Erreur chargement portfolio.json", err));
}

// Lancement
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();