const email = 'josedomingos@email.com'

const validarEmail = (email) => {
    let emailValido = true;
    if (email.indexOf('@') < 0){
        emailValido = false;
    }else if(email.indexOf('.') < 0){
        emailValido = false;
    }else if(email.indexOf('.') === 0){
        emailValido = false;
    }else if(email.indexOf('.') === email.length -1){
        emailValido = false;
    }

    if(emailValido){
        console.log("email válido");
    }else{
        console.log('email inválido');
    }
}

validarEmail(email);