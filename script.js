// Guarda o nome do usuário (uso de variável como pede a rubrica)
let nomeUsuario = "Visitante";

// Seleciona elementos do HTML
const botaoModo = document.getElementById("btnModo");
const body = document.body;

// Cria um elemento para mensagem dinâmica
const mensagem = document.createElement("p");
mensagem.textContent = "Olá, " + nomeUsuario + "! Bem-vindo ao site sobre agricultura regenerativa.";
document.body.insertBefore(mensagem, document.body.firstChild);

// Função para alternar modo escuro
function alternarModo() {
    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
        botaoModo.textContent = "Modo claro";
    } else {
        botaoModo.textContent = "Modo escuro";
    }
}

// Evento no botão (interação com DOM)
botaoModo.addEventListener("click", alternarModo);

// Exemplo simples de interação adicional (usabilidade)
mensagem.addEventListener("click", function () {
    mensagem.textContent = "Agricultura regenerativa transforma o solo e o futuro 🌱";
});