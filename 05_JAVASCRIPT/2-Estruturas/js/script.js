let nome = 'João';

const idade = 26 //não pode ser alterada

//formas diferentes que pode nomear uma variável
let _underline = 'x'
let $sifrao = 'x'

// semelhante ao input no python:
//const x = prompt('Digite um valor') 

// objeto math
let valor_maximo = Math.max(1, 9, 7, 15)
console.log(valor_maximo)
console.log(Math.ceil(5.15))
console.log(Math.floor(5.15))

// erro e warn
console.error('sou um erro')
console.warn('sou um warn')

// if-else
const m = 10;
if (m > 5) {
    console.log('M é maior que 5')
}

const loggedin = false;
if (loggedin) {
    console.log('Está autenticado!');
} else {
    console.log('Não está autenticado');
}

const userName = 'Jose'
const userAge = 31

if(userName === 'José') {
    console.log('Bem-vindo, José!')
} else if (userName === 'Matheus' && userAge === 31) {
    console.log('Olá, Matheus')
} else {
    console.log('Nenhuma condição aceita!')
}


// Estruturas de repetição
let a = 2
while (a) {
    console.log(`Repetindo: ${a}`)
    a--;
}

a = 0
do {
    console.log(`do-while: ${a}`)
} while (a)    // executa pelo menos uma vez mesmo que a condição seja falsa


for (let t = 0; t < 3; t++) {
    console.log('Repetindo alguma coisa.');
}


//funções
function fatorial(numero) {
    if (numero === 1) {
        return 1;
    }
    return numero*fatorial(numero-1);
}

console.log(fatorial(5))
