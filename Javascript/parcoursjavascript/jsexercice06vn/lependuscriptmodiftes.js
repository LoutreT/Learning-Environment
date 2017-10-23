// let motPendu = ["B","O","N","J","O","U","R"];
// let motTrouve = ["_", "_", "_", "_", "_", "_", "_"];
// var penduEntier = motPendu.join("");
// var trouveEntier = motTrouve.join();
// var message = "";
// var longeurMotPendu = motPendu.length;
// var tentativeTotale = 0;
// var tentativeJouee = 0;
// var tentativeRatee = 0;
// var essaiRestant = longeurMotPendu - tentativeRatee;
// let lettreJouee = [];
//
// function guessLetter() {
// 	if (essaiRestant == 0){
// 		alert("Vous n'avez plus d'essais");
// 	}
//
// 	var essai = window.prompt (message + " Entrez une lettre " + trouveEntier, "");
// 	essai = essai.toUpperCase();
// 	console.log(essai);
//
// 	if (essai == penduEntier){
// 		tentativeJouee++;
// 		alert("Vous avez gagné!");
// 	}else if (essai.length != 1){
// 		message = "Essaie encore";
// 		console.log(message);
// 		guessLetter();
// 	}else if (lettreJouee.indexOf(essai) != -1){
// 		tentativeJouee++;
// 		tentativeRatee++;
// 		essaiRestant = longeurMotPendu - tentativeRatee;
// 		alert("Déjà tenté!");
// 		guessLetter();
// 	}else{
// 		lettreJouee.push(essai);
// 		tentativeJouee++;
// 		if (motPendu.indexOf(essai) == -1){
// 			tentativeRatee++;
// 			essaiRestant = longeurMotPendu - tentativeRatee;
// 			alert("Essaie encore");
// 			guessLetter;
// 		}
// 		for (i=0; i<longeurMotPendu; i++){
// 			if (essai == motPendu[i]){
// 				motTrouve.splice(i,1,essai);
// 				tentativeTotale++;
// 				trouveEntier= motTrouve.join();
// 				alert("Bien joué");
// 			}
// 		}
// 	if (tentativeTotale != longeurMotPendu){
// 		guessLetter();
// 	}else{
// 		alert("Vous avez gagné!")
// 	}
// 	}
// }
//
// guessLetter();
// © 2017 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// API
// Training
// Shop
// Blog















/*version Axel/Kevin/Antoine du cours de rattrappage de mercredi soir

var mot=['B','O','N','J','O','U','R'];
var lettreDevinee=['','','','','','',''];
var compteurVictoire=0;

function guessLetter(){            //pour mémoriser ce qui sera écrit par le participant au jeu.
	var message = window.prompt("Entrer une lettre à deviner");    //pour afficher une fenêtre "Entrer une lettre".
	message = message.toUpperCase(); //pour transformer en majuscule toutes les lettres de l'utilisateur pour qu'elles correspondent aux lettres majuscules de "BONJOUR"
  console.log(message);            //pour afficher "Entrer une lettre à deviner" dans l'inspecteur du siteweb


	if(message.length > 1)           //On vérifie que l'utilisateur a bien mis qu'un seul alphabet et pas plusieurs.
	{
		console.log("trop de caractère");
		window.alert("tu le fais exprès ou quoi?");
	}


	else
	{
		if (mot.indexOf(message) === -1){   /*Ici, si on met une seule lettre c'est bien, mais si ce
		n'est pas la bonne lettre alors programmatiquement on nommera ça par "-1" parce que la valeur est à effacer*/

			//pour les mauvaises lettres non indéxées dans "BONJOUR", on n'écrit pas 0(zéro) mais on écrit "-1".
			/* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf
			console.log("Introuvable !");
		}


		else
		{
			console.log("trouvé !");
			window.alert("Trouvé !");
			for (i=0;i<mot.length;i++){
				//   i=  0=B
				//i++= i(0)+1=O
				//i+1+1= 2=N
				//i+1+2= 3=J
				//i+1+3= 4=O
				//i+1+4= 5=U
				//i+1+5= 6=R


				if(message === mot[i]){
					compteurVictoire++;
					console.log("compteur"+compteurVictoire);
          windows.alert("yeah ! J'ai trouvé ta lettre à l'index"+i);
					lettreDevinee.splice(i,1,message);
				}
			}
		}
	}
	if(compteurVictoire == mot.length){
		//console.log("win !");
		window.alert("win!");
	}
	else{
		guessLetter();
	}
	guessLetter();
}

guessLetter();
*/



//version Gaetan


function guessLetter() {
    var textTyped = window.prompt('Enter a letter here')[0];
    for (var i = 0; i < word.length; i = i + 1) {
      var letter = word[i];
      if (letter.toLowerCase() === textTyped.toLowerCase()) wordGuessed[i] = letter;
    }
    alert(wordGuessed.join(' '));
    if (wordGuessed.indexOf("_") === -1) alert("Congratulations!");
    else guessLetter();
  }
  var word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
  var wordGuessed = ['_', '_', '_', '_', '_', '_', '_'];
guessLetter();
