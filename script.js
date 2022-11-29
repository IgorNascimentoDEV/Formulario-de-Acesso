function logar()
{
    //capturando os valores dos input's 
    let login = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    //validação do usuario e senha "nessa validação estamos trabalhando com um unico usuario e senha"
    if(login == 'admin' && senha == 'admin'){
        
        location.href = "https://aplicacaoaccenture.web.app/"
    
    }else{
        alert('Usuario ou senha invalido');
    }
}

