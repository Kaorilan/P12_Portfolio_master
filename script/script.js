// Fonction pour ajouter la classe "navbarDark" à la navbar quand on descend
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Fonction pour gérer la fermeture du menu sur mobile après un clic sur un lien
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Ferme le menu collapse Bootstrap
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Fonction pour créer dynamiquement les cartes de compétences à partir du fichier JSON
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Chargement du fichier JSON des compétences
    fetch("data/skills.json")
        .then(response => {
            // Vérifie si la réponse est correcte (code 200)
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de skills.json");
            }
            return response.json();
        })
        .then(data => {
            data.forEach((item, index) => {
                // Création d'une carte Bootstrap pour chaque compétence
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" />
                            <h4 class="card-title mt-3">${item.title}</h4>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Ajoute la carte à la ligne en cours
                row.appendChild(card);

                // Tous les 3 éléments ou à la fin → on ajoute la ligne au container
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    // On crée une nouvelle ligne vide pour la suite
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });

            // IMPORTANT : on ajoute la dernière ligne même si elle n'est pas complète (1 ou 2 cartes)
            if (row.children.length > 0) {
                container.appendChild(row);
            }
        })
        .catch(err => {
            console.error("Erreur lors du chargement des compétences :", err);
        });
}

// Fonction pour créer dynamiquement les cartes du portfolio à partir du fichier JSON
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Chargement du fichier JSON du portfolio
    fetch("data/portfolio.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de portfolio.json");
            }
            return response.json();
        })
        .then(data => {
            data.forEach((item, index) => {
                // Création d'une carte Bootstrap pour chaque projet
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                        <img class="card-img-top" src="images/${item.image}" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="card-text">${item.text}</p>
                            <div class="text-center">
                                <a href="${item.link}" class="btn btn-success">Lien</a>
                            </div>
                        </div>
                    </div>
                `;

                // Ajoute la carte à la ligne en cours
                row.appendChild(card);

                // Tous les 3 éléments ou à la fin → on ajoute la ligne au container
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    // Nouvelle ligne vide pour la suite
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });

            // IMPORTANT : ajoute la dernière ligne même si elle contient moins de 3 cartes
            if (row.children.length > 0) {
                container.appendChild(row);
            }
        })
        .catch(err => {
            console.error("Erreur lors du chargement du portfolio :", err);
        });
}

// Lancement de toutes les fonctions au chargement de la page
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();