let nombre = parseInt(prompt('nombre d`etoiles=?'));
 
if ((nombre >= 1)&&(nombre<11)) {
   
    let texteEtoiles="";
    for (let i = 1; i <=nombre; i++) {
        texteEtoiles+='*';
    }
    console.log(texteEtoiles);
}
else{

console.log('Le nombre d’étoile n’est pas correct');

}

// Methode While

nombre = parseInt(prompt('nombre d`etoiles=?'));

let i = 1;

if ((nombre >= 1)&&(nombre<11)) {
   
    let texteEtoiles="";
    while (i <=nombre) {
        texteEtoiles+='*';
        i++;
    }
    console.log('methode while ' + texteEtoiles);
}
else{

console.log('Le nombre d’étoile n’est pas correct');

}
