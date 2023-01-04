let boutons = document.querySelectorAll('.animal');
boutons.forEach(bouton=>{
    bouton.addEventListener('click',changerImage);
})


let survols = document.querySelectorAll('.image');
survols.forEach(survol=>{
    survol.addEventListener('mouseover',survolImage);
})
