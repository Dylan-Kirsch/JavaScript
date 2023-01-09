let longueur = prompt('Entrer une longueur');
let largeur = prompt('Entrer une largeur');
let rayon = prompt('Entrer un rayon');

let surfaceDuCercle = new Cercle (longueur, largeur, rayon);

console.log(surfaceDuCercle);

surfaceDuCercle.calculerSurfacePerimetreRayon()