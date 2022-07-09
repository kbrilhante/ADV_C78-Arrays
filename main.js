// Declarando o Array:
var frutas = ["maçã", "banana", "laranja"];
console.log(frutas);
document.getElementById("declaraArray").innerHTML = frutas;
// Buscando o primeiro elemento do Array
var primeiro = frutas[0];
console.log(primeiro);
document.getElementById("primeiro").innerHTML = primeiro;
// Buscando o segundo elemento do Array
var segundo = frutas[1];
console.log(segundo);
document.getElementById("segundo").innerHTML = segundo;
// Buscando o terceiro elemento do Array:
var terceiro = frutas[2];
console.log(terceiro);
document.getElementById("terceiro").innerHTML = terceiro;
// Comprimento do Array
var comprimento = frutas.length;
console.log(comprimento);
document.getElementById("comprimento").innerHTML = comprimento;
// Utilizando o loop através do Array
var elemento;
var loopArray = "";
for (i = 0; i < comprimento; i++){
    elemento = frutas[i];
    console.log(elemento);
    loopArray = loopArray + elemento + "<br>";
}
document.getElementById("loopArray").innerHTML = loopArray;
// Adicionando um elemento no final do Array
frutas.push("melancia");
console.log(frutas);
document.getElementById("addElemento").innerHTML = frutas;
// Adicionando mais elementos no final do Array
frutas.push("limão","manga");
console.log(frutas);
document.getElementById("addMaisElementos").innerHTML = frutas;

// Declarando o Array com letras do alfabeto
var letras = ['e', 'b', 'c', 'i', 'a', 'd', 'f', 'g', 'h', 'j'];
console.log(letras);
document.getElementById("declaraletras").innerHTML = letras;
// Organizando o Array com letras
var organizaLetras = letras.sort();
console.log(organizaLetras);
document.getElementById("organizaLetras").innerHTML = organizaLetras;
// Revertendo o Array com letras
organizaLetras.reverse();
console.log(organizaLetras);
document.getElementById("reverteLetras").innerHTML = organizaLetras;

// Declarando um Array de números
var numeros = [25, 60, 92, 85, 8];
console.log(numeros);
document.getElementById("declaraNumeros").innerHTML = numeros;
// Encontando o maior número do Array
var maior = Math.max.apply(Math, numeros);
console.log(maior);
document.getElementById("maxNumero").innerHTML = maior;
// Encontando o menor número do Array
var menor = Math.min.apply(Math, numeros);
console.log(menor);
document.getElementById("minNumero").innerHTML = menor;

// Atividades Extras
// Adicionando elementos no início do Array
frutas.unshift("cereja");
console.log(frutas);
document.getElementById("addInicio").innerHTML = frutas;
// Adicionando vários elementos no início do Array
frutas.unshift("abacate","morango");
console.log(frutas);
document.getElementById("addVariosInicio").innerHTML = frutas;
// Removendo elemento do início do Array
frutas.shift();
console.log(frutas);
document.getElementById("remInicio").innerHTML = frutas;
// Removendo elemento do final do Array
frutas.pop();
console.log(frutas);
document.getElementById("remFinal").innerHTML = frutas;
// Unindo dois arrays
var legumes = ["cenoura", "chuchu", "beterraba"];
console.log(legumes);
var verduras = ["alface" , "espinafre", "acelga"];
console.log(verduras);

var salada = legumes.concat(verduras);
console.log(salada);
document.getElementById("juntaArray").innerHTML = salada;