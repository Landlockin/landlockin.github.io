async function hentData() {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    console.log("Alle data:");
    console.log(data);
    console.log("\nBare vitsen:");
    console.log(data.value)
}

hentData();

async function hentVits() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();

    // Dette tømmmer siden for gamle vitser
    document.querySelector("#vitsen").innerHTML = "";

    // Opprettar ein ny vits i ein paragraf
    let vitsen = document.createElement("p");
    vitsen.innerText = data.value;
    document.querySelector("#vitsen").appendChild(vitsen);

    // Legg til eit bilete av Chuck Norris
    let image = document.createElement("img");
    image.src = data.icon_url;
    document.querySelector("#vitsen").appendChild(image);
}

hentVits(); // Får en vits rett når vi laster inn siden

// Slik kan me hente ein vits kvar gong me trykker på ein knapp på tastaturet
document.body.addEventListener("keydown", hentVits);