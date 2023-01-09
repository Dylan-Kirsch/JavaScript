let formateur = new Personne('BRU','Thierry');
let chatFormateur = new Animal ('Arwen','chat');
let vehiculeFormateur = new Vehicule('ninebot','NavBOT G30MAX','1');
let domicileFormateur = new Maison(1,'rue','du paradis','18999','Las Angelos');

console.log(formateur);
console.log(chatFormateur);
console.log(vehiculeFormateur);
console.log(domicileFormateur);

formateur.afficher()
chatFormateur.afficher()
vehiculeFormateur.afficher()
domicileFormateur.afficher()
