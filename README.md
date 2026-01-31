# Portfolio - Laurie Pfeffer

Portfolio personnel testeuse logiciel junior, créé avec HTML, CSS et JavaScript.

[Portfolio en ligne](https://kaorilan.github.io/Portfolio/)


## Aperçu

Site présentant mon parcours, mes compétences et mes projets réalisés.  
Design moderne, responsive, avec chargement dynamique des sections "Compétences" et "Portfolio" depuis des fichiers JSON.

![Capture d'écran du portfolio](images/screenshot.png)  



## Fonctionnalités

1. Navigation (Navbar)

Barre de navigation fixe en haut de page (fixed-top)
Effet visuel au scroll : fond semi-transparent violet-violet foncé (rgba(138, 43, 226, 0.18)) dès 100px de scroll
Menu burger responsive (Bootstrap) qui se ferme automatiquement après clic sur un lien (mobile)
Liens : Accueil, À propos, Compétences, Portfolio, Contact
Design arrondi et légèrement transparent sur mobile (navbar-collapse avec bordure et ombre)

2. Hero / Accueil

Pleine hauteur (100vh, max 900px) avec image de fond (images/background.jpg)
Titre principal animé ("Portfolio Laurie") en bleu cyan (#40d2e1)
Sous-titre descriptif avec tes compétences clés
Texte centré avec léger décalage à gauche (left: 30%) sur desktop, recentré et agrandi sur mobile
Soulignement décoratif violet sous le titre

3. Section À propos

Photo circulaire avec effet 3D (rotateY) et ombre portée
Bio courte + liste d’informations personnelles (nom, localisation, formation, email, GitHub, LinkedIn)
Mise en page responsive : photo à gauche + texte à droite sur grand écran, empilé sur mobile
Titres de section avec fond dégradé violet + soulignement décoratif

4. Section Compétences

Chargement dynamique depuis data/skills.json via fetch JavaScript
Affichage en cartes Bootstrap (3 par ligne sur desktop, 2 ou 1 sur mobile)
Chaque carte contient : logo compétence (image), titre, description courte
Effet hover : bordure violette + léger soulèvement (translateY)
Conteneur responsive avec marges et padding adaptés

5. Section Portfolio

Chargement dynamique depuis data/portfolio.json via fetch JavaScript
Affichage en cartes Bootstrap (3 par ligne sur desktop)
Chaque carte contient : image projet, titre, description, bouton "Voir le projet" (lien externe)
Effet hover : bordure violette + soulèvement
Images responsives avec hauteur fixe (200px) et object-fit

6. Section Contact

Trois colonnes centrées (Téléphone, Email, LinkedIn)
Icônes Font Awesome grandes (fa-3x) en blanc sur fond sombre
Liens cliquables (mailto: et LinkedIn externe)
Design sombre contrasté avec texte blanc

7. Footer

Fond violet foncé semi-transparent
Mention copyright + liens Contact et GitHub
Texte centré et responsive

8. Design & Responsive global

Palette violet / cyan / sombre moderne et élégante
Titres de section avec dégradé violet + soulignement décoratif
Effets hover subtils sur cartes (bordure + translateY)
Responsive total (Bootstrap + media queries personnalisées)
Optimisation mobile : tailles de police réduites, hero ajusté, navbar collapse stylé
Accessibilité de base : alt sur images, loading="lazy", contrastes corrects

9. Performances & bonnes pratiques

Chargement asynchrone des JSON (fetch)
Images avec loading="lazy"
Utilisation CDN pour Bootstrap et Font Awesome (rapide)
Pas de frameworks lourds (vanilla JS + Bootstrap)

## Technologies utilisées

- HTML5  
- CSS3 + Bootstrap 5.1.3  
- JavaScript (vanilla)  
- Font Awesome 6 (icônes)  
- JSON pour les données dynamiques  
- GitHub Pages (hébergement)

## Structure du projet

portfolio/
├── index.html              # Page principale
├── style.css               # Styles personnalisés
├── script/
│   └── script.js           # Logique JS (navbar, JSON loading, etc.)
├── data/
│   ├── skills.json         # Données compétences
│   └── portfolio.json      # Données projets
├── images/                 # Images (person.png, compétences, projets, etc.)
└── README.md




