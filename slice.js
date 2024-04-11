//Obter apenas os dois dígitos do estado de uma cidade

const cidade = "Maringá - PR";

const penultimoIndex = cidade.length -2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);