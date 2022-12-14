let nomTableau=[50,50,55];
let somme = 0;

function sommes() {

    for (let i = 0; i < nomTableau.length; i++) {
        somme += nomTableau[i];
    }

    console.log(somme); 
}

sommes();

// Exo 2

function moyennes() {
    
    for (let i = 0; i < nomTableau.length; i++) {
        somme /= nomTableau[i];
    }

    console.log(somme);
}

moyennes();