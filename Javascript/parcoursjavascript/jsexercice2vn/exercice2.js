//Exercice : Langues
var langue="en";

var langage1="Bonjour tout le monde";
var langage2="Hello world";
var langage3="Hola, Mundo";

(if langue=="fr") {console.log(langage1);}
(if langue=="en") {console.log(langage2);}
(if langue=="es") {console.log(langage3);}


//Exercice : Affichage des scores
var score=69

var reponse1="score A-le plus élevé"
var reponse2="score B-bonne moyenne"
var reponse3="score C-assez bas"

if (score >= 90) {console.log(reponse1);}
else if (score < 90 && score > 50) {console.log(reponse2);}
if (score <= 50) {console.log(reponse3);}


//Exercice : Mettre au pluriel
var singulier="automobile classique"
var nombre=2
var resultat="s"

if (nombre<=1) {console.log("je possède 1 automobile classique");}
else if (nombre>1) {console.log("je possède "+nombre+" automobile"+resultat+" classique"+resultat);}
