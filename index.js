/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

//// OR

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let sortedNames = pets.sort();
console.log(sortedNames);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let reverseNames = pets.reverse();
console.log(reverseNames);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[0].licensePlate = "En837VH";
  cars[1].licensePlate = "Ah467TL";
  cars[2].licensePlate = "Kl097ZH";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

/*   const oggetto = {
  brand: "Fiat",
  model: "Punto",
  color: "Red",
  trims: "GT",
};

cars.push(oggetto);
console.log(cars);

*/

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.unshift(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt() === "b") {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (i < numericArray.length) {
  if (numericArray[i] !== 32) {
    i++;
    console.log(numericArray[i]);
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numero = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      numero.push(1);
      break;
    case "b":
      numero.push(2);
      break;
    case "c":
      numero.push(3);
      break;
    case "d":
      numero.push(4);
      break;
    case "e":
      numero.push(5);
      break;
    case "f":
      numero.push(6);
      break;
    case "g":
      numero.push(7);
      break;
    case "h":
      numero.push(8);
      break;
    case "i":
      numero.push(9);
      break;
    case "l":
      numero.push(10);
      break;
    case "m":
      numero.push(11);
      break;
    case "n":
      numero.push(12);
      break;
    case "o":
      numero.push(13);
      break;
    case "p":
      numero.push(14);
      break;
    case "q":
      numero.push(15);
      break;
    case "r":
      numero.push(16);
      break;
    case "s":
      numero.push(17);
      break;
    case "t":
      numero.push(18);
      break;
    case "u":
      numero.push(19);
      break;
    case "v":
      numero.push(20);
      break;
    case "z":
      numero.push(21);
      break;
  }
}
console.log(numero);
