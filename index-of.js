//saber se é valido o email
// tem que ter @ e um . depois do @

const email = "dilber@gmail.com";

const indexArroba = email.indexOf("@"); // encontrar em qual posição está o @
const indexPontoAposArroba = email.indexOf(".", indexArroba)

if (indexPontoAposArroba > indexArroba){
    console.log("Email atende aos requisitos");
}else{
    console.log("Email inválido");
}