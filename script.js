
const bancos = {
    facil: [
        ["Qual planeta é conhecido como planeta vermelho?", ["Marte", "Terra", "Netuno", "Vênus"], 0, "Marte possui uma aparência avermelhada."],
        ["Qual órgão bombeia o sangue?", ["Pulmão", "Coração", "Estômago", "Rim"], 1, "O coração bombeia o sangue."],
        ["Qual é a estrela do Sistema Solar?", ["Lua", "Sol", "Terra", "Marte"], 1, "O Sol é a estrela do nosso sistema."],
        ["Qual é o estado sólido da água?", ["Vapor", "Chuva", "Gelo", "Nuvem"], 2, "O gelo é água no estado sólido."],
        ["Qual gás é utilizado na respiração celular aeróbica?", ["Oxigênio", "Hélio", "Neônio", "Hidrogênio"], 0, "As células utilizam oxigênio na respiração aeróbica."],
        ["Qual destes é um ser vivo?", ["Pedra", "Cogumelo", "Vidro", "Areia"], 1, "Os fungos, como os cogumelos, são seres vivos."],
        ["Qual é o satélite natural da Terra?", ["Sol", "Lua", "Marte", "Vênus"], 1, "A Lua é o satélite natural da Terra."],
        ["O que as raízes absorvem do solo?", ["Plástico", "Água e sais minerais", "Luz solar", "Areia apenas"], 1, "As raízes absorvem água e sais minerais."],
        ["Qual atitude ajuda o meio ambiente?", ["Reciclar", "Poluir rios", "Desperdiçar água", "Queimar lixo"], 0, "A reciclagem ajuda a reduzir resíduos."],
        ["Qual órgão coordena muitas atividades do corpo?", ["Coração", "Cérebro", "Fígado", "Pulmão"], 1, "O cérebro coordena muitas funções do corpo."],
        ["Qual animal é um mamífero?", ["Sapo", "Galinha", "Cachorro", "Tartaruga"], 2, "O cachorro é um mamífero."],
        ["Qual destes materiais é atraído por um ímã?", ["Madeira", "Ferro", "Papel", "Vidro"], 1, "O ferro é atraído por ímãs."],
        ["Qual astro ilumina a Terra durante o dia?", ["Sol", "Lua", "Marte", "Saturno"], 0, "A luz solar ilumina a Terra."],
        ["Qual parte da planta geralmente absorve água?", ["Flor", "Folha", "Raiz", "Fruto"], 2, "As raízes absorvem água do solo."],
        ["Em qual estado está o vapor de água?", ["Sólido", "Líquido", "Gasoso", "Metálico"], 2, "O vapor de água está no estado gasoso."]
    ],

    medio: [
        ["Qual processo transforma vapor em líquido?", ["Evaporação", "Condensação", "Fusão", "Solidificação"], 1, "Na condensação, o gás passa para o estado líquido."],
        ["Qual é a função dos decompositores?", ["Produzir luz", "Reciclar nutrientes", "Criar rochas", "Aquecer o Sol"], 1, "Fungos e bactérias decompõem matéria orgânica."],
        ["Em uma cadeia alimentar, quem produz seu próprio alimento?", ["Predadores", "Produtores", "Consumidores", "Carnívoros"], 1, "Plantas e algas são exemplos de produtores."],
        ["Qual movimento da Terra causa os dias e as noites?", ["Translação", "Rotação", "Reflexão", "Condensação"], 1, "A Terra gira em torno do próprio eixo."],
        ["Qual mistura pode ser separada por filtração?", ["Água e areia", "Água e sal dissolvido", "Água e álcool", "Água e açúcar dissolvido"], 0, "O filtro retém partículas sólidas insolúveis."],
        ["Qual é a principal função dos pulmões?", ["Bombear sangue", "Realizar trocas gasosas", "Digestionar alimentos", "Produzir urina"], 1, "Os pulmões participam das trocas gasosas."],
        ["O que é um ecossistema?", ["Somente animais", "Seres vivos e ambiente interagindo", "Apenas plantas", "Somente o clima"], 1, "Um ecossistema inclui seres vivos e fatores ambientais."],
        ["Qual fonte de energia é renovável?", ["Carvão mineral", "Petróleo", "Energia solar", "Gasolina"], 2, "A energia solar vem da luz do Sol."],
        ["O que acontece na fusão?", ["Líquido vira gás", "Sólido vira líquido", "Gás vira sólido", "Líquido vira sólido"], 1, "A fusão é a passagem do sólido para o líquido."],
        ["Qual estrutura contém o material genético nas células eucarióticas?", ["Núcleo", "Areia", "Raiz", "Pele"], 0, "O núcleo contém o material genético."],
        ["Qual gás as plantas utilizam na fotossíntese?", ["Gás carbônico", "Hélio", "Neônio", "Somente hidrogênio"], 0, "As plantas utilizam gás carbônico na fotossíntese."],
        ["Qual órgão participa da digestão dos alimentos?", ["Estômago", "Coração", "Pulmão", "Cérebro apenas"], 0, "O estômago participa da digestão."],
        ["O que é um animal herbívoro?", ["Que come plantas", "Que come somente carne", "Que produz luz", "Que não precisa de alimento"], 0, "Herbívoros alimentam-se de vegetais."],
        ["Qual camada ajuda a proteger a Terra de parte da radiação ultravioleta?", ["Camada de ozônio", "Núcleo da Lua", "Crosta terrestre", "Camada de areia"], 0, "A camada de ozônio absorve grande parte da radiação UV."],
        ["Qual é a passagem do líquido para o sólido?", ["Fusão", "Evaporação", "Solidificação", "Condensação"], 2, "Na solidificação, um líquido passa para o estado sólido."]
    ],

    dificil: [
        ["Em uma cadeia alimentar, a energia disponível geralmente...", ["Aumenta em cada nível", "Diminui nos níveis seguintes", "Nunca se transforma", "É criada pelos consumidores"], 1, "Parte da energia é utilizada e dissipada como calor em cada nível."],
        ["Por que a biodiversidade é importante?", ["Impede todo desastre", "Favorece o equilíbrio dos ecossistemas", "Elimina as cadeias alimentares", "Acaba com a competição"], 1, "A diversidade de seres vivos contribui para o funcionamento dos ecossistemas."],
        ["Qual é a principal causa das estações do ano?", ["A distância diária da Lua", "A inclinação do eixo terrestre e a translação", "A rotação do Sol ao redor da Terra", "As nuvens"], 1, "A inclinação do eixo terrestre e a translação causam as estações."],
        ["Qual método pode recuperar o sal dissolvido na água?", ["Peneiração", "Evaporação", "Imantação", "Filtração simples"], 1, "A água evapora e o sal pode permanecer no recipiente."],
        ["Por que mudar uma variável de cada vez em uma experiência?", ["Para confundir resultados", "Para avaliar melhor seu efeito", "Para impedir medições", "Para dispensar observações"], 1, "Controlar as variáveis ajuda a interpretar os resultados."],
        ["O que pode acontecer quando uma espécie invasora se espalha?", ["Nunca há efeitos", "Pode competir com espécies nativas", "A biodiversidade sempre aumenta", "Todos os predadores desaparecem"], 1, "Espécies invasoras podem competir por recursos."],
        ["Qual situação representa uma transformação química?", ["Gelo derretendo", "Papel sendo rasgado", "Ferro enferrujando", "Água evaporando"], 2, "A ferrugem se forma por reações químicas."],
        ["Qual é o papel das bactérias decompositoras?", ["Impedir todo ciclo natural", "Devolver nutrientes ao ambiente", "Produzir luz solar", "Eliminar a água"], 1, "A decomposição devolve nutrientes ao ambiente."],
        ["Se os produtores diminuírem muito, o que pode ocorrer?", ["Todos terão mais alimento", "Pode faltar energia aos consumidores", "A energia surgirá do nada", "Nada pode mudar"], 1, "Os produtores são a entrada de energia em muitas cadeias alimentares."],
        ["Qual é a diferença entre tempo e clima?", ["São sempre iguais", "Tempo é momentâneo; clima é um padrão de longo prazo", "Clima muda a cada minuto", "Tempo só existe no verão"], 1, "O clima descreve padrões observados durante longos períodos."],
        ["Uma população de predadores diminui muito. O que pode ocorrer com suas presas?", ["A população de presas pode aumentar", "Todas desaparecem imediatamente", "Elas deixam de se reproduzir", "Nada pode acontecer"], 0, "Com menos predadores, a pressão de predação pode diminuir."],
        ["Por que a água é considerada um bom solvente para muitas substâncias?", ["Porque dissolve absolutamente tudo", "Por causa de suas propriedades moleculares", "Porque não possui moléculas", "Porque é sempre sólida"], 1, "A polaridade da água permite dissolver muitas substâncias."],
        ["Qual evidência indica que ocorreu uma reação química?", ["Somente mudança de formato", "Formação de uma nova substância", "Somente corte de papel", "Somente derretimento do gelo"], 1, "Reações químicas produzem novas substâncias."],
        ["Por que a sombra de um objeto muda durante o dia?", ["A Terra não gira", "A posição aparente do Sol muda", "O objeto perde massa", "A luz deixa de existir"], 1, "A rotação da Terra altera a posição aparente do Sol no céu."],
        ["O que pode acontecer com um ecossistema após a retirada de uma espécie importante?", ["Nada em hipótese alguma", "As relações alimentares podem ser alteradas", "Todas as espécies viram produtoras", "A energia deixa de existir"], 1, "A retirada de uma espécie pode afetar várias relações ecológicas."]
    ]
};

