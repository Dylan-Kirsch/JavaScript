// let nombre = parseInt(prompt('nombre d`etoiles=?'));

// let i = 1;
// let texteEtoiles="";

// while (i <= nbEtoiles) {
//     texteEtoiles+='*';
//     i++;
    
//     if ((i >= 1)&&(i<11)) {

//     console.log(texteEtoiles);
//     }
//     else{

//     console.log('Le nombre d’étoile n’est pas correct');

//     }
// }



//saisir nbetoile

//tant que nbetoile n'est pas supérieur ou égale a 1 et strictement inférieur a 11  --- 1<=nbetoile<11
//afficher nbetoile pas correct
// saisir nbetoile
//fin tant que

// afficher les etoiles
// pour i  de 1 a nbetoiles faire
    // pour j de 1 a i faire
     // ajouter une * 
    //fin pour
    // afficher les etoiles
//fin pour

let nbetoiles = parseInt(prompt('nombre d`etoiles=?'));
 
if ((nbetoiles >= 1)&&(nbetoiles<11)) {

    let texteEtoiles="";

    for (let i = 1;  i <= nbetoiles ; i++) {
       
        texteEtoiles+= '*';
        console.log(texteEtoiles); 
    }

}
else {
    console.log('Le nombre d’étoile n’est pas correct');
}


// Methode While

let i = 1;
let texteEtoiles="";

if ((nbetoiles >= 1)&&(nbetoiles<11)) {

    while (i <= nbetoiles) {
        
        texteEtoiles+= '*';
        console.log('methode while' + texteEtoiles);
        i++
    }



}
else {
    console.log('Le nombre d’étoile n’est pas correct');
}
