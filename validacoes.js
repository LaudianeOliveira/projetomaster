function validar() {

    
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome == "") {
        document.getElementById('erro-nome').innerHTML = "Ops! informe o nome! ";
        document.getElementById('nome').focus();
        return false;
    }else{
        document.getElementById('erro-nome').innerHTML = "";
    }
    
    if (sobrenome == "") {
        document.getElementById('erro-sobrenome').innerHTML = "Ops! informe o sobrenome! ";
        document.getElementById('sobrenome').focus();
        return false;
    }else{
        document.getElementById('erro-sobrenome').innerHTML = "";
    }

    if (email == "") {
        document.getElementById('erro-email').innerHTML = "Ops! informe o e-mail! ";
        document.getElementById('email').focus();
        return false;
    }else{
        document.getElementById('erro-email').innerHTML = "";
    }

    if (telefone == "") {
        document.getElementById('erro-telefone').innerHTML = "Ops! informe o telefone com DDD! ";
        document.getElementById('telefone').focus();
        return false;
    }else{
        document.getElementById('erro-telefone').innerHTML = "";
    }

    if (mensagem == "") {
        document.getElementById('erro-mensagem').innerHTML = "Ops! Deixe sua mensagem! ";
        document.getElementById('mensagem').focus();
        return false;
    }else{
        document.getElementById('erro-mensagem').innerText = "Obrigada por sua mensagem. Em até 24h você será respondido(a)!"
        
    }

    

}