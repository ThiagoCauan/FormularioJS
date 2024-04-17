const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");

const sobrenomeInput = document.querySelector("#sobrenome");

const emailInput = document.querySelector("#email");

const passwordInput = document.querySelector("#password");

const password2Input = document.querySelector("#password2");

const messageTextarea = document.querySelector("#message");


form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    if(nameInput.value ===""){
        alert("Por favor preencha seu nome");
        return;
    }

    if(sobrenomeInput.value ===""){
        alert("Por favor preencha seu sobrenome");
        return;
    }

    if(emailInput.value ==="" || !isEmailValid(emailInput.value)) {
        alert("Por favor preencha seu email");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa de no mínimo 8 digitos");
        return;
    }

    if(password2Input.value != passwordInput.value){
        alert("As senham precisam ser iguais");
        return;
    }

    if(messageTextarea.value ===""){
        alert("Por favor nos fale um pouco sobre você");
        return;
    } 
    
    form.submit();
});

function isEmailValid(email){

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email))  {
        return true;
    }
    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true;
    }
    return false;
}

