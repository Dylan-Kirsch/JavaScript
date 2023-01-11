class Classe {

    intitule;
    listeStagiaire;
    dateDeDebut;
    dateFin;

    constructor(pIntitule="",pDateDebut,pDateFin) {

        this.intitule = pIntitule;
        this.listeStagiaire = new Array()
        this.dateDeDebut = pDateDebut;
        this.dateFin = pDateFin;

    }
    ajouterStagiaire(pStagiaire) {
        
        this.listeStagiaire.push(pStagiaire)
        
        return this.listeStagiaire
    }

}