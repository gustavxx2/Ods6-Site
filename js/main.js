const btn = document.querySelector("#theme-toggle");
const icone = btn.querySelector("i");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
        icone.classList.replace("fa-moon", "fa-sun");
    } else {
        icone.classList.replace("fa-sun", "fa-moon");
    }
});

const contador = document.querySelector("#contador");

let i = 0;
const alvo = 2;

const intervalo = setInterval(() => {
    i++;
    contador.textContent = i;

    if (i >= alvo) clearInterval(intervalo);
}, 800);
