export const nav = `
      <nav id="nav">
        <ul>
          <a href="/"><img src="/storage/img/imgaccueil/logo.png" alt=""></a>
          <li><a href="/">Accueil</a></li>
          <li><a href="/PageMaisons/">Maisons</a></li>
          <li><a href="/PageProduits/">Produit</a></li>
          <li><a href="/PageContact/">Contact</a></li>
          <li><a href="/PageEquipe/">Equipe</a></li>
        </ul>
      </nav>
    `;

document.addEventListener("DOMContentLoaded", function () {
  // Récupère le chemin de la page actuelle
  let pageactuelle = location.pathname;

  // Sélectionne tous les liens dans la navigation
  var lien = document.querySelectorAll("nav a");

  // Parcourt chaque lien pour ajouter la classe active à celui correspondant à la page actuelle
  lien.forEach(function (a) {
    if (a.getAttribute("href") === pageactuelle) {
      a.classList.add("active");
    }
  });
});
