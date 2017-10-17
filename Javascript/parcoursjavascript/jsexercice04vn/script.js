var increment = 0;
while (increment <20) {
    console.log(increment);
    increment = increment + 1;
} // increment est égal a 20


// Pour mettre en marche dans Firefox, ouvrir le menu tout en haut à droite
//puis sélectionner "Développement" puis sélectionner "Outil de développement"


//Exercice : Pair et impair (for)
for (var i = 0; i <= 20; i++) {//i++ est équivalent à i=i+1
    if (i % 2 == 1) {
      console.log(i + " est pair");
    } else{
      console.log(i + " est impaire");
    }
}


//Exercice : Multiplication Tables
var increment = 0;
while (increment <10) {
    console.log(increment);
    increment = increment + 1;
} // increment est égal a 10


for (var=0; i<= 10 ; i++) {
  console.log((i +" * 9 = ") + (i*9))
}


// Tables de multiplication
pour (var i = 0 ; i < 10 ; i++ ) {
    console.log (i*9);
}


//Exercice : assigner des grades
for (var k = 0; k <= 100; k++) {
  if (k >= 90) {
    console.log(k + (" Vous avez le grade A"));
  } else if (k >= 80 && k < 90) {
    console.log(k + (" Vous avez le grade B"));
  } else if (k >= 70 && k < 80) {
    console.log(k + (" Vous avez le grade C"));
  } else if (k >= 65 && k < 70) {
    console.log(k + (" Vous avez le grade D"));
  } else
    console.log(k + (" Vous avez le grade F"));
}


//Exercice : pyramide

var etoile = "";
for(var i=0; i<=4; i++)
{
  etoile += "*";
  console.log(etoile);
}
