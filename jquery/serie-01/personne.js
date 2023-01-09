class Personne {

    nom;
    prenom;

    constructor(pNom,pPrenom) {

        this.prenom = pPrenom;
        this.nom = pNom;
    }
    afficher()
    {
        console.log(`La personne s'appelle ${this.prenom} ${this.nom}`);
    }

}