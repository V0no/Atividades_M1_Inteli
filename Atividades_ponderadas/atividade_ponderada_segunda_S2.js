var notas = [10, 7, 8]; 
var soma = 0;

for (var i = 0; i < 3; i++) { // 0 1 2
    soma += notas[i];
    console.log("Nota " + (i + 1) + ": " + notas[i]);
}

var media = soma / 3;

if (media >= 7) {
    console.log("Aprovado! Com média de " + media.toFixed(1));
}
else {
    console.log("Reprovado! Com média de " + media.toFixed(1));
}