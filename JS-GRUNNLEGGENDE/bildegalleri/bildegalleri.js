//let bilder = [seaslug.jpg, matte.png ]

//et current_image = document.createElement(bilder[0])

//function neste_bilde() {
//document.getElementById(bilde).src="_.png";
//}
//Kanskje hide 
//i = 0;

//function neste_bilde() {
    i++;
    document.getElementById("bilde").src = bilder[i];
    if (i == img_array.length - 1) {
        i = -1;

    }


//let butterfly = document.getElementById("butterslug")
//let cabbage = document.getElementById("cabbadug")
//let sea = document.getElementById("seabun")

let bilder = [
    "bilder/butterfly_slug.jpg", 
    "bilder/cabbage_slug.jpg", 
    "bilder/sea_bunny.jpg",
]; 

function lag_bilde() {
    let bilde_nå = document.createElement(bilder[0]);
}

let knapp = document.getElementById("en_knapp");
knapp.addEventListener("click", function() {
  let index = 3;
  bilder.unshift(bilder.splice(index, 1)[0]);
});

// 1. Bildene skal være i en array
// 2. Neste knapp -> Bytter til neste element i arrayen
