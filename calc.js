function calc() {
  const list = document.calculator.numbers.value.split(",");
  document.getElementById("max").innerHTML = ": " + Math.max(...list);
  document.getElementById("min").innerHTML = ": " + Math.min(...list);
  document.getElementById("sum").innerHTML =
    ": " + list.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  document.getElementById("average").innerHTML =
    ": " + list.reduce((a, b) => parseInt(a) + parseInt(b), 0) / list.length;
  document.getElementById("reverse").innerHTML = ": " + list.reverse();
}
