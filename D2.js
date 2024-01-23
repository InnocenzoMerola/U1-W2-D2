/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 17;
const num2 = 21;

if (num1 > num2) {
  console.log(`Il Numero maggiore è ${num1}`);
} else {
  console.log(`Il Numero maggiore è ${num2}`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num4 = 18;

if (num4 === 5) {
  console.log("equal");
} else {
  num4 !== 5;
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num5 = 25;

if (num5 === 25) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num6 = 8;
const num7 = 12;

if (num6 === 8 || num7 === 8) {
  console.log("un numero è 8");
} else if (num7 - num6 === 8) {
  console.log("la loro sottrazione è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  const totalShoppingCart = 120;
  if (totalShoppingCart > 50) {
    console.log("spedizione gratuita");
  } else if (totalShoppingCart < 50) {
    console.log("spedizione = 10 euro");
  }
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const fornito = 5;
if (typeof fornito === "number") {
  console.log("Numero");
} else if (typeof fornito !== "number") {
  console.log("Non è un numero");
}

// ------------------------------
const fornito1 = 21;
console.log(typeof fornito1);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const n1 = 80;
console.log(n1 % 2);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
{
  const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };

  me.city = "Toronto";
  console.log(me);
}
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
{
  const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };
  delete me.lastName;
  console.log(me);
}
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
{
  const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };
  console.log(me.skills);
  me.skills.pop();
  console.log(me.skills);
}
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numbers = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);
numbers.push(5);
numbers.push(6);
numbers.push(7);
numbers.push(8);
numbers.push(9);
numbers.push(10);

console.log(numbers);

/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.splice(9, 9, 100);
console.log(numbers);
