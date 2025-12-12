const utdata = document.getElementById("utdata");

const skjema = document.getElementById("skjema");

skjema.addEventListener("submit", lesMelding);

function lesMelding(evt) {
    evt.preventDefault(); //går ikke til side 2 for å håndtere koden

    let inndata = document.getElementById("chatInn").value;
    console.log(inndata);

    if (inndata.toLowerCase().includes("chips") || inndata.toLowerCase().includes("pringles")) {
        utdata.innerText = "Å, jeg liker chips jeg og!";
    } else {
        utdata.innerText = "Det er ikke chips. >:(";
    }
}

