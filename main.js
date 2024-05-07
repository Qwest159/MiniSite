// import "./sreset.css";
// import "./style.css";

import { nav } from "./components/nav.js";
import { footer } from "./components/footer.js";
document.querySelector("#nav").innerHTML = `

${nav}`;

async function accueil() {
  // urlPage = window.location.href;
  // let url = new URL("http://minisite.qwesty.be/");
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "api/accueil.php";
  const response = await fetch(url);
  const acceuiljson = await response.json();

  document.querySelector("#app").innerHTML = `

<header id="accueil">
<h1>Bienvenue à l'école non-magique de PouLard</h1>

<figure id="figure">
<img src="${acceuiljson.image}"  id="tourne"  alt="">
</figure>

</header>

<main>
        <p>
          Cette école (unique au monde) est la meilleure que vous pouvez trouver pour
          votre enfant !
        </p>

        <p>Première chose à faire : Choisis ta <strong><a href="/PageMaisons/">maison</a></strong></p>

        <p>Deuxième chose à faire: Regarde tes futurs <strong><a href="/PageEquipe/">amis</a></strong></p>

        <p>Ensuite choisis dans notre large catalogue ses <strong><a href="/PageProduits/">équipements</a></strong></p>

        <p>
          Te voilà prêt,si tu as toujours envie de
          devenir un vrai non-magicien, alors <strong><a href="/PageContact/">inscris-toi !</a></strong> 
        </p>

</main>


${footer}
 `;
}

accueil();
