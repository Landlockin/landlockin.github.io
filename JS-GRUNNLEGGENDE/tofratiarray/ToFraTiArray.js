let placeholder = document.getElementById("placeholder")
let placeholder2 = document.getElementById("placeholder2")

let array = [
  "Amelia", 
  "Liam", 
  "Bryce", 
  "Taylor", 
  "Charlotte", 
  "Owen", 
  "Micheal", 
  "Stone", 
  "Sebastian", 
  "Tracy"];

let valgt_person = Math.floor(Math.random() * array.length)

let valgt_person2 = Math.floor(Math.random() * array.length)


placeholder.textContent = valgt_person


// Mulige metoder ._.

// Funket ikke X Bruke metoden fra SLOTL
// While løkke: loop helt til valgt_person2 er noen andre
// Noe med appendchild 