let longueur = prompt('Entrer une longueur');
let largeur = prompt('Entrer une largeur');


let surfaceDuRectangle = new Rectangle (longueur, largeur);

console.log(surfaceDuRectangle);

surfaceDuRectangle.calculerSurfacePerimetre()