const banho = document.querySelector("#controleBanho");
const descarga = document.querySelector("#controleDescargas");
const escovacao = document.querySelector("#controleEscovacao");

const total = document.querySelector("#totalLitros");
const barra = document.querySelector("#barraPreenchimento");
const texto = document.querySelector("#comparacao");

function calcular() {
  const litros =
    banho.value * 12 +
    descarga.value * 6 +
    escovacao.value * 2;

  total.textContent = `${litros} L`;

  const porcentagem = Math.min((litros / 500) * 100, 100);
  barra.style.width = porcentagem + "%";

  if (litros < 150) texto.textContent = "Consumo baixo 💚";
  else if (litros < 300) texto.textContent = "Consumo médio 💛";
  else texto.textContent = "Consumo alto 🔴";
}

[banho, descarga, escovacao].forEach(el => {
  el.addEventListener("input", calcular);
});

calcular();