let nivel = 1;
let pontos = 0;
let vidas = 3;
let acertosNoNivel = 0;
let respondida = false;
let perguntaAtual;
let usadas = [];

function dificuldade() {
    if (nivel <= 2) return "facil";
    if (nivel <= 4) return "medio";
    return "dificil";
}

function escolherPergunta() {
    const banco = bancos[dificuldade()];

    let disponiveis = banco.filter(
        pergunta => !usadas.includes(pergunta[0])
    );

    if (disponiveis.length === 0) {
        usadas = [];
        disponiveis = banco;
    }

    const pergunta = disponiveis[
        Math.floor(Math.random() * disponiveis.length)
    ];

    usadas.push(pergunta[0]);

    if (usadas.length > 10) {
        usadas.shift();
    }

    return pergunta;
}

function atualizarPainel() {
    document.getElementById("nivel").textContent =
        `🏅 Nível ${nivel}`;

    document.getElementById("vidas").textContent =
        "❤️".repeat(vidas) + "🖤".repeat(3 - vidas);

    document.getElementById("pontos").textContent = pontos;

    document.getElementById("progressoNivel").textContent =
        `Acertos para o próximo nível: ${acertosNoNivel}/5`;

    document.getElementById("barraProgresso").style.width =
        `${(acertosNoNivel / 5) * 100}%`;
}

