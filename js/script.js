console.log("JAVA OK");

// Definisci variabili

let km;
let age;
let tPrice;

// Chiedi all'utente quanti chilometri deve percorrere
km = prompt('Inserisci i chilometri da percorrere' , '1');
console.log(km);


// Chiedi all'utente quanti anni ha il passeggero
age = prompt('Inserisci l\'età del passeggero' , '20');
console.log(age);


// ! Validazione

let validation = true;
let message;

if (isNaN(km) || isNaN(age)) {
    validation = false;
    message = ('Devi inserire un numero');
} 


if (validation === true) {
    // Calcola il prezzo del biglietto in base ai chilometri
    tPrice = km * 0.21;

    // Calcolo dell'età
    if (age < 18) {
    tPrice += - (tPrice * 0.2);
    console.log(tPrice);
    } else if (age > 64) {
    tPrice += - (tPrice * 0.4);
    console.log(tPrice);
    }
    // Trova il placeholder nel DOM e inserisci il prezzo, l'età e i chilometri
    document.getElementById('pricePlaceHolder').innerText = tPrice.toFixed(2);
    document.getElementById('kmPlaceHolder').innerText = km;
    document.getElementById('agePlaceHolder').innerText = age;

} else {
    alert(message);
}

