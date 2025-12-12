// Variabler 

let antall_liv = 100.8;

const NAVN = "Misha Landon";
let navn = "?!? #¤=12#";
let alder = 17;

const PI = Math.PI;

let array_bilder = ["bilde1.jpg", "bilde2.jpg"];

// Skrive ut

console.log("Mitt navn er " + navn + "!"); 
console.log(`Mitt navn er ${navn} og jeg er 17 år gammel!`);

console.table(array_bilder);

console.warn(PI);

// alert(":)");

document.getElementById("utskrift").innerText = "Mitt navn er " + navn + "!";

let bruker_alder = prompt("Hvor gammel er du?");

document.getElementById("alder").innerText = "Du, bruker, er " + bruker_alder + " år!";

let årstall = new Date().getFullYear();
let årstall_bruker = årstall - bruker_alder
document.getElementById("ÅRSTALL").innerText = "Du var født året " + årstall_bruker + ".";

// ---- Gammel kode, første attempt
//console.log(årstall); 
//let bruker_årstall = prompt("I dag er året " + årstall + ". Hvilket år ble du født?")
//document.getElementById("ÅRSTALL").innerText = "Du var født året " + bruker_årstall + ".";
// let årstall = årstall_nå - bruker_alder

if (alder == 43) {
    alert("Du er 43!");
} else {
    alert("Du er ikke 43!");
}

for (let index = 0; index < array_bilder.length; index = index + 1) {
    console.log = array_bilder[index];
    
}

//function siHeiTil(navn) {
//    console.log("Hei, " + navn + "!");
//}

//siHeiTil("Misha Landon");

// Manipulere CSS

document.body.style.backgroundColor = "blue";
document.getElementById().style.fontSize = "5rem";

//knapp const btn_endreTema = document.getElementById("btn_endreTema");
// btn_endreTema.addEventListener("click", endreTema);
//function endreTema() { document.body.style.backgroundColor = "black"; }
