function validar() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome == "") {
        document.getElementById('erro-nome').innerHTML = "Ops! informe o nome! ";
    }
}
