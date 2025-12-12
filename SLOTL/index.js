let quote = "Daisy, daisy, give me your answer do.";
let antall = 0;

for (let i = 0; i < quote.length; i++) {
    console.log(quote[i]);

}

const clock = document.getElementById("clock");

setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString(undefined, {timeStyle:'short'});
}, 1000);

const clock_2 = document.getElementById("clock_2");

setInterval(() => {
  const now = new Date();
  clock_2.textContent = now.toLocaleTimeString();
  clock_2.classList.remove("fade");
  void clock_2.offsetWidth;
  clock_2.classList.add("fade");
}, 1000);


let time = new Date().getTime();
let suggestion = document.getElementById("suggestion");
let d = new Date(time);
let currentHour = d.getHours();

const possibilities = {
    night: [
     "You might want to head to bed.",
     "Sweet dreams.",
     "I've found a way to get rid of nightmares. Would you like to join?",
     "Remember, you're never alone.",
     "Do the stars have wishes of their own?"
    ],
    morning: [
     "Good morning.",
     "Rise and shine.",
     "You cannot stop the sun from rising.",
     "The sun blazes."
    ],
    afternoon: [
     "It is tea time.",
     "Pleasant afternoon.",
     "Hello.",
     "What have you come for?"
    ],
    evening: [
     "Good evening.",
     "Bonsoir. What are you here for?"
    ],
};

function a_possibility(list) {
  return list[Math.floor(Math.random() * list.length)];
}

let time_day;
if (currentHour >= 0 && currentHour < 4) {
  time_day = "night";
} else if (currentHour >= 4 && currentHour < 10) {
  time_day = "morning";
} else if (currentHour >= 10 && currentHour < 17) {
  time_day = "afternoon";
} else {
  time_day = "evening";
}

suggestion.textContent = a_possibility(possibilities[time_day]);

//maybe add some lore with idk its tea time 
//wait lore with every time with random prompts