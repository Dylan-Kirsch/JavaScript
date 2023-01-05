let tailleEcran = 'width=500, height=500';

function openWindow() {
    
    fenetre = window.open('https://www.codepen.io', '', tailleEcran);

}

function resizeByWindow() {
    
    tailleEcran = window.resizeBy(-200, -200);
    console.log(tailleEcran);

}

function resizeToWindow() {
    
    tailleEcran = window.resizeTo(700, 700);
    console.log(tailleEcran);

}

function closeWindow() {

    fenetre.close();
    
}



function coordonnees(pos) {
    
    let crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    
    reponse = confirm("Voulez-vous être géolocaliser ? ")

        if (reponse == true) {

            document.querySelector('#p2').innerHTML= 'Latitude : ' + latitude.toFixed(2);
            document.querySelector('#p3').innerHTML= 'Longitude : ' + longitude.toFixed(2);
            
        } else {

        }
}

    