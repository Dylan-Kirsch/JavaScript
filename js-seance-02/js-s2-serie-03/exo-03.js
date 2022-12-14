//saisir le nombre d'etoiles
let nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
// tester si compris entre 1 et 10 inclus
while ((nombreEtoiles < 1) || (nombreEtoiles > 10)) 
{
    alert ('le nombre d\'etoiles est incorrect');
    nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
}
    // afficher n etoiles
    let etoiles = "";

    for (let i = 1; i <= nombreEtoiles; i++) {
        etoiles += "*";
        console.log(etoiles);

    }
    for (let i = 1; i <= nombreEtoiles; i++) {
        console.log("*".repeat(i));
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
