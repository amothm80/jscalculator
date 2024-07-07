let memory = null;
let lastOperation = null;

function add(number) {
    memory += number;
}

function subtract(number){
    memory -= number;
}

function divide(number){
    memory /= number;
}

function multiply(number){
    memory *= number;
}

function showNumbers(input) {
  let result = document.querySelector("#result");
  let resultContent = result.innerText;
  result.innerText = resultContent.concat(input);
}
function processOperations(input) {
  let result = document.querySelector("#result");
  let resultContent = Number(result.innerText);
  if (lastOperation != null) {
    switch (lastOperation) {
      case "+":
        add(resultContent);
        result.innerText = '';
        break;
      case "-":
        subtract(resultContent);
        result.innerText = '';
        break;
      case "*":
        multiply(resultContent);
        result.innerText = '';
        break;
      case "/":
        divide(resultContent);
        result.innerText = '';
        break;
    }
  }
  if (input == "="){
    result.innerText = memory;
    memory = null;
    lastOperation = null;
  }else{
    lastOperation = input;
    memory = resultContent;
    result.innerText = '';
  }

  console.log(input);
}

function processButton(btn) {
  let input = btn.getAttribute("id");

  if (["+", "-", "*", "/", "="].includes(input)) {
    processOperations(input);
  } else {
    showNumbers(input);
  }
}

const buttons = document.querySelectorAll(".calcButton");

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    processButton(btn);
  });
}
