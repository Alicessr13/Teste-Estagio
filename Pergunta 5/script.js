function inverterString(string) {
    
    let stringInvertida = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    
    return stringInvertida;
}

let stringOriginal = prompt("Digite uma string para ser invertida:");
let stringInvertida = inverterString(stringOriginal);
console.log("A string invertida é:", stringInvertida);