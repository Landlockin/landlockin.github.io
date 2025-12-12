// TEST TIL Å SE OM AIENS KODE FAKTISK FUNKER document.getElementById("generateBtn").addEventListener("click", generate);
function generate() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const name3 = document.getElementById("name3").value.trim();

    // Make an object from user names
    const speakerMap = {
        A: name1,
        B: name2,
        C: name3
    };

    // (Optional) Remove empty ones
    Object.keys(speakerMap).forEach(key => {
        if (!speakerMap[key]) delete speakerMap[key];
    });

    createQuote(speakerMap);
}
const quotes = [
    {
        lines: [
            { speaker: "A", text: "Making my way downtown" },
            { speaker: "A", text: "Walking fast" },
            { speaker: "B", text: "Hey :)" },
            { speaker: "A", text: "Walking faster" }
        ]
    },
    {
        lines: [
            { speaker: "A", text: "I didn’t do it." },
            { speaker: "B", text: "You absolutely did." }
        ]
    }
];
function createQuote(speakerMap) {
    const chosen = quotes[Math.floor(Math.random() * quotes.length)];

    let result = "";
    chosen.lines.forEach(line => {
        const displayName = speakerMap[line.speaker] || line.speaker;
        result += `${displayName}: ${line.text}\n`;
    });

    document.getElementById("output").textContent = result;
}
