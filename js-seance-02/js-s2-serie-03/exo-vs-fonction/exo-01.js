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

/*************************************************************************************************** */


// fonction brut (for)

/**
 * Cette fonction retourne vrai lorsque le nombre pNombreVerifie est compris entre pBorneMini et pBorneMaxi (inclus!)
  @param {*} pNombreVerifie 
 * @param {*} pBorneMini 
 * @param {*} pBorneMax 
 */
function estDansIntervalle(pNombreVerifie,pBorneMini, pBorneMax)
{
    let resultat = false;
    if ((pNombreVerifie>=pBorneMini)&&(pNombreVerifie<=pBorneMax))
    {
        resultat = true;
    }
    return resultat;
    // en plus court
    //return ((pNombreVerifie>=pBorneMini)&&(pNombreVerifie<=pBorneMax));
}
/**
 * Cette fonction retourne un texte composé d'un nombre d'étoiles (*), ce nombre étant fixé par le paramètre pNombreEtoiles
 * @param {*} pNombreEtoiles 
 */
function retournerTexteEtoiles(pNombreEtoiles)
{
    let resultat = "";
    for(let i=1;i<=pNombreEtoiles;i++)
    {
        resultat = resultat +"*";
    }
    return resultat;
}
//saisir le nombre d'étoiles
let nombreSaisi = parseInt(prompt('Combien d\'étioiles?'));
// vérifier s'il est compris entre 1 et 10 inclus
if ((!isNaN(nombreSaisi))&&(estDansIntervalle(nombreSaisi,1,10)))
{
// si le nombre d etoile est ok: afficher les étoiles
    console.log(retournerTexteEtoiles(nombreSaisi));
}
else
{
// sinon afficher un message d'erreur
console.log("Saisie incorrecte");
}


// fonction brut (while)

// saisir le nombre d'étoile
nombreSaisi = parseInt(prompt('Quel nombre d\'étoile voulez-vous?'));
//tant qu'il n'est pas dans l'intervalle
while((isNaN(nombreSaisi)||(!estDansIntervalle(nombreSaisi,1,10))))
{
// afficher emssage d'erreur
console.log('Le nombre saisi n\'est pas correct');
// demander de nouveau
nombreSaisi = parseInt(prompt('Quel nombre d\'étoile voulez-vous?'));
}
// ici je suis sur que la saisie est bien un nombre ET qu'il est compris entre 1 et 10 (bornes inclues)
console.log(retournerTexteEtoiles(nombreSaisi));
