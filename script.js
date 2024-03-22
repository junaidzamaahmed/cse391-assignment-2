const quoteBox = document.getElementById("quote-box");
const black = document.getElementById("black");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const red = document.getElementById("red");

black.addEventListener("click", () => {
  quoteBox.style.borderColor = "red";
  quoteBox.style.color = "red";
  quoteBox.style.fontSize = "1rem";
  quoteBox.style.backgroundColor = "black";
});

blue.addEventListener("click", () => {
  quoteBox.style.borderColor = "yellow";
  quoteBox.style.color = "yellow";
  quoteBox.style.fontSize = "1.1rem";
  quoteBox.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
  quoteBox.style.borderColor = "black";
  quoteBox.style.color = "black";
  quoteBox.style.fontSize = "1.05rem";
  quoteBox.style.backgroundColor = "green";
});

red.addEventListener("click", () => {
  quoteBox.style.borderColor = "skyblue";
  quoteBox.style.color = "white";
  quoteBox.style.fontSize = "1.15rem";
  quoteBox.style.backgroundColor = "red";
});

const quotes = [
  "Don't stop when you're tired. Stop when you're done.",
  "Dream is not that which you see while sleeping it is something that does not let you sleep.",
  "Your time is limited, so don't waste it living someone else's life.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "Life is what happens when you're busy making other plans.",
];

const p = document.createElement("p");
p.textContent = quotes[Math.floor(Math.random() * quotes.length)];
quoteBox.appendChild(p);
