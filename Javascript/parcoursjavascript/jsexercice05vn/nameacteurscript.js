
//n
let noms=["Stalone","Schwarzzenegger","Vandam"];
var add = prompt("Entrez un nom d'acteur");
noms.push(add);
for (let i=0; i<noms.length; i++){
  console.log("L'acteur en position " + (i+1) + " est " + noms[i] + ".");
  document.write("L'acteur en position " + (i+1) + " est " + noms[i] + ". <br>");
}
