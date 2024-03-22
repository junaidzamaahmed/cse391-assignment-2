function convert() {
  console.log(document.convertForm.val.value);
  console.log();
  if (document.convertForm.unit.value == "kg") {
    document.getElementById("result").innerHTML =
      document.convertForm.val.value * 0.4536 + " kilograms";
  } else {
    document.getElementById("result").innerHTML =
      document.convertForm.val.value * 2.2046 + " pounds";
  }
}
