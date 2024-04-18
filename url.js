const texto = 'Aprenda a programar do zero';
const transformarTextoEmUrl = (texto) => {
    let url = '';
    const arrayPalavras = texto.split(' ');

    for (let i = 0; i < arrayPalavras.length; i++) {
        if(i > 0){
            url += `-${arrayPalavras[i]}`;
        }else{
            url += `${arrayPalavras[i]}`;
        }
    }   
    console.log(url.toLowerCase());
}

transformarTextoEmUrl(texto);