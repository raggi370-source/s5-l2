const nome = document.getElementById("nome");
const email = document.getElementById("email");
const select = document.getElementById("select");
const data = document.getElementById("data");


const buttone_contattami = document.querySelector(".buttone-contattami");

const overlay = document.getElementById("overlay-contattami");
const chiudi_bottne = document.getElementById("close-button");

const oggetti = {
    nome: "",
    email: "",
    select: "",
    data: "",
};


chiudi_bottne.addEventListener("click", () => {
    overlay.setAttribute("hidden", "");
})


buttone_contattami.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.removeAttribute("hidden");
})


overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.setAttribute("hidden", "");
    }
})
