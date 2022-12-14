let nomTableau=[50,50,55];
let somme = 0;


for (let i = 0; i < nomTableau.length; i++) {
    somme += nomTableau[i];
}

console.log(somme);

// Exo 2

for (let i = 0; i < nomTableau.length; i++) {
    somme /= nomTableau[i];
}

console.log(somme);


// FONCTION  *********************************************************************************

function tableau(num1,num2,num3){
    var somme = num1 + num2 + num3;
    return somme;
}

var a        = 50; 
var b        = 50;
var c        = 55;
var resultat = tableau(a,b,c);

console.log(resultat);

// ***************************************

function tableau2(num1,num2,num3){
    var moyenne = num1 / num2 / num3;
    return moyenne;
}

var a        = 55; 
var b        = 55;
var c        = 55;
var resultat = tableau2(a,b,c);

console.log(resultat);