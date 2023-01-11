// EXO 1

// let stagiaire1 = ['Martin','DUPONT'];
// let stagiaire2 = ['Vincent','MARTIN'];
// let stagiairess = [stagiaire1,stagiaire2];

// console.log(stagiairess);
// console.log(stagiairess[1][0]);

let stagiaireA = new Stagiaire();
stagiaireA.nom = "DUPONT";
stagiaireA.prenom = "Martin";

let stagiaireB = new Stagiaire();
stagiaireB.nom = "MARTIN";
stagiaireB.prenom = "Hugo";

let stagiaires = [stagiaireA, stagiaireB];
// console.log(stagiaires[1].prenom);
// console.log(stagiaires[0].salutation());

// let anotherStagiaire = new Stagiaire("Lucette", "Anderson")
// console.log(anotherStagiaire);

// EXO 2 

let classe = new Classe('DWM-14');
classe.dateDeDebut = new Date(2022,10,21,8,30);
classe.dateFin = new Date(2023,6,17,16,30);

// console.log(classe);
// console.log(classe.ajouterStagiaire(stagiaires));


let creer = document.querySelector('#creer');
creer.addEventListener('click', creerStage);

let afficherLog = document.querySelector('#afficherLog');
afficherLog.addEventListener('click',afficherStage);







