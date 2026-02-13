const rabattkode_fasit = "VELDIGKULKODE91"

const skjema = document.getElementById("skjema");
skjema.addEventListener("submit", les_kode);

const tekst = document.getElementById("tekst");

let fornavn = document.getElementById("fornavn")

function les_kode(evt) {
    evt.preventDefault();

    let kode = document.getElementById("rabattkode").value;
    console.log(kode);

    if (rabattkode == rabattkode_fasit) {
        tekst.innerText = `Takk for din registrering, ${fornavn}`
        alert("Du har oppgitt en kode og får en rabattert pris.");
    } else {
        tekst.innerText = "Det er ikke koden!";
    }
}
