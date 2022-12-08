// déclaration et initialisation de la variable texte qui contient du texte
let texte = '';

for (let i = 0; i < 10; i++) {
    // pour chaque valeur de 1 de 0 à 9, on concatène la valeur courante de i
    // i est ici transformé en texte et non traitée comme un nombre
    texte = texte + i;
}
// affichage de la valeur finale de texte : '0123456789'
console.log(texte); 
