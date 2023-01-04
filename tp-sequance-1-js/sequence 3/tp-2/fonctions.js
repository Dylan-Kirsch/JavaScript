function changerImage(pEvent) {
    
    let image = document.querySelector('#id_image');
    image.src = pEvent.srcElement.value;

    let text = document.querySelector('#id_quoi');
    text.innerText = pEvent.srcElement.id;


}

function survolImage(pEvent) {

    let images = document.querySelector('#id_image');
    images.src = pEvent.srcElement.src;

    let texts = document.querySelector('#id_quoi');
    texts.innerText = pEvent.srcElement.id;

}
