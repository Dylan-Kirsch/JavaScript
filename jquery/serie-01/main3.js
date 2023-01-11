let rayon;
do 
{
    rayon = prompt('Rayon?');
    console.log(Number.isInteger(parseFloat(rayon)));
}
while((isNaN(parseInt(rayon))||(parseInt(rayon)<=0)||(!Number.isInteger(parseFloat(rayon)))))


let cercle = new Cercle(rayon)
console.log(cercle.calculerPerimetre());
console.log(cercle.calculerSurface());