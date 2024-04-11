/*const texto = "97.50";

const varAlterada = texto.replace(".",",");
console.log(varAlterada);*/

function replaceAll(original, text, newText){
    while (original !== original.replace(text, newText)){
     original = original.replace(text, newText);
    }
    return original;
}
let numero = "1,350,000";
console.log (replaceAll(numero, ",", "."));