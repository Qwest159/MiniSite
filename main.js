import "/style.css";
import { nav } from "./components/nav.js";
import { footer } from "./components/footer.js";

async function Page_produit() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "/minisite/api/accueil.php";
  const response = await fetch(url);
  const acceuiljson = await response.json();

  document.querySelector("#app").innerHTML = `
${nav}
<header id="accueil">
<h1>Bienvenue à PouLard</h1>
<figure>
<img src="${acceuiljson.image}" alt="">
</figure>

</header>

${footer}
 `;
}
Page_produit();
