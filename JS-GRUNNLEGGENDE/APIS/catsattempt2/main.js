const url = `https://api.thecatapi.com/v1/breeds`;

const api_key = "live_OcXXlBjdmFyonurW3gjSkj9UoXCqvUCjLLMH75e7CE36satFCxGl6IA2kE0dPtgr";


// Variable til å lagre informasjon om de ulike katterasene
let storedBreeds = [];

// Funksjon til å velge tilfeldig rase

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funksjon til å vise bilder og informasjon av rasene
function showCatImageAndInformation(index) {

    // Viser bilde av katten :)
    document.getElementById("cat_image").src = storedBreeds[index].image.url;

    // Viser rasenavnet
    document.getElementById("breed_name").innerHTML = storedBreeds[index].name;

    // Wiki lenke
    document.getElementById("wiki_link").innerHTML = 
      storedBreeds[index].wikipedia_url; 

    // Egenskaper av katten
    document.getElementById("breed_json").textContent =
      storedBreeds[index].temperament;
}

// For å få data fra API-en
fetch(url,   {
    headers: {
        "x-api-key": api_key,
    },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Data fra API til variablen 
    storedBreeds = data;

    // Bruker random funksjon til å velge en spesifikk rase, og få info
    showCatImageAndInformation(getRandomInt(0, storedBreeds.length - 1)); 
  })
  .catch(function (error) {
    console.log(error);
  });