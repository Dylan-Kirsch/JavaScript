class Cercle {

    longueur;
    largeur;
    rayon;

    constructor (pLongueur, pLargeur, pRayon) {

        this.longueur = pLongueur
        this.largeur = pLargeur
        this.rayon = pRayon

    }
    calculerSurfacePerimetreRayon(resultP, resultS, resultR)
    {

        resultS = this.longueur * this.largeur
        resultP = (this.longueur + this.largeur) * 2
        resultR = 2 * Math.PI * this.rayon
        alert(`le cercle a une surface de ${resultS} de périmètre ${resultP} et un rayon de ${resultR}`);

    }
}