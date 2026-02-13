const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_OcXXlBjdmFyonurW3gjSkj9UoXCqvUCjLLMH75e7CE36satFCxGl6IA2kE0dPtgr";

let storedBreeds = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showCatImageAndInformation(index) {
    document.getElementById("cat_image").src = storedBreeds[index].image.url;
    document.getElementById("breed_name").innerHTML = storedBreeds[index].name;
    document.getElementById("wiki_link").innerHTML =
        storedBreeds[index].wikipedia_url;
    document.getElementById("breed_json").textContent =
        storedBreeds[index].temperament;
}


async function loadCatBreeds() {
    try {
        const response = await fetch(url, {
            headers: {
                "x-api-key": api_key,
            },
        });

        const data = await response.json();

        storedBreeds = data;
        showCatImageAndInformation(
            getRandomInt(0, storedBreeds.length - 1)
        );
    } catch (error) {
        console.log(error);
    }
}

loadCatBreeds();
