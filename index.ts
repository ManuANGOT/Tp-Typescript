//Exercice 1
const prenom2: string = "Michel";
console.log("bonjour " + prenom2);

//Exercice 2
let num1: number = 1;
let num2: number = 2;
console.log("Le nombre 1 = " + num1 + ", le nombre 2 = " + num2);


//Exercice 3
let prixVente: number = 20;
let prixFab: number = 35;

function result() {
  if (prixVente - prixFab > prixFab) {
    console.log("Perte de " + (prixVente - prixFab) + " €");
  } else if (prixVente - prixFab < prixFab) {
    console.log("Perte de " + (prixVente - prixFab) + " €");
  }
}
result();

// Exercice 4
function AskNumber() {
  let num3: number = 25;
  let num4: number = 140;
  let num5: number = 20;

  console.log(num1, num2, num3);

  if (num3 > num4 && num3 > num5) {
    console.log(
      `[${num3}, ${num4}, ${num5}] Le nombre num1 : ${num3} est le plus grand`
    );
  } else if (num4 > num3 && num4 > num5) {
    console.log(
      `[${num3}, ${num4}, ${num5}] Le nombre num2 : ${num4} est le plus grand`
    );
  } else if (num5 > num3 && num5 > num4) {
    console.log(
      `[${num3}, ${num4}, ${num5}}] Le nombre num3 : ${num5} est le plus grand`
    );
  }
}

console.log(AskNumber());
// Avec une autre méthode :
console.log(Math.max(1, 5, 2));
//  attendu en console : 701

//Exercice 5
const array1 = [1, 3, 2, 10, 14, 701, 80, 9, 10];

console.log(Math.max(...array1));
// attendu en console : 701


//Exercice 6 :
let nameEleve: string = "";
let note: number = 0;

function mention() {
  if (note <= 4) {
    console.log("Catastrophique");
  } else if (note > 5 && note < 10) {
    console.log("Insuffisant");
  } else if (note >= 11 && note < 14) {
    console.log("Passable");
  } else if (note >= 15 && note < 18) {
    console.log("Bien");
  } else if (note >= 19 && note <= 20) {
    console.log("Très bien");
    
  }
  else if (note < 0 && note >20){
    console.log("Note invalide");
  }
  mention();
}
const eleveX = console.log((nameEleve = "Dugland"), (note = 8));


//Exercice7
let userNumber1 : number = 50;
let userNumber2 : number = 70;