function mostrarPergunta() {
    respondida = false;
    perguntaAtual = escolherPergunta();

    document.getElementById("jogo").hidden = false;
    document.getElementById("fimDeJogo").hidden = true;

    document.getElementById("categoria").textContent =
        `🔬 Ciências • ${dificuldade().toUpperCase()}`;

    document.getElementById("pergunta").textContent =
        perguntaAtual[0];

    document.getElementById("feedback").textContent = "";
    document.getElementById("proximo").hidden = true;

    const opcoes = document.getElementById("opcoes");
    opcoes.replaceChildren();

    perguntaAtual[1].forEach((texto, i) => {
        const botao = document.createElement("button");

        botao.className = "opcao";
        botao.textContent =
            `${String.fromCharCode(65 + i)}) ${texto}`;

        botao.addEventListener("click", () => verificarResposta(i));

        opcoes.appendChild(botao);
    });

    atualizarPainel();
}

function verificarResposta(escolha) {
    if (respondida) return;

    respondida = true;

    const correta = perguntaAtual[2];
    const botoes = document.querySelectorAll(".opcao");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    botoes[correta].classList.add("correta");

    if (escolha === correta) {
        const ganho = nivel * 10;

        pontos += ganho;
        acertosNoNivel++;

        document.getElementById("feedback").textContent =
            `✅ Correto! Você ganhou ${ganho} pontos!`;

        if (acertosNoNivel >= 5) {
            nivel++;
            acertosNoNivel = 0;

            document.getElementById("feedback").textContent +=
                ` 🎉 Você avançou para o nível ${nivel}!`;
        }
    } else {
        botoes[escolha].classList.add("errada");
        vidas--;

        document.getElementById("feedback").textContent =
            `❌ Resposta incorreta. ${perguntaAtual[3]}`;
    }

    atualizarPainel();

    const proximo = document.getElementById("proximo");
    proximo.hidden = false;

    proximo.textContent =
        vidas <= 0 ? "Ver resultado 🏆" : "Continuar →";
}

function proximaPergunta() {
    if (!respondida) return;

    if (vidas <= 0) {
        encerrarJogo();
    } else {
        mostrarPergunta();
    }
}

function encerrarJogo() {
    document.getElementById("jogo").hidden = true;
    document.getElementById("fimDeJogo").hidden = false;

    document.getElementById("resumoFinal").textContent =
        `Você chegou ao nível ${nivel}, fez ${pontos} pontos e acertou ${Math.floor(pontos / 10)} questões equivalentes em pontuação. Tente novamente para superar seu recorde!`;
}

function reiniciarJogo() {
    nivel = 1;
    pontos = 0;
    vidas = 3;
    acertosNoNivel = 0;
    usadas = [];

    mostrarPergunta();
}

document.getElementById("proximo")
    .addEventListener("click", proximaPergunta);

mostrarPergunta();
