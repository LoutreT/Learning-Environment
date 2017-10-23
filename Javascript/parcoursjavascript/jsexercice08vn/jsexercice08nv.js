/*Exemple du README
let table = {};
let main_color = "#FF0000";
let chair = {
	color:main_color,
	feets:4,
	things:["papier","telecommande","clé usb"],
	knock:function(){
		console.log("TAP TAP !");
		console.log(chair.things ); // ["papier",..] si on utilise des références
		console.log(this.things ); // ["papier",...] si on utilise d'autres instances
	}
};
Fin du README du coach*/





/* REMARQUES :
BUT: afficher chaque information sur une ligne séparés dans la console (for in)
var a in character signifie que je veux que les propriété du a soit dans le character
si je fais un
console.log (a) => il ne lira que les propriétés tel que name, age, items
console.log (character [a]) => il lira les propriété : ikko, 18, glaive, choux, bombe.
*/
/*
function giveItem () {
  var items_to_give = ["glaive", "choux", "bombe"]
  var choix = (Math.floor(Math.random()*items_to_give.length))
  console.log (items_to_give[choix]);
}
giveItem()
*/






// EXERCICE : PNJ (Personnage non-joueur)

// Crée un objet "Character" qui contient les informations suivantes :
//afficher chaque information sur une ligne séparés dans la console (for in)
let Character = {
//name (string)
name:"vincent", //string value
//age (numero)
age:14, //number value
//items_to_give (tableau)
items_to_give:['key', 'laptop', 'smartphone'],
}
//faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement
// List the contents of an object
function listObj(objet) {
  for (key in objet) {
    console.log(key + " : " + objet[key]);
  }
}
// Choose an item randomly in an array
function giveItem(objet) {
  return console.log(objet.items_to_give[Math.floor(Math.random()*3)]);
}




//EXERCICE : SHOP
/*Caractéristique de chaque objet :

title (string = épée - hache - sceptre)
physic (int = number 5 - 1211321315544)
magic (int) = number - 554654 - 4654 etc)
minLevel (int) = number
available (boolean = false/true)

Manipulation :*/

//Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)
var objetsaVendre= [

{ title: "épée", physic: 48, magic: 48, minLevel: 17, available: true,
},
{ title: "hache", physic: 98, magic: 27, minLevel: 9, available: false,
},
{ title: "sceptre", physic: 27, magic: 168, minLevel: 25, available: true,
}
];


/* faire une fonction pour afficher tout les objets*/
  for (var element in objetsaVendre) {
    console.log(objetsaVendre[element])
  }


/*faire une fonction pour afficher les objets disponibles*/
function Shop () {
    for (var i=0; i<objetsaVendre.length; i++){   //donc pour i ------>   0 = épée et 1 = hache et 2 = sceptre
      if (objetsaVendre[i].available== true){
        console.log("L'arme " + objetsaVendre[i].title + " est disponible")  //Le point "." signifie sur quel élément il va agir
      } else {
        console.log("L'arme " + objetsaVendre[i].title + " est indisponible")
      }
    }
}
Shop()


/*faire une fonction pour afficher les objets dont le niveau minimum est de 10*/
function level() {
  for (var i=0; i<objetsaVendre.length; i++) {
    if (objetsaVendre[i].minLevel >= 10) {
      console.log("Le niveau de cette " + objetsaVendre[i].title + " est supérieur à 10")
    } /*else {
      console.log("Le niveau de cette " + objetsVendre[i].title + " est inférieur à 10")
    }*/
  }
}
level()









/*Exercice : Personnage

crée un objet "mainCharacter" qui possèdes les propriétés suivantes :
name (string)----> (chaîne de lettre qui constitue un mot = "vincent" ou "automobile" ou "livre"...)
level (int)----> (nombre = par exemple = 5)
life (int) ----> (nombre = par exemple = 5)
weapon (object) ---->  (){}
attack (function) -----> function quelqueChose (5>43){if & else & [...]}

l'objet "weapon" possède les propriétés suivantes :
name (string)
damage (int)

Appeler la fonction "attack" du personnage
la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)*/

var mainCharacter={   // l'objet est appelé "mainCharacter"
  name : 'Terminator',
  level : 60,
  life : 200,
  weapon : {
    namearm : 'canon',
    damage : 50
  },
  attack:function(){
    return this.name + " attaque avec l'arme " + this.weapon.namearm + " les dégâts sont de " + (this.level * this.weapon.damage) +" points !";
  },
}
console.log(mainCharacter.attack());






/*BONUS :

Exercice : Adversaire

crée un objet "character" qui possèe le propriétés suivantes :
name (string)
level (int)
life (int)
weapon (object)
attack (function)
receiveDamage (function)
l'objet "weapon" possèe les propriétés suivantes :
name (string)
damage (int)
crée un objet "opponentCharacter" a partir de character

crée un objet "mainCharacter" a partir de character

Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"

la fonction doit afficher dans la console (ligne par ligne)
(le nom du personnage) attaque (nom de l'adversaire)
avec l'arme (nom de l'arme)
et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
(nom de l'adversaire) a maintenant (life de l'adversaire) de vie*/
