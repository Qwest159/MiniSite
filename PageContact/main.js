import "../sreset.css";
import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";

function contacts(err = undefined, echap = undefined) {
  document.querySelector("#app").innerHTML = `
    ${nav} 
    <main id="contact">
    <form id="contactForm" method="POST">
    <section class="classic">
        <label for="Nom">Votre Nom :</label> 
        <input type="text" name="Nom" id="Nom" placeholder="Votre Nom" value="">
        <p id="err_Nom" class="erreur"></p>
      </section>

      <section class="classic">
        <label for="Prenom"> Votre Prénom :</label>
        <input type="text" name="Prenom" id="Prenom" placeholder="Votre Prénom" value="">
        <p id="err_Prenom" class="erreur"></p>
        </section>

        <section class="classic">
        <label for="Email">Adresse émail :</label>
        <input type="email" name="Email" id="Email" placeholder="Adresse @ " value="">
        <p  id="err_Email" class="erreur"></p>
        </section>

        <section id="message">
        <label for="Message">Votre message:</label><br><textarea name="Message" id="Message" cols="30" rows="10"></textarea>
        <p  id="err_Message" class="erreur"></p>
        </section>

        <section>
        <input type="submit" value="Envoier">
        </section>

    </form>
      </main>
    ${footer}
  
  `;

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      let url = new URL(import.meta.env.VITE_API_URL);
      url.pathname = "/minisite/api/formulaire.php";
      let test = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const args = await test.json();

      if (args !== null) {
        let erreurs = args["erreurs"];
        let valeurNetoyee = args["valeurNetoyee"];
        let clés = Object.keys(valeurNetoyee);
        clés.forEach((cle) => {
          let id = "#err_" + cle;
          if (erreurs[cle]) {
            document.querySelector(id).innerText = erreurs[cle];
          } else {
            document.querySelector(id).innerText = "";
          }
        });
      } else {
        alert("Non mais oh, tu y croyais vraiment en la magie?");
        e.target.reset();
      }
    });
}
contacts();
