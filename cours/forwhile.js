//let ageVisiteur = parseInt(prompt("Quel âge as-tu ?"));
//console.log (typeof ageVisiteur);

/*for (let index = 0; index < Array.length; index++){
 const element = Array[index];
}*/
/*for (let i = 0; i < 10; i++){
 console.log("le Tour n° :" + i);
}

const fruits = [ "Banane", "Pomme", "Poire", "Fraise"];
/*for (let index = 0; index < Array.length; index++){
 const element = Array[index];
}
for (let i = 0; i < fruits.length; i++){
 console.log("j'aime la " + fruits[i]);
}


/*while(condition)
  // code à exécuter tant que la condition est vraie*/

/*let compteur = 0;
while(compteur < 3){
 console.log("Le compteur est à : " + compteur);
 compteur++;
}

/* EXEMPLE DE BOUCLE INFINIE (A NE PAS FAIRE)
let i =0;
while (i<3){
  console.log("Ceci ne s'arrêtera jamais !");
 // on a oublié d'incrémenter i
}*/

// JEU DE DEVINETTE

const nombreSecret = 2;
let tentative = 0;

tentative = parseInt(prompt("Devine le nombre secret entre 1 et 10"));

while(tentative !== nombreSecret){

  alert("Mauvais numéro, réessaie !");
  tentative = parseInt(prompt("Devine le nombre secret entre 1 et 10"));
}

alert("Bravo, tu as trouvé le nombre secret !" + nombreSecret);