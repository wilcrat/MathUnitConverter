function convertLength() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const unitFrom = document.getElementById("unitFrom").value;
  const unitTo = document.getElementById("unitTo").value;
  let result;

  if (unitFrom == "meters" && unitTo == "feet") {
    result = inputValue * 3.28084;
  } else result = inputValue;
}

document.getElementById(
  "result"
).textContent = `${inputValue} ${unitFrom} is ${result.toFixed(2)} ${unitTo}`;
