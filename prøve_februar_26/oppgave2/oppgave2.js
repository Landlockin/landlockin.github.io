
async function hentTittel() {
    const res = await fetch('https://www.anapioficeandfire.com/api/books/name');
    const data = await res.json();
    let tittel = document.createElement("h1");
    tittel.innerText = data.value;
    document.querySelector("#tittel").appendChild(tittel);

}

async function hent_utgivelsesdato() {
    const res = await fetch('https://www.anapioficeandfire.com/api/books/released');
    const data = await res.json();
}

async function hent_sider() {
    const res = await fetch('https://www.anapioficeandfire.com/api/books/numberOfPages');
    const data = await res.json();
}