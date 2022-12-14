let nombre = parseInt(prompt('nombre d`etoiles=?'));

function etoiles() {

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
    
    
}
etoiles();

//While 

let nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));

function etoiles2() {
    

    while ((nombreEtoiles < 1) || (nombreEtoiles > 10)) 
    {
        alert ('le nombre d\'etoiles est incorrect');
        nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
    }
        // afficher n etoiles
        let etoiles = "";

        for (let i = 1; i <= nombreEtoiles; i++) {
            etoiles += "*";
        }
        console.log(etoiles);
        console.log("*".repeat(nombreEtoiles));
}

etoiles();