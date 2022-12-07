
let y = prompt("entrer une valeur");



let x = prompt("entrer une valeur");
// affiche une pop-up demandant le signe astrologique et affecte
// la réponse à la variable signe
if (x.toLowerCase() == "55") 
// teste si le signe (tout est mis en minuscule) a la valeur "verseau"
// dans l'affirmative, affiche un message dans la console développeur
{
  console.log("Oh ? moi aussi je suis verseau :)");
}

if (x > 0) {
    //bloc exécuté quand le test est vérifié
    result = 'positive';
  } else {
      // bloc exécuté dans le cas contraire
    result = 'NOT positive';
  }

  if ((y > 0)||(x==0)) {
    //bloc exécuté quand le test est vérifié :
    //(a est strictement positif) OU (a vaut 0)
    result = 'positive';
  } else {
      // bloc exécuté dans le cas contraire
    result = 'NOT positive';
  }


let paragraphe = document.getElementById("p1"); // récupérer l'élement HTML
paragraphe.innerHTML="Message";// modifier la propriété innerHTML
