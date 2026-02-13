const contestants = [
    { name: "Liam", age: 21 },
    { name: "Bryce", age: 22 },
    { name: "Amelia", age: 20 },
    { name: "Taylor", age: 17 },
    { name: "Charlie", age: 5 }
];

console.table(contestants);

const adults = contestants.filter(contestant => contestant.age >= 18);
// const new_variable = variable.filter(other_variable => variable.age >= number)
// Person er et navn vi gir hver linje/elememt/objekt
console.table (adults); 
// Så filter gir et nytt array med vilkårene ovenfor

const contestant_over_20 = contestants.find(contestant => contestant.age > 20)
console.table(contestant_over_20);
// Det er bare Liam her fordi find returnerer bare den første personen 
// som oppfyller vilkåren 

const name_array = contestants.map(contestant => contestant.name);
console.table(name_array); 
// Map lager et nytt array som transformerer hvert element i det opprinnelige
// arrayet. Så dette gir et array med bare navn

const total_age = contestants.reduce((sum, contestant) => sum  + contestant.age, 0);
console.log(total_age);
// Reduce reduserer arrayene til en enkelt verdi
// Ved å bruke en funksjon som kombinerer elementene 

const has_adult = contestants.some(contestant => contestant.age >= 18);
console.log(has_adult);

const every_adult = contestants.every(contestant => contestant.age >= 18);
console.log(every_adult); 

const sorting_by_age = contestants.slice().sort((a, b) => a.age - b.age);
console.table(sorting_by_age);
// Hva gjør slice? "Returnerer valgte elementer i en ny array" oki doki 

// Hehe mer testing

const over_fifteen = contestants.filter(contestant => contestant.age > 15);
console.table(over_fifteen)

const rev_age_sort = contestants.slice().sort((b, a) => b.age - a.age);
console.table(rev_age_sort);

// How to reverse sort lmfao ? ??

// Så skal vi teste kopiering 