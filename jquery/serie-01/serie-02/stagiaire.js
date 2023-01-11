class Stagiaire {

    nom;
    prenom;

    salutation() {

        return `Je m'appelle ${this.prenom} ${this.nom}`

    }
    constructor(pPrenom="", pNom="") {

        this.nom = pNom.toUpperCase();
        this.prenom = pPrenom;

    }
}