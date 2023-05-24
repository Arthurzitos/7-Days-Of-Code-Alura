// Resposta do primeiro desafio #1/7

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
};

if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

// Refatorando o algoritmo utlizando operadores ternários

const numUm = 1
const strUm = '1'
const numTrinta = 30
const strTrinta = '30'
const numDez = 10
const strDez = '10'

console.log(numUm == strUm ? 'As variáveis numUm e strUm têm o mesmo valor, mas tipos diferentes.' : 'As variáveis numeroUm e stringUm não têm o mesmo valor.');
console.log(numTrinta === strTrinta ? 'As variáveis numTrinta e strTrinta têm o mesmo valor e o mesmo tipo.' : 'As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo.');
console.log(numDez == strDez ? 'As variáveis numDez e strDez têm o mesmo valor, mas tipos diferentes.' : 'As variáveis numeroDez e stringDez não têm o mesmo valor.');
