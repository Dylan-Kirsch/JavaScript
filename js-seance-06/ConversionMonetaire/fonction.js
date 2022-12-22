// function ajouterChiffre(event) {
//     let saisie = document.querySelector('#saisie');
//     console.log(event.srcElement);
//     saisie.value += event.srcElement.value;
    
// }

function dollarVersEuro(montant)
{
    return montant/1.06;
}
function couronneVersEuro(montant)
{
    return montant/151.69;
}
function euroVersDollar(montant)
{
    return montant*1.06;
}
function euroVersCouronne(montant)
{
    return montant*151.69;
}


// function convertir()
// {
//     console.log("appel de la fonction convertir");
//     let montantDepart= document.querySelector('#saisie');
//     let montantEuroIntermediaire = couronneVersEuro(montantDepart.value)
//     let montantArrivee = document.querySelector('#convertie');
//     montantArrivee.value = euroVersDollar(montantEuroIntermediaire);

//     let moneyDepart = document.querySelector('input[name=depart]:checked').value;
//     let moneyArrivee = document.querySelector('input[name=arrivee]:checked').value;

//     // console.log(montantDepart);
//     // console.log(montantEuroIntermediaire);
//     // console.log(montantArrivee);
//     // console.log(moneyDepart);
//     // console.log(moneyArrivee);
// }


function convertionDepart() {
    let moneyDepart = document.querySelector('input[name=depart]:checked').value;
    let montantDepart= document.querySelector('#saisie').value;
    let resultat =0;
    switch (moneyDepart) {
        case 'euro': resultat= montantDepart;
            break;
        case 'dollars':resultat= dollarVersEuro(montantDepart);
            break;
        case 'couronne':resultat= couronneVersEuro(montantDepart);
            break;
    }
    console.log(moneyDepart);
    console.log(resultat);
    return resultat
  
}

function convertionArrivee() {
    let moneyArrivee = document.querySelector('input[name=arrivee]:checked').value;
    let montantDepart = document.querySelector('#saisie').value;
    let resultat =0;
    switch (moneyArrivee) {
        case 'euro': resultat= montantDepart;
            break;
        case 'dollars':resultat= dollarVersEuro(montantDepart);
            break;
        case 'couronne':resultat= couronneVersEuro(montantDepart);
            break;
    }
    console.log(moneyArrivee);
    console.log(resultat);
    let montantArrivee = document.querySelector('#convertie');
    montantArrivee.value = resultat;
  
}
