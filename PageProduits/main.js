import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";

async function Page_produit() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "/minisite/api/produit.php";
  const response = await fetch(url);
  const produitjson = await response.json();
  document.querySelector("#app").innerHTML = `
${nav}

    <main id="produits">
    ${produitjson
      .map(
        (json) => `
        <figure>
          <img src="${json.image}" alt="">
          <h3>${json.titre}</h3>
          <figcaption>${json.descriptions}</figcaption>
          </figure>
        `
      )
      .join("")}
    </main>
  

${footer}`;
}
Page_produit();
