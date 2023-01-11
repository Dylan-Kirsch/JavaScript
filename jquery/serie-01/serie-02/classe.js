class Classe {

    intitule;
    listeStagiaire;
    dateDeDebut;
    dateFin;

    constructor(pIntitule="") {

        this.intitule = pIntitule;
        this.listeStagiaire = new Array()
        this.dateDeDebut = new Date();
        this.dateFin = new Date();

    }
    ajouterStagiaire(pStagiaire) {
        
        this.listeStagiaire.push(pStagiaire)
        
        return this.listeStagiaire
    }

}