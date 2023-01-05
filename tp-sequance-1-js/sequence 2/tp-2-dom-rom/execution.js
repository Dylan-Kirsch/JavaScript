let b1 = document.querySelector('#open');
b1.addEventListener('click', openWindow)

let b2 = document.querySelector('#resizeBy');
b2.addEventListener('click', resizeByWindow)

let b3 = document.querySelector('#resizeTo');
b3.addEventListener('click', resizeToWindow)

let b4 = document.querySelector('#close');
b4.addEventListener('click', closeWindow)


let pInfo = document.querySelector('#p1');
pInfo.innerText=`hauteur:${window.innerHeight} largeur:${window.innerWidth} couleurs:${screen.colorDepth}`
/**
 * Détection du changement de taille de la fenetre grace à l'objet window créé automatiquement (instance de la classe Window)
 */
window.addEventListener('resize',()=>{
    // ceci est une fonction anonyme
    console.log('resize');
    pInfo.innerText=`hauteur:${window.innerHeight} largeur:${window.innerWidth} couleurs:${screen.colorDepth}`
})


let geo = document.querySelector('#géolocalisation');
geo.addEventListener('click', navigator.geolocation.getCurrentPosition(coordonnees))

