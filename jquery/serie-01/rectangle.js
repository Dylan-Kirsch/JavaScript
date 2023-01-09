class Rectangle {

    longueur;
    largeur;

    constructor (pLongueur, pLargeur) {

        this.longueur = pLongueur
        this.largeur = pLargeur

    }
    calculerSurfacePerimetre(resultS, resultP)
    {
        resultS = this.longueur * this.largeur
        resultP = (this.longueur + this.largeur) * 2
        alert(`la surface et de ${resultS} et de périmètre ${resultP}`);
    }

}