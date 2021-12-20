"use strict";

document.querySelector(".btn").addEventListener("click", convertBin2Dec);

function convertBin2Dec() {
  const binary = document.getElementById("binary").value;
  let exp = binary.length - 1;
  var result = 0;

  for (const digit of binary) {
    if (digit === "1" || digit === "0") {
      document.querySelector(".hidden").style.display = "none";

      const parcialResult = Math.pow(2, exp) * digit;
      exp--;
      result += parcialResult;
    } else {
      document.querySelector(".hidden").style.display = "inline";
      result = 0;
      break;
    }
  }
  document.querySelector(".result").textContent = result;
}
