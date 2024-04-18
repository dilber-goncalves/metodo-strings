const nomeDoArquivo = 'Foto da Familia.jpeg';

const validarArquivo = (arquivo) => {
    const extensao = arquivo.slice(arquivo.lastIndexOf('.')+1);
    
    if(extensao === 'jpg' || extensao === 'jpeg' || extensao === 'gif' || extensao === 'png'){
        console.log('arquivo válido');
    }else{
        console.log('arquivo inválido');
    }
}

validarArquivo(nomeDoArquivo);