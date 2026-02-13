async function hentData() {
    let response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<word>");
    let data = await response.json();
    console.log("Alle data:");
    console.log(data);
    console.log("\nBare vitsen:");
    console.log(data.value)
}

hentData();

async function hentVits() {
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/<word>');
    const data = await res.json();