import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer";

async function equipe() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "/minisite/api/equipe.php";
  const response = await fetch(url);
  const equijson = await response.json();

  document.querySelector("#app").innerHTML = `
${nav}
<main id="equipe">
  ${equijson
    .map(
      (equipe) => `

            <figure>
            <img src="${equipe.photo}" alt="">
            <p>${equipe.nom}</p>


     
            <p>${equipe.descriptions}</p>

            
            <img src="${equipe.maisonphoto}" alt="">
            <figcaption class="${equipe.class}">${equipe.maisonnom}</figcaption>
            </figure>
   `
    )

    .join("")}
    </main>
${footer}`;
}
equipe();
