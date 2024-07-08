let memory = null;
let lastOperation = null;
let clearDisplay = false;

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
  if (clearDisplay){
    clearDisplay = false
    result.innerText = '';
  } 
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
        clearDisplay = true;
        break;
      case "-":
        subtract(resultContent);
        clearDisplay = true;
        break;
      case "*":
        multiply(resultContent);
        clearDisplay = true;
        break;
      case "/":
        divide(resultContent);
        clearDisplay = true;
        break;
    }
  }else{
    memory = resultContent;
  }
  if (input == "="){
    result.innerText = memory;
    memory = null;
    lastOperation = null;
  }else{
    lastOperation = input;
    result.innerText = memory;
    clearDisplay = true;
  }

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
