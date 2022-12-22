//Exo 1

let date = new Date(2012, 1, 20, 3,12) 
console.log(date);


//Exo 2

function getWeekDay(date) {
   
//     let resultat = "";
//     switch (date.getDay()) {
//         case 0:
//             resultat = 'MO'
//             break;
//         case 1:
//             resultat = 'TU'
//             break;
//         case 2:
//             resultat = 'WE'
//             break;
//         case 3:
//             resultat = 'TH'
//             break;
//     }

//    return resultat

    let listeJours = ['SU','MO','TU','WE','TH','FR','SA']
    return listeJours[date.getDay()];
}
console.log(getWeekDay(date));


//Exo 3

/** dimanche devient le 7éme jour de la semaine au lieu du 1er */

function getLocalDay(date) {

    let resultat = 0;

    if(date.getDay() != 0) {
       resultat = date.getDay() 
    }
    else {
        resultat = 7;
    }
    
    return resultat 
}

console.log(getLocalDay(date));


//Exo 4

/** reculer la date */

function getDateAgo(date,days) {
    
    let resultat = date - (24 * 60 * 60 * 1000) * days;
    return new Date(resultat);

}


console.log(getDateAgo(date,1));
console.log(getDateAgo(date,2));
console.log(getDateAgo(date,365));

//Exo 5 
let year = new Date()
let month = 0;

function  getLastDayOfMonth(year, month) {
    
    let mois = month+1;
    let annee = year;

    if(month > 11) [
        mois = 0,
        annee = annee + 1
    ]
    else {

    }

    date = new Date(annee, mois, 1);
    dernierJour = getDateAgo(date,1)

    return dernierJour.getDate()
}
console.log(getLastDayOfMonth(year,month,1));