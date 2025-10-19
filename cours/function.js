

function decompte(n) {
  if (n===0){
    console.log ("Décollage !");
    return;
  }

  console.log(n);
  decompte(n-1);
}
// appel de la fonction
decompte(5);



 
function factorielle(n){
  if (n===0){
    return 1;
  }
  else{
    return n * factorielle(n-1);
  }
}
let resultat= factorielle(5);
console.log("Le résultat de la factorielle est : " + resultat);


// BOUCLE DO WHILE
let i=0;
do {
  console.log("Le nombre est:" + i);
  i++;
}
while (i<5);

const colors = ["Red", "Yellow", "Blue"];
 for (const color of colors){
   console.log(color);
 }


/*  A DECOUVRIR


function fibonacci(n){
  if (n===0){
    return 0;
  }
  else if (n===1){
    return 1;
  }
  else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
let fibo = fibonacci(6);
console.log("Le résultat de la suite de Fibonacci est : " + fibo);

// EXERCICE : Écrire une fonction qui calcule la somme des n premiers entiers naturels (1 + 2 + ... + n) de manière récursive.
function sommeEntiers(n){
  if (n===0){
    return 0;
  }
  else{
    return n + sommeEntiers(n-1);
  }
}
let somme = sommeEntiers(5);
console.log("La somme des 5 premiers entiers naturels est : " + somme);

// EXERCICE : Écrire une fonction qui détermine si un nombre est premier de manière récursive.
function estPremier(n, div=2){
  if (n < 2){
    return false;
  }
  else if (n === 2){
    return true;
  }
  else if (n % div === 0){
    return false;
  }
  else{
    return estPremier(n, div + 1);
  }
}
let estPremierResult = estPremier(7);
console.log("Le nombre 7 est-il premier ? " + estPremierResult);*/
