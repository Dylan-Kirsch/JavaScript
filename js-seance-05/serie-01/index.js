// EXO 1,2
function action(event)
{
    // sur mouse Event :  event.srcElement
    event.srcElement.style.visibility="visible";
    //event.srcElement.style.visibility="visible";
    event.srcElement.style.display="none";
}


// EXO 3
function afficher() {
    
    let images = document.querySelectorAll('img');
    images.forEach(image=>{
        // image.style.display="block";
        // image.style.visibility="visible";
        image.style.display="block";
        image.style.visibility="visible";
    })
}

function cacher() {

    let images = document.querySelectorAll('img');
    images.forEach(image=>{
        image.style.display="block";
        image.style.visibility="hidden";
    })
}

//EXO 4
function desactiver() {
    
    let images = document.querySelectorAll('img');
    images.forEach(image=>{
        image.removeEventListener("dblclick",action);
    })
    // document.querySelector('#afficher').removeEventListener("click",afficher);
    // document.querySelector('#cacher').removeEventListener("click",cacher);
}

function activer() {
    let images = document.querySelectorAll('img');
    images.forEach(image=>{
        image.addEventListener("dblclick",action);
    })
    // document.querySelector('#cacher').addEventListener("click", cacher);
    // document.querySelector('#afficher').addEventListener("click", afficher);
}

/*****************        **************/

// EXo 1, 2
let reference =document.querySelectorAll('img');
reference.forEach(image=>{
     image.addEventListener('dblclick',action);
})

//EXO 3
let affiche = document.querySelector('#afficher');
affiche.addEventListener('click',afficher);

let cache = document.querySelector('#cacher');
cache.addEventListener('click', cacher);

// EXO 4
let desactive = document.querySelector('#desactiver');
desactive.addEventListener('click', desactiver);

let active = document.querySelector('#activer');
active.addEventListener('click', activer);