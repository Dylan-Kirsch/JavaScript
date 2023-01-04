// Exo 1

function changeColorBackground() {

    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.background = "#" + randomColor;
}

// Exo 2

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

function ajouterTitre()
{
    console.log('ajouter un titre');
    let newH1 = document.createElement("h1");
    let titre = prompt('Nouveau titre?');
    newH1.innerText = titre;
    let parent = document.querySelector('main');
    parent.appendChild(newH1);
}
function ajouterParagraphe()
{
    console.log('ajouter un paragraphe');
    let newPara = document.createElement("p");
    let texte = prompt('Saisisse le texte du paragraphe?');
    newPara.innerText = texte;
    let parent = document.querySelector('main');
    parent.appendChild(newPara);
}


// Exo 4

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

function tousMasquerReveler2() {

    let paragraphs = document.querySelectorAll('p');

        if(paragraphs[0].style.display == "none") {

            paragraphs[0].style.display = "block";

        } else {
            paragraphs[0].style.display = "none"
        }

}

// Exo 6

function supprimerCeParagraph() {
    
    if (supprimerParagraph.parentElement) {
        supprimerParagraph.parentElement.style.display = "none";
    }

}






