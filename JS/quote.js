function randomInt(max) {
    return Math.floor(Math.random() * max);
}
function run() {
    const possibleTexts = [
      "\"null\"", 
      "\"domain\"",
      "\"lain\"",
      "\"Wired place for wired people.\"",
      "Syntax ERROR",
      "\"It all returns to nothing.\"",
      "\"And you don't seem to understand.\"",
      "\"%0%0%0%0%0%0%0%0%0%0%0%0%0%0%\"", 
      "\"yama\"", 
      "\"4 years\"",
      "\"Transcending\"",
      "\"Ending\"", 
      "\"Your ideas are shit, anon.\"",
      "\"Anon.\"",
    ];
    const randomNumber = randomInt(possibleTexts.length);
    const text = possibleTexts[randomNumber];
    document.getElementById("quote").innerHTML = text;
}

run();

document.getElementById("quote").addEventListener("click", run());

console.log("Script loaded");