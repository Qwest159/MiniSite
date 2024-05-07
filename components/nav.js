let pageactuelle = location.pathname;
console.log(pageactuelle);
const urls = [
  { url: "/", nom: "Accueil" },
  { url: "/PageMaisons/", nom: "Maisons" },
  { url: "//PageProduits//", nom: "Produits" },
  { url: "/PageEquipe/", nom: "Equipe" },
  { url: "/PageContact/", nom: "Contact" },
];
export const nav = `
      <nav id="nav">
        <ul>
          <a href="/"><img src="/storage/img/imgaccueil/logo.png" alt=""></a>
          ${urls
            .map(
              (url) =>
                `
            <li><a class="${pageactuelle == url.url ? "active" : ""}" href=${
                  url.url
                }>${url.nom} </a></li>`
            )
            .join("")}
        </ul>
      </nav>
    `;

// document.addEventListener("DOMContentLoaded", function () {
//   // Récupère le chemin de la page actuelle
//   let pageactuelle = location.pathname;

//   // Sélectionne tous les liens dans la navigation
//   var lien = document.querySelectorAll("nav a");

//   // Parcourt chaque lien pour ajouter la classe active à celui correspondant à la page actuelle
//   lien.forEach(function (a) {
//     if (a.getAttribute("href") === pageactuelle) {
//       a.classList.add("active");
//     }
//   });
// });
