// import "../sreset.css";
// import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";
document.querySelector("#nav").innerHTML = `

${nav}`;

async function Page_produit() {
  let url = new URL("http://minisite.qwesty.be/");
  url.pathname = "api/maisons.php";
  const response = await fetch(url);
  const maisonsjson = await response.json();
  document.querySelector("#app").innerHTML = `


    <main id="maisons">
    <article>
    ${maisonsjson
      .map(
        (json) => `
        <section>

        <h1>${json.titre}</h1>
                <figure>
               
                  <img src="${json.photo}" alt="">
                
                  <p>${json.descriptions}</p>
                </figure>
                 
          </section>
            
        `
      )
      .join("")}
      </article>
  
      ${footer}
      </main>


`;
}
Page_produit();
