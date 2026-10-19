
const perguntas = [
    {
        categoria: "🌎 Planeta Terra",
        pergunta: "Qual é o planeta em que vivemos?",
        opcoes: ["Marte", "Terra", "Vênus", "Júpiter"],
        correta: 1,
        explicacao: "A Terra é o planeta onde vivemos."
    },
    {
        categoria: "🌱 Seres vivos",
        pergunta: "O que as plantas precisam para realizar a fotossíntese?",
        opcoes: [
            "Luz solar, água e gás carbônico",
            "Somente areia",
            "Somente oxigênio",
            "Água e plástico"
        ],
        correta: 0,
        explicacao: "A fotossíntese utiliza luz, água e gás carbônico."
    },
    {
        categoria: "💧 Água",
        pergunta: "Como se chama a passagem da água líquida para vapor?",
        opcoes: ["Solidificação", "Condensação", "Evaporação", "Fusão"],
        correta: 2,
        explicacao: "A evaporação transforma água líquida em vapor."
    },
    {
        categoria: "🪐 Sistema Solar",
        pergunta: "Qual é a estrela do nosso Sistema Solar?",
        opcoes: ["Lua", "Sol", "Terra", "Saturno"],
        correta: 1,
        explicacao: "O Sol é a estrela central do Sistema Solar."
    },
    {
        categoria: "🫀 Corpo humano",
        pergunta: "Qual órgão bombeia o sangue pelo corpo?",
        opcoes: ["Pulmão", "Estômago", "Cérebro", "Coração"],
        correta: 3,
        explicacao: "O coração bombeia o sangue pelo organismo."
    },
    {
        categoria: "♻️ Meio ambiente",
        pergunta: "Qual atitude ajuda a preservar o meio ambiente?",
        opcoes: [
            "Jogar lixo nos rios",
            "Desperdiçar água",
            "Separar materiais recicláveis",
            "Queimar lixo nas ruas"
        ],
        correta: 2,
        explicacao: "A separação dos recicláveis ajuda a reduzir resíduos."
    },
    {
        categoria: "🦴 Corpo humano",
        pergunta: "Qual é a principal função do esqueleto?",
        opcoes: [
            "Produzir luz",
            "Sustentar o corpo e proteger órgãos",
            "Fazer a digestão",
            "Produzir alimentos"
        ],
        correta: 1,
        explicacao: "O esqueleto sustenta o corpo e protege órgãos."
    },
    {
        categoria: "🌡️ Matéria",
        pergunta: "Qual destes materiais está no estado gasoso à temperatura ambiente?",
        opcoes: ["Gelo", "Pedra", "Oxigênio", "Madeira"],
        correta: 2,
        explicacao: "O oxigênio é um gás nas condições ambientes."
    },
    {
        categoria: "🐾 Animais",
        pergunta: "Como são chamados os animais que possuem coluna vertebral?",
        opcoes: ["Vertebrados", "Invertebrados", "Fungos", "Plantas"],
        correta: 0,
        explicacao: "Vertebrados possuem coluna vertebral."
    },
    {
        categoria: "🌧️ Natureza",
        pergunta: "Qual processo forma as nuvens a partir do vapor de água?",
        opcoes: ["Combustão", "Condensação", "Fusão", "Filtração"],
        correta: 1,
        explicacao: "Na condensação, o vapor forma pequenas gotículas de água."
    }
];

let indice = 0;
let pontos = 0;
let respondida = false;

function mostrarPergunta() {
    respondida = false;

    const p = perguntas[indice];

    document.getElementById("progresso").textContent =
        `Pergunta ${indice + 1} de ${perguntas.length}`;

    document.getElementById("pontos").textContent = pontos;

    document.getElementById("barraProgresso").style.width =
        `${(indice / perguntas.length) * 100}%`;

    document.getElementById("categoria").textContent = p.categoria;
    document.getElementById("pergunta").textContent = p.pergunta;
    document.getElementById("feedback").textContent = "";

    const opcoes = document.getElementById("opcoes");
    opcoes.replaceChildren();

    p.opcoes.forEach((texto, i) => {
        const botao = document.createElement("button");
        botao.className = "opcao";
        botao.textContent = `${String.fromCharCode(65 + i)}) ${texto}`;

        botao.addEventListener("click", () => verificarResposta(i));

        opcoes.appendChild(botao);
    });

    document.getElementById("proximo").hidden = true;
}

function verificarResposta(escolha) {
    if (respondida) return;

    respondida = true;

    const p = perguntas[indice];
    const botoes = document.querySelectorAll(".opcao");
    const feedback = document.getElementById("feedback");

    botoes.forEach(botao => botao.disabled = true);

    botoes[p.correta].classList.add("correta");

    if (escolha === p.correta) {
        pontos += 10;
        feedback.textContent = "✅ Muito bem! Você acertou! +10 pontos";
    } else {
        botoes[escolha].classList.add("errada");
        feedback.textContent = `❌ Não foi dessa vez! ${p.explicacao}`;
    }

    document.getElementById("pontos").textContent = pontos;
    document.getElementById("barraProgresso").style.width =
        `${((indice + 1) / perguntas.length) * 100}%`;

    const proximo = document.getElementById("proximo");
    proximo.hidden = false;

    proximo.textContent =
        indice === perguntas.length - 1
            ? "Ver resultado 🏆"
            : "Próxima pergunta →";
}

function proximaPergunta() {
    if (!respondida) return;

    indice++;

    if (indice < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("jogo").hidden = true;
    document.getElementById("resultado").hidden = false;

    const nota = pontos / 10;

    document.getElementById("notaFinal").textContent =
        `${nota} de ${perguntas.length} acertos`;

    let mensagem;

    if (nota >= 9) {
        mensagem = "Incrível! Você é um cientista de primeira! 🧑‍🔬";
    } else if (nota >= 6) {
        mensagem = "Muito bem! Você está aprendendo bastante! 🚀";
    } else {
        mensagem = "Continue estudando! Tente novamente e melhore sua pontuação. 💪";
    }

    document.getElementById("mensagemFinal").textContent = mensagem;
    document.getElementById("barraProgresso").style.width = "100%";
}

function reiniciarJogo() {
    indice = 0;
    pontos = 0;

    document.getElementById("resultado").hidden = true;
    document.getElementById("jogo").hidden = false;

    mostrarPergunta();
}

document.getElementById("proximo")
    .addEventListener("click", proximaPergunta);

mostrarPergunta();
