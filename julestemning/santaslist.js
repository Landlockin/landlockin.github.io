function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.textContent = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (4 + Math.random() * 6) + "s";

    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 10000);
}

setInterval(createSnowflake, 200);

let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click", function () {
    // 50/50 sjanse
    let isNice = Math.random() < 0.5;

    // Rens tidligere innhold
    result.innerHTML = "";

    if (isNice) {
        document.body.style.backgroundColor = "green";

        let text = document.createElement("p");
        text.textContent = "✨ ‧₊˚🎁✩ ₊˚🎅⊹♡ You are on the nice list!‧₊˚🎄✩ ₊˚🦌⊹♡ ✨";
        text.classList.add("nice-text");

        let img = document.createElement("img");
        img.src = "bilder/happysanta.jpg";
        img.classList.add("santa-img");

        result.appendChild(img);
        result.appendChild(text);

    } else {
        document.body.style.backgroundColor = "red";

        let text = document.createElement("p");
        text.textContent = "you are on the naughty list. >:( 🪨⚫⛏️🌑⬛";
        text.classList.add("naughty-text");

        let img = document.createElement("img");
        img.src = "bilder/angrysanta.jpg";
        img.classList.add("santa-img");

        document.body.classList.add("shake");
        setTimeout(() => document.body.classList.remove("shake"), 400);

        result.appendChild(img);
        result.appendChild(text);
    }
});

