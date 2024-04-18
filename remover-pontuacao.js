const cpf = '011.022.033-44';
const cnpj = '12.345.678/0001-99'

const removerPontuacao = (numero) => {
    let numeros = numero.replace('-', '').replace('/','').split('.');
    let numeroLimpo = '';
    for (const item of numeros){
        numeroLimpo += item;
    }
    console.log(numeroLimpo);
}

removerPontuacao(cpf);
removerPontuacao(cnpj);