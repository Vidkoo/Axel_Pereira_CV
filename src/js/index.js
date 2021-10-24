/* Chargemenent */

// constantes qui va chercher la classe loader et la balise body
const load = document.querySelector(".loader");
const body = document.querySelector("body");

// fonction qui va permettre de creer un evenement load
window.addEventListener("load", () => {
    // creer une classe chargement et une classe scroll-active
    load.classList.add("chargement");
    body.classList.add("scroll-active");

    // fonction qui laisse le temps gerer l'animation pendant 0,5 seconde
    window.setTimeout(function () {
        // creer un display none
        load.style.display = "none";
    }, 500)
});