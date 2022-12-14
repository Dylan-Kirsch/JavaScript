let notes = new Array();
let somme =0;
let moyenne = 0.0;
for (let i = 0; i <2; i++) {
     notes[i]=p

}

// for (let i = 0; i <12; i++) {
//     somme+=notes[i];arseInt(prompt('note n°'+i+"=?"));
// }
notes.forEach(note => {
    console.log(note);
    somme+=note;
});
moyenne = somme/notes.length;
alert(`la moyenne de la classe est de :${moyenne.toFixed(1)}`);