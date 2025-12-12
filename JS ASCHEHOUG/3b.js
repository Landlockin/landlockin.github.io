// let riktig_tall = 42;

//let gjettet;

//gjettet = 17;

//console.log(gjettet == riktig_tall); // gir false

//console.log(gjettet > riktig_tall);
//console.log(gjettet < riktig_tall);

//if (gjettet === riktig_tall) {
   //console.log("Riktig!");
//} else if (gjettet < riktig_tall) {
 //   console.log("For lavt");
//} else {
//    console.log("For høyt");
//}

//}   else if (gjettet > riktig_tall) {

//if (gjettet !== riktig_tall)   console.log("Feil!");   }



let spørsmål = prompt("Hva er favorittmaten din?") 
let favorittmat = spørsmål.toLowerCase();
if (favorittmat.includes("hvitløksbrød")) {
    alert("Jeg elsker hvitløksbrød jeg og!");
} else {
     alert("OK!");
}

// ---------------------------------
let tilfeldig = Math.floor(Math.random() * 3);

if (tilfeldig === 0) {
  console.log("Du er den beste koderen i landet!");
} else if (tilfeldig === 1) {
  console.log("Steve Jobs kan ikke måle seg med deg!");
} else if (tilfeldig === 2) {
  console.log("Du er den neste Mark Zuckerberg!");
} else {
  console.log("NAJSDAJSKBDSJKBKJASBDJKBSDKJABD")
 
  }

let alder = 22;
if (alder >= 13) {
    if (alder <= 19) {
        console.log("Du er en tenåring");
    }
}

if (alder >= 13 && alder <= 19) {
    console.log("Du er ten tenåring");
}

if (alder < 13 || alder > 19) {
    console.log("Du er ikke en tenåring");
}

let i = 1;

while (i <= 100) {
    console.log(i);
    i++; // Økes med 1
}

//if (!myndig) {
//7  console.log("Du er ikke myndig.");
//}

let tall = 0;
while (tall < 0.9) {
    console.log(tall);
    tall = Math.random();
}

for (let i = 1; i <= 100; i++) {
    console.log(i)
}

let quote = "Daisy, daisy, give me your answer do.";
let antall = 0;

for (let i = 0; i < quote.length; i++) {
    console.log(quote[i]);

}

for (let i = 0; i < quote.length; i++) {
    if (quote[i] === "s") {
        antall++;
    }
}

console.log(antall);

//Synes at dette er lettere 

let sitat = "You shall not pass!";

for (let bokstav of sitat) {
  console.log(bokstav);
}

