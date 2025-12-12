let alder = Number(prompt("Hei! Hvor gammel er du?"));

if (alder >= 24) {
  console.log("MOPED, BIL, LASTEBIL, BUSS");
} else if (alder >= 21) {
  console.log("MOPED, BIL, LASTEBIL");
} else if (alder >= 18) {
  console.log("MOPED, BIL");
} else if (alder >= 16) {
  console.log("MOPED");
} else {
  console.log("! DU ER FOR UNG");
}

console.log("Her er alle sertifikatene du kan ta.");