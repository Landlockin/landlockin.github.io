
let tall = [];
for (let i = 0; i < 100; i++) {
    let tilfeldig_tall = Math.floor(Math.random() * 200) +1;
    tall.push(tilfeldig_tall);
}

console.log(tall);


let høyere_enn_fem = 0;

for (let i = 0; i < tall.length; i++) {
  if (tall[i] >=5) {
    høyere_enn_fem++;
  }
}

console.log(høyere_enn_fem);

let fire = 0;

for (let i = 0; i < tall.length; i++) {
  if (tall[i] ==4) {
    fire++;
  }
}

console.log(fire);

let sum = 0;
for (i = 0; i < tall.length; i++) {
  sum += tall[i];
}

console.log(sum) 

gjennomsnitt = sum / tall.length 
console.log(gjennomsnitt)

console.log(Math.max(tall))
console.log(Math.min(tall))