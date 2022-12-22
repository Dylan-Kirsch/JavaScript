let nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));

function etoiles() {
    

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
        // for (let i = 1; i <= nombreEtoiles; i++) {
        //     console.log("*".repeat(i));
        // }
}

etoiles();


// fonction brut avec librairie (fontionetoile.js)

// saisir un nombre d'étoile qui est bien un nombre entre 1 et 10 inclus
let nombreEtoileDemande = saisirNombreEtoiles(1,10);
for(let i=1;i<=nombreEtoileDemande;i++)
{
    console.log(retournerTexteEtoiles(i));
}

