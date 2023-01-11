

function creerStage() {

    let debut = document.querySelector('#dateDebut').value;
    let fin = document.querySelector('#dateDeFin').value;
    let intitule = document.querySelector('#intituler').value;
    

    stage = new Classe(intitule, new Date(debut), new Date(fin));
 
}
var stage ;

function afficherStage() {

    console.log(stage);

}