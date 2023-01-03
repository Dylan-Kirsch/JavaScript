// Exo 1

let bgRandom = document.querySelector('#random');
bgRandom.addEventListener('click', changeColorBackground)

function changeColorBackground() {

    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.background = "#" + randomColor;
}

// Exo 2

let colorTexts = document.querySelector('#colors');
colorTexts.addEventListener('click', changeColorText);


function changeColorText() {
 
    if ((document.body.style.backgroundColor == "white")) {
        
        document.body.style.backgroundColor = "black";
        document.body.style.color  = "white";

    }else{

        document.body.style.backgroundColor =  "white";
        document.body.style.color = "black";

    }

}

// Exo 3

let ajouterP = document.querySelector('#ajouterP');
ajouterP.addEventListener('click', ajouteP);

function ajouteP() {

    let p = document.body;
    let newText = document.createElement("p");
    let newP = document.createTextNode("Lorem ipsum dolor");

    p.appendChild(newText);
    p.appendChild(newP);
   
     
}

let ajouterH1 = document.querySelector('#ajouteH1');
ajouterH1.addEventListener('click', ajouteH1);

function ajouteH1() {

    let t = document.body;
    let newTitre = document.createElement("h1");
    let newT = document.createTextNode("Sommaire");

    t.appendChild(newTitre);
    t.appendChild(newT);
   
     
}


// Exo 4 

let masquerReveler = document.querySelector('#MaskRevel');
masquerReveler.addEventListener('click', tousMasquerReveler);



function tousMasquerReveler() {

        let paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph=>{

        if(paragraph.style.display == "none") {

            paragraph.style.display = "block";

        } else {
            paragraph.style.display = "none"
        }

    })

}

// Exo 5

let masquerReveler2 = document.querySelector('#MaskReve2');
masquerReveler2.addEventListener('click', tousMasquerReveler2);

function tousMasquerReveler2() {

    let paragraphs = document.querySelectorAll('p');

        if(paragraphs[0].style.display == "none") {

            paragraphs[0].style.display = "block";

        } else {
            paragraphs[0].style.display = "none"
        }

}

// Exo 6

let supprimerParagraph = document.querySelector('#suppr');
supprimerParagraph.addEventListener('click', supprimerCeParagraph);

function supprimerCeParagraph() {
    
    if (supprimerParagraph.parentElement) {
        supprimerParagraph.parentElement.style.display = "none";
      }

}



