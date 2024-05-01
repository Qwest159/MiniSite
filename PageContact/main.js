import "../style.css";
import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";

function formulaire() {
  document.querySelector("#app").innerHTML = `
${nav} `;
  const formHtml = ` 
<form id="contactForm" method="POST">

    <label for="nom">Votre Nom :</label> 
    <input type="text" name="Nom" id="nom" placeholder="Votre Nom" value="">
    <p class="erreur"> <?php echo $args["erreurs"]["Nom"] ?? '' ?></p>

    <label for="prenom"> Votre Prénom :</label>
    <input type="text" name="Prenom" id="prenom" placeholder="Votre Prénom" value="<?php echo $args["valeurNetoyee"]["Prénom"] ?? '' ?>">
    <p class="erreur"><?php echo $args["erreurs"]["Prénom"] ?? '' ?></p>

    <label for="emaille">Adresse émail :</label>
    <input type="email" name="Email" id="emaille" placeholder="Adresse @ " value=" dingomax2@hotmail.com ">
    <p class="erreur"><?php echo $args["erreurs"]["Email"] ?? '' ?></p>

    <label for="message">Votre message:</label><br><textarea name="Message" id="message" cols="30" rows="10"><?php echo $args["valeurNetoyee"]["Message"] ?? '' ?></textarea>
    <p class="erreur"><?php echo $args["erreurs"]["Message"] ?? '' ?></p>

    <input type="submit" value="Envoier">
</form>
${footer}`;
  document.querySelector("#app").innerHTML += formHtml;

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      let url = new URL(import.meta.env.VITE_API_URL);
      url.pathname = "/minisite/api/formulaire.php";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      //   alert("Message envoyé !");
      e.target.reset();
    })`

`;
}
formulaire();
