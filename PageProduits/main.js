// import "../sreset.css";
import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";
document.querySelector("#nav").innerHTML = `

${nav}`;

async function Page_produit() {
  let url = new URL(import.meta.env.VITE_API_URL) + "/minisite/api/produit.php";

  const response = await fetch(url);
  const produitjson = await response.json();

  document.querySelector("#app").innerHTML = `


    <main id="produits">



    <h1>Votre Baguette</h1>
        <article>
            
        ${produitjson["arme"]
          .map(
            (json) => `
          
            <section>
                  <figure>
                    <img src="${json.image}" alt="">
                  </figure>
                    <h2>${json.titre}</h2>
                    <p>${json.descriptions}</p>
              </section>
            `
          )
          .join("")}
          </article>
      
      <h1>Vos Vêtements</h1>
          <article>
          
            ${produitjson["vet"]
              .map(
                (json) => `
              
                <section>
                      <figure>
                        <img src="${json.image}" alt="">
                      </figure>
                        <h2>${json.titre}</h2>
                        <p>${json.descriptions}</p>
                  </section>
                `
              )
              .join("")}
          </article> 

          </article>
      
          <h1>Les Accessoires</h1>
              <article>
              
                ${produitjson["objets"]
                  .map(
                    (json) => `
                  
                    <section>
                          <figure>
                            <img src="${json.image}" alt="">
                          </figure>
                            <h2>${json.titre}</h2>
                            <p>${json.descriptions}</p>
                      </section>
                    `
                  )
                  .join("")}
              </article> 

   





    </main>
  

${footer}`;
}
Page_produit();
