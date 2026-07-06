const perguntas = [
  {
    pergunta: "Água doce é abundante no planeta?",
    opcoes: ["Sim", "Não"],
    correta: 1
  },
  {
    pergunta: "Principal problema da água hoje?",
    opcoes: ["Excesso", "Má gestão"],
    correta: 1
  }
];

let atual = 0;
let pontos = 0;

const q = document.querySelector("#quizQuestion");
const op = document.querySelector("#quizOptions");
const score = document.querySelector("#quizScore");
const next = document.querySelector("#quizNext");
const prog = document.querySelector("#quizProgress");

function mostrar() {
  const p = perguntas[atual];

  q.textContent = p.pergunta;
  op.innerHTML = "";

  p.opcoes.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.textContent = txt;

    btn.onclick = () => {
      if (i === p.correta) pontos++;
      score.textContent = pontos;

      [...op.children].forEach(b => b.disabled = true);
    };

    op.appendChild(btn);
  });

  prog.textContent = `${atual + 1}/${perguntas.length}`;
}

next.addEventListener("click", () => {
  atual++;

  if (atual < perguntas.length) {
    mostrar();
  } else {
    q.textContent = "Fim do quiz!";
    op.innerHTML = "";
    next.style.display = "none";
  }
});

mostrar();
