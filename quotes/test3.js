const speakers = {
    A: document.getElementById("name_1"),
    B: document.getElementById("name_2"),
    C: document.getElementById("name_3")
};

// ---------------- QUOTES ---------------- //

const quotes_1p = [
    {
        quote_lines: [
            { speaker: "A", text: "I've only known ${B} for a minute and a half, but if anything happens to them…" }
        ]
    },
    {
        quote_lines: [
            { speaker: "A", text: "The definition of insanity is doing the same thing over and over again…" }
        ]
    },
    {
        quote_lines: [
            { speaker: "A", text: "(incoherent screaming)" }
        ]
    }
];

const quotes_2p = [
    {
        quote_lines: [
            { speaker: "A", text: "Making my way downtown" },
            { speaker: "A", text: "Walking fast" },
            { speaker: "B", text: "Hey :)" },
            { speaker: "A", text: "Walking faster" }
        ]
    },
    {
        quote_lines: [
            { speaker: "A", text: "I didn’t do it." },
            { speaker: "B", text: "You absolutely did." }
        ]
    },
    {
        quote_lines: [
            { speaker: "A", text: "AAAAA" },
            { speaker: "B", text: "AAAAAA" }
        ]
    }
];

const quotes_3p = [
    {
        quote_lines: [
            { speaker: "A", text: "The best part of an Oreo is the cookie, not the frosting." },
            { speaker: "B", text: "Darkness without light is an abyss. Light without darkness is blinding." },
            { speaker: "C", text: "Yo Socrates, it's a cookie." }
        ]
    },
    {
        quote_lines: [
            { speaker: "A", text: "---" },
            { speaker: "B", text: "---" },
            { speaker: "C", text: "---" }
        ]
    }
];

// --------------- BUTTON LOGIC ---------------- //

const button = document.getElementById("button");
const output = document.getElementById("here_you_go");

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

button.addEventListener("click", function () {

    // Get actual names
    const A = speakers.A.value.trim();
    const B = speakers.B.value.trim();
    const C = speakers.C.value.trim();

    // Count how many names exist
    let count = 0;
    if (A) count++;
    if (B) count++;
    if (C) count++;

    let list;
    if (count === 1) list = quotes_1p;
    else if (count === 2) list = quotes_2p;
    else if (count === 3) list = quotes_3p;
    else {
        output.textContent = "Please enter at least one name!";
        return;
    }

    const chosen = randomItem(list);

    let finalOutput = "";

    chosen.quote_lines.forEach(line => {

        let speakerName =
            line.speaker === "A" ? A :
            line.speaker === "B" ? B :
            C;

        let finalText = line.text
            .split("${A}").join(A)
            .split("${B}").join(B)
            .split("${C}").join(C);


        finalOutput += `${speakerName}: ${finalText}\n`;
    });

    output.textContent = finalOutput;
});