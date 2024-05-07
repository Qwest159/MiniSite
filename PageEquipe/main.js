// import "../sreset.css";
// import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer";

document.querySelector("#nav").innerHTML = nav;

async function equipe() {
  let url = new URL("http://minisite.qwesty.be/");
  url.pathname = "api/equipe.php";
  const response = await fetch(url);
  const equijson = await response.json();

  document.querySelector("#app").innerHTML = `

<main id="equipe" class="flex">
  ${equijson
    .map(
      (equipe) => `
          <section class="${equipe.class}">
          
            <figure>
              <img src="${equipe.photo}" alt="">
            </figure>

            <div>
              <h2>${equipe.nom}</h2>
              <p>${equipe.descriptions}</p>
            </div>
 
            <figure>
              <img src="${equipe.maisonphoto}" alt="">
              <figcaption class="${equipe.class}">${equipe.maisonnom}</figcaption>
            </figure>

          </section>
   `
    )

    .join("")}
    </main>`;
  footer;
}
equipe();
