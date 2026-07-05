let resposta = " ";
let nome = prompt("Qual é o seu nome?");

function verificar() {
    // se não clicar em nada
    if (resposta == " ") {
        alert(nome + ", escolha uma opção primeiro");
    }

    else if (resposta == "verdadeiro") {
        alert("parabéns, " + nome + "!");
    }
    else {
        alert(nome + ", resposta errada");
    }
}
function alternarModo() {
    const body = document.body;
    body.classList.toggle('dark'); // Alterna as cores usando o arquivo style.css
    
    // Guarda na memória do navegador se o usuário prefere o tema escuro ou claro
    if (body.classList.contains('dark')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
}

// Carrega as preferências guardadas assim que a página abre
window.onload = function() {
    if (localStorage.getItem('tema') === 'escuro') {
        document.body.classList.add('dark');
    }
};