const bilder = [
    "bilder/butterfly_slug.jpg",
    "bilder/cabbage_slug.jpg",
    "bilder/sea_bunny.jpg",
];

let index = 0;
const slug = document.getElementById("bilde");
const knappH = document.getElementById("knapp_høyre");
const knappV = document.getElementById("knapp_venstre");

knappH.addEventListener("click", function () {
    index++;
    if (index >= bilder.length) {
        index = 0;
    }
    slug.src = bilder[index];
});

knappV.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = 2;
    }
    slug.src = bilder[index];
});

viten_navn = document.getElementById("navn")

//let viten_navn;
if (index == 0) {
    viten_navn.textContent = "Cyerce nigra";
} else if (index == 1) {
    viten_navn.textContent = "Nembrotha cristata";
} else {
    viten_navn.textContent = "Jorunna parva";
}

//navn.textContent = viten_navn;
