function verificaPalindromo(string) {
    if (!string) return "string inexistente";

   return string.split("").reverse().join("") === string;
}
//metodo dois

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";7

    for(let i =0; i < string.length/2; i++){
    if(string[i] !== string[string.length - 1 - i]) {
        return false;
        }
    }

    return true;
}
    
   


console.log(verificaPalindromo2("gato"));