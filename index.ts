//Exercice 1
/**
 * Avec les deux méthodes : simple console.log et fonction
 *
 */

const prenom2: string = "Michel";
console.log("bonjour " + prenom2);
// avec fonction
function lolo(prenom3: string): string {
  return "bonjour " + prenom3;
}
console.log(lolo("Michel"));

lolo("Michel");

//Exercice 2
/**
 * Je réalise une jolie addition
 * @param nombre1
 */

function opeAdd(nombre1: number, nombre2: number): void {
  const result: number = nombre1 + nombre2;
  console.log(nombre1 + " + " + nombre2 + " = " + result);
}
opeAdd(10, 25);

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

/**
 * Calcul de la perte ou du bénéfice
 * @param prixVente
 * @param prixFab
 * @returns
 */

function calculerBenefice(prixVente: number, prixFab: number): string {
  const benefice: number = prixVente - prixFab;
  if (benefice < 0) {
    return `Perte de ${-benefice} €`;
  } else if (benefice > 0) {
    return `Gain de ${benefice} €`;
  } else {
    return `Ni perte, ni profit`;
  }
}
console.log(calculerBenefice(100, 150));

// Exercice 4
/**
 *
 */
function AskNumber() {
  let num3: number = 25;
  let num4: number = 140;
  let num5: number = 20;

  console.log(num3, num4, num5);

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

/*
function(nombre4 :number,  nombre5:number, nombre6:number){
  let plusGrandNombre : number = nombre4;
  if (nombre5> plusGrandNombre){
    plusGrandNombre = nombre5;
      }
      else if (nombre6>plusGrandNombre){
        plusGrandNombre = nombre6;
      }
    }
}
*/

console.log(AskNumber());
// Avec une autre méthode :
console.log(Math.max(1, 5, 2));
//  attendu en console : 701

//Exercice 5
const array1 = [1, 3, 2, 10, 14, 701, 80, 9, 10];
console.log(Math.max(...array1));
// attendu en console : 701

// Avec fonction :
function plusGransNombreDeux(...nombres: number[]) {
  let max: number = 0;
  for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] > max) {
      max = nombres[index];
    }
  }
  return max;
}
console.log(`Le nombre le plus grand est ${plusGransNombreDeux}`);

//Exercice 6 :
/**
 * Attribue une mention en fonction de la moyenne
 */
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
  } else if (note < 0 && note > 20) {
    console.log("Note invalide");
  }
  mention();
}
const eleveX = console.log((nameEleve = "Dugland"), (note = 8));

//Autre méthode :
/**
 *
 * @param eleveNote
 *  * @returns

function verificationNote(eleveNote: number): boolean {
  if (note < 0 || note > 20) {
    return false;
  } else {
    return true;
  }
}
function calculerMoyenne(...eleveNotes: number[]): number {
  let moyenne = 0;
  for (let eleveNote of eleveNotes) {
    if (verificationNote(eleveNote)) {
      moyenne += eleveNote;
    } else {
      console.log(`La note ${eleveNote} até ignorée car non valide`);
    }
  }
}

function bulletin(nomEleve: string, ...eleveNote: number[]): string {
  return ``;
}
 */

//Exercice7
/**
 * Je mets en place une fonction qui permettra de résoudre n'importe quelle opération de base,
 * (opération, soustraction, multiplication, division)
 *
 * @param chiffre1
 * @param chiffre2
 * Lorsque l'on rentrera un opérateur +,-,* ou /, on obtientra le résultat de l'opération.
 * @param operateur
 */
function exercice7(
  chiffre1: number,
  chiffre2: number,
  operateur: string
): void {
  if (operateur == "+") {
    //console.log(resultEx7 = Chiffre1 + chiffre2);
    const resultEx7 = chiffre1 + chiffre2;
    console.log(`Le résultat est ${chiffre1} + ${chiffre2} = ${resultEx7}`);
  } else if (operateur == "-") {
    const resultEx7 = chiffre1 - chiffre2;
    console.log(`Le résultat est ${chiffre1} - ${chiffre2} = ${resultEx7}`);
  } else if (operateur == "*") {
    const resultEx7 = chiffre1 * chiffre2;
    console.log(`Le résultat est ${chiffre1} x ${chiffre2} = ${resultEx7}`);
  } else if (operateur == "/") {
    const resultEx7 = chiffre1 / chiffre2;
    console.log(`Le résultat est ${chiffre1} / ${chiffre2} = ${resultEx7}`);
  } else {
    console.log(``);
  }
}

exercice7(15, 20, "+");
exercice7(15, 20, "-");
exercice7(15, 20, "*");
exercice7(15, 20, "/");

//Exercice8
/**
 * Bon, je galère sur cet exercice, le reprendrai plus tard, à tête reposée.
 * Parce que là, mon code ne mène à rien... lol *
 
let userNumber = 0;
let star = "*";
function pyramide(userNumber) {
  for (let i = 1; i <= userNumber; i++) {
    console.log(`star + ${star}`);
  }
}
pyramide(5);

function pyramide(userNumber : number){
  let ligne = ""
  for(let index = 0; index<userNumber; index++){
    ligne += "#"
    console.log(ligne);
}
console.log(ligne + "#")

for (let index =0; index <userNumber; index--){
  ligne=ligne.substring(0, index);
  console.log(ligne);
}
pyramide(8);
*/

//Exercice9

function monnaie(newNombre : number):void {
  const monnaies:number[]=[
    500, 200, 100, 50, 20,10, 5, 2,1,0.5,0.2, 0.1, 0.05, 0.02,0.01,
  ];

  for (let monnaie of monnaies){
    let nombreMonnaie = Math.floor(newNombre / monnaie);
    if (nombreMonnaie !== 0){
      if (monnaie >= 5) {
        console.log(`Pièces de ${monnaie}€ : ${nombreMonnaie}`)
      }
      newNombre -= nombreMonnaie * monnaie
    }
  }
}
monnaie(888.88);

// Exercice 10 : définir la température la plus proche de zéro
/**
 * Retourne la température la plus proche de 0
 * @param temmperatures Liste de températures
 * @returns température 
 */
function temperaturePlusProcheDeZero(...temperatures: number[]) : number{
  let plusProcheDeZero = temperatures[0];
  for(let temperature of temperatures){
    if (Math.abs(temperature) < Math.abs(plusProcheDeZero)){
      plusProcheDeZero = temperature
    }
  }
return plusProcheDeZero;
}