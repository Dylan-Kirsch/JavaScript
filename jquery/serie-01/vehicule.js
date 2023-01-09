class Vehicule {

    marque;
    souMarque;
    nombre;

    constructor(pMarque,pSouMarque,pNombre) {

        this.marque = pMarque;
        this.souMarque = pSouMarque;
        this.nombre = pNombre
    }
    afficher()
    {
        console.log(`Le véhicule est de la marque ${this.marque} et du modèle ${this.souMarque}. Il peut transporter ${this.nombre} personne`);
    }

}