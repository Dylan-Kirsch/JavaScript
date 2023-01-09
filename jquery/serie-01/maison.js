class Maison {

    numero;
    voie;
    address;
    codePostal;
    ville;

    constructor(pNumero,pVoie,pAddress,pCodePostal,pVille) {

        this.numero = pNumero;
        this.voie = pVoie;
        this.address = pAddress;
        this.codePostal = pCodePostal;
        this.ville = pVille;
    }
    afficher()
    {
        console.log(`Le logement se situe ${this.numero} ${this.voie} ${this.address} - ${this.codePostal} ${this.ville} `);
    }

}