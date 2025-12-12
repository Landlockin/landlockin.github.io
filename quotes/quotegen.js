
// Her henter jeg navnene fra HTML dokumentet. 

const speakers = {
    A: document.getElementById("name_1"),
    B: document.getElementById("name_2"),
    C: document.getElementById("name_3")
};

// Samling av quotes:

// Du får en av disse quotesene om du skriver inn ett person

const quotes_1p = [
    { quote_lines: [
       { speaker: "A", text: "The definition of insanity is doing the same thing over and over again and expecting different results." },
    ]
    },
    { quote_lines: [
       { speaker: "A", text: "(incoherent screaming)" },
    ]
    },
    { quote_lines: [
       { speaker: "A", text: "I hate how you're just born out of nowhere, and you're forced to go to school and get education so you can get a job. What if I wanted to be a duck? No one ever asked me if I want to be a duck!" },
    ]
    },
    { quote_lines: [
       { speaker: "A", text: "Takk for meg. :)" },
    ]
    }
];

// To personer


const quotes_2p = [
    { quote_lines: [
        { speaker: "A", text: "${B}  told me that brown is just navy orange, and I have never been more disappointed with something I agree with." }
    ]
    },
    { quote_lines: [
       { speaker: "A", text: "I've only known ${B} for a minute in a half but if anything happens to them, I will kill everybody in this room including myself." }
    ]  
    },
    { quote_lines: [
        { speaker: "A", text: "Making my way downtown" },
        { speaker: "A", text: "Walking fast" },
        { speaker: "B", text: "Hey :)" },
        { speaker: "A", text: "Walking faster" } 
    ] 
    },
    { quote_lines: [
        { speaker: "A", text: "I didn’t do it." },
        { speaker: "B", text: "You absolutely did." }
    ]
    },
    { quote_lines: [
        { speaker: "A", text: "AAAAAA" },
        { speaker: "B", text: "AAAAAAAAAAAAAAAA" }
    ]
    },
    { quote_lines: [
        { speaker: "A", text: "How does one turn their emotions off?" },
        { speaker: "B", text: "Okay, so first go to settings." },
        { speaker: "B", text: "I'm an idiot, I thought that said emojis at first." },
        { speaker: "A", text: "No, I'm still willing to try this, go ahead. I'm at settings, what do I do next?"},
    ]
    },
    { quote_lines: [
        { speaker: "A", text: "Oh, they left the bowl out?" },
        { speaker: "A", text: "It says, “Take two pieces of candy.”" },
        { speaker: "A", text: "Nobody's around, though..." },
        { speaker: "A", text: "(${A} grabs the entire bowl and runs off with it)" },
        { speaker: "B", text: "NO—" }
    ] 
    }
];
   
// Tre personer 

const quotes_3p = [
    { quote_lines: [
        { speaker: "A", text: "The best part of an oreo is the black cookie part and not the frosting part. Deal with it." }, 
        { speaker: "B", text: "Darkness without light is an abyss. Light without darkness is blinding. You cannot have a coin with one side." },
        { speaker: "C", text: "Yo Socrates it's a ----ing cookie" }
    ]
    },
    { quote_lines: [
        { speaker: "A", text: "(screams) A SPIDER!" },
        { speaker: "B", text: "Guys, guys, the spider is our friend-" },
        { speaker: "C", text: "KILL IT! KILL WITH FIRE!" }
    ]
    },
    { quote_lines: [
        { speaker: "A", text: "Well, ${B}, is there anything you would like to say to ${C}?" },
        { speaker: "B", text: "How do I put this delicately? You’re a horrible roommate and nobody likes you." },
        { speaker: "A", text: "How about we frame our statement with “When you do this, it makes me feel this”?" },
        { speaker: "B", text: "When you live here, it makes me angry. Because you’re a horrible roommate and nobody likes you." }
    ]
    }
];

// Henter knappen og "output" feltet fra HTML dokumentet 

const button = document.getElementById("button");
const here_ya_go = document.getElementById("here_you_go");

// Funksjon som tar et tilfeldig element fra listen

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}


button.addEventListener("click", function () {

    // Henter navnene
    const A = speakers.A.value.trim();
    const B = speakers.B.value.trim();
    const C = speakers.C.value.trim();

    // Teller hvor mange navn det er. Indexen begynner på 0 
    let index = 0;
    if (A) index++;
    if (B) index++;
    if (C) index++;

    let list;
    if (index === 1) list = quotes_1p;
    else if (index === 2) list = quotes_2p;
    else if (index === 3) list = quotes_3p;
    else {
        here_ya_go.textContent = "There is silence. Write at least one name.";
        return;
    }

    let yay_a_quote = "";

    random(list).quote_lines.forEach(line => {

        let speaker_name;

        if (line.speaker === "A") {
            speaker_name = A;
        } else if (line.speaker === "B") {
            speaker_name = B;
        } else {
            speaker_name = C;
        }

        let final_quote = line.text
            .split("${A}").join(A)
            .split("${B}").join(B)
            .split("${C}").join(C);

        yay_a_quote += `${speaker_name}: ${final_quote}\n`;
    });

    here_ya_go.textContent = yay_a_quote;
});


