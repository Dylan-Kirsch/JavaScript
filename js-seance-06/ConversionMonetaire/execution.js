let boutonsChiffre = document.querySelectorAll('.btn_chiffre');
let boutonConvertion = document.querySelector('#btn_convertion');
let boutonVirgule = document.querySelector('#btn_virgule');
let ecran = document.querySelector('#ecran');
let saisie = document.querySelector('#saisie');
let convertie = document.querySelector('#convertie');

// boutonsChiffre.forEach(boutonChiffre=>{
//     boutonChiffre.addEventListener('click',ajouterChiffre);
// }
// );

boutonConvertion.addEventListener('click', convertionDepart);
boutonConvertion.addEventListener('click', convertionArrivee);

//boutonVirgule.addEventListener('click',ajouterChiffre);
