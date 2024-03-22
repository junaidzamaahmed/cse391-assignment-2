const area = document.getElementById("text");

document.getElementById("clear").addEventListener("click", () => {
  area.value = "";
});
document.getElementById("capitalize").addEventListener("click", () => {
  if (area.value == area.value.toUpperCase()) {
    area.value = area.value.toLowerCase();
  } else {
    area.value = area.value.toUpperCase();
  }
});
document.getElementById("sort").addEventListener("click", () => {
  let lines = area.value.split("\n");
  lines.sort();
  area.value = lines.join("\n");
});
document.getElementById("reverse").addEventListener("click", () => {
  let lines = area.value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split("").reverse().join("");
  }
  area.value = lines.join("\n");
});
document.getElementById("strip").addEventListener("click", () => {
  let lines = area.value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();
  }
  area.value = lines.filter((line) => line.trim() !== "").join("\n");
});
document.getElementById("addnum").addEventListener("click", () => {
  let lines = area.value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ". " + lines[i];
  }
  area.value = lines.join("\n");
});

document.getElementById("shuffle").addEventListener("click", () => {
  let lines = area.value.split("\n");
  for (let i = lines.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  area.value = lines.join("\n");
});
