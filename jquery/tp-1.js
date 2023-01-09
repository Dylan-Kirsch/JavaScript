$(document).ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
}
    );


$(document).ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
    }
);


$('#zoom').click(function(){
    
    console.log('click sur zoom');
    zoom();

});

$('#dezoom').click(function(){
    console.log('click sur dezoom');
    dezoom();
});


$(document).keyup(function(touche){
    // on écoute l'évènement keyup()
       var appui = touche.which || touche.keyCode; 
   // le code est compatible tous navigateurs grâce à ces deux propriétés
   
    if (appui == '107') {
        zoom()
    } else if(appui == '109') {
        dezoom()
    }

});

function zoom() {
    $('img').each(function () {
        console.log('une image trouvee! a zoommer');
        $(this).css('width', '100%');

    });

    $('#zoom').prop('disabled', true);
    $('#dezoom').prop('disabled', false);
}

function dezoom() {
    $('img').each(function () {
        console.log('une image trouvee!a dezoommer');
        $(this).css('width', '20%');

    });
    $('#dezoom').prop('disabled', true);
    $('#zoom').prop('disabled', false);
}

