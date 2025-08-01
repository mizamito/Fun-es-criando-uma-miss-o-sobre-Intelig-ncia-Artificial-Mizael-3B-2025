const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após uma longa e cansativa semana, você decide tirar um tempo para si. Qual atividade você escolhe?",
        alternativas: [
            {
                texto: "Explorar um parque novo ou fazer uma trilha.",
                afirmacao: "No início, sentiu um pouco de receio de se aventurar, mas ficou feliz por ter conhecido um lugar novo."
            },
            {
                texto: "Assistir a um filme ou série que está em alta.",
                afirmacao: "Quis saber mais sobre os diretores e atores envolvidos na produção e como eles usaram a tecnologia."
            }
        ]
    },
    {
        enunciado: "Você decide preparar uma refeição para relaxar. Na hora de escolher a receita, qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza um aplicativo de receitas que sugere pratos com os ingredientes que você tem em casa.",
                afirmacao: "Conseguiu utilizar a tecnologia para otimizar a sua rotina e preparar um prato delicioso."
            },
            {
                texto: "Abre o livro de receitas da sua família e escolhe uma que te traga boas memórias.",
                afirmacao: "Sentiu mais facilidade em seguir a receita com as próprias anotações da família e se sentiu conectado com a tradição."
            }
        ]
    },
    {
        enunciado: "Depois de comer, você percebe que o seu quarto está desorganizado. Como você se posiciona?",
        alternativas: [
            {
                texto: "Toca uma música animada e começa a organizar tudo, um item de cada vez.",
                afirmacao: "Vem impulsionando a organização da sua casa e luta para encontrar novos caminhos profissionais com a sua criatividade."
            },
            {
                texto: "Prefere deixar a bagunça de lado e focar em algo que traga mais satisfação imediata, como jogar um videogame ou ler um livro.",
                afirmacao: "Sua preocupação em se divertir motivou a criar um grupo de estudos sobre o que te deixa mais feliz."
            }
        ]
    },
    {
        enunciado: "No dia seguinte, você tem a oportunidade de escolher a cor da tinta para pintar uma parede do seu quarto. E agora?",
        alternativas: [
            {
                texto: "Escolher uma cor que reflita a sua personalidade.",
                afirmacao: "Notou também que muitas pessoas não sabem como combinar cores e decidiu compartilhar os seus conhecimentos."
            },
            {
                texto: "Acha melhor escolher uma cor neutra para não enjoar com o tempo.",
                afirmacao: "Acelerou o processo de pintura utilizando as ferramentas certas e agora consegue ensinar pessoas a escolherem a melhor cor!"
            }
        ]
    },
    {
        enunciado: "Você percebe que um amigo está com dificuldades no trabalho ou na escola. Ele te pede ajuda. O que você faz?",
        alternativas: [
            {
                texto: "Mostra para ele algumas ferramentas que podem facilitar o trabalho dele.",
                afirmacao: "Infelizmente passou a usar a tecnologia para fazer tudo, e agora se sente dependente dela para tudo."
            },
            {
                texto: "Explica com as suas próprias palavras, com calma e paciência, o que ele precisa fazer para resolver a situação.",
                afirmacao: "Percebeu que toda tecnologia reproduz orientações baseadas em um algoritmo, e que o que o aplicativo escrevia não refletia o que você pensava, por isso sabe que a tecnologia deve servir como auxílio e não como solução final. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();