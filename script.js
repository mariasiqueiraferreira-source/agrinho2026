// Script do site
// Maria Clara Siqueira Ferreira

// Modo escuro
const botaoModo = document.getElementById("modoEscuro");

botaoModo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// Mostrar/ocultar informação
const texto = document.getElementById("textoExtra");
const botaoMostrar = document.getElementById("mostrar");

let visivel = true;

botaoMostrar.addEventListener("click", () => {
    visivel = !visivel;

    texto.style.display = visivel ? "block" : "none";
});


// Saudação personalizada
const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");
const botaoSaudar = document.getElementById("saudar");

botaoSaudar.addEventListener("click", () => {
    const usuario = nome.value.trim();

    if (!usuario) {
        mensagem.textContent = "Digite seu nome para continuar.";
        return;
    }

    mensagem.innerHTML = `Olá, <strong>${usuario}</strong>! Seja bem-vindo(a).`;
});


// Contador de dicas
let contador = 0;

const botaoContar = document.getElementById("contar");
const textoContador = document.getElementById("contador");

const dicas = [
    "Preserve o solo com cobertura vegetal.",
    "Economize água na irrigação.",
    "Plante árvores sempre que possível.",
    "Use adubos orgânicos.",
    "Proteja a biodiversidade."
];

botaoContar.addEventListener("click", () => {
    contador++;

    textoContador.textContent = `Você visualizou ${contador} dicas.`;

    const sorteio = Math.floor(Math.random() * dicas.length);
    alert(dicas[sorteio]);
});

console.log("Site carregado com sucesso!");