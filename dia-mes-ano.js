function imprimeData ( dia, mes, ano){
    const diaFormatado = String(dia).padStart(2, 0);
    const mesFormatado = String(mes).padStart(2, 0);
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimeData(18, 2, 2021);