/* //Calculator project

/*  -Populate screen with number buttons and operator buttons, each have a different container
     use grid for this, and/or a similar function to etch-a-sketch
     
     -onClick listeners on button to display corresponding numbers into the screen div
        -would be good to have large numbers, similar/same font style as old school calculator
        
    -do the numbers come in as individual string chars that need to be parsed to int?
    
    -store number1/a as a variable before operator is selected, then number2/b stored, number3/c is the result
        -clear screen div of numA, operator, and numB before displaying numC result.
        
    -onClick listeners on operator buttons for corresponding functions
    
    -func for display and get variables a and b
    
    if number buttons are serparate to operator buttons, can select all of them at onece, rather than indiviual listeners?
    
    -use =button with an if statments to determine which function to use, eg, if + is present in string on screen, add()
    
    -need to add a clear/reset button and delete/backspace
    
    -split string, before and after operator to give two different numbers
        -number.slice(0, indexOf(+)) would give a string upto the plus sign
        -number.slice((indexOf(+)+1) should give the remaining string
    
    -once one operator is clicked, other operators disabled
*/

const display = document.querySelector(".screen");

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const timesButton = document.getElementById("timesButton");
const divideButton = document.getElementById("divideButton");
const decimalButton = document.getElementById("decimalButton");
const equalsButton = document.getElementById("equalsButton");
const numberButtonContainer = document.querySelector(".numberButtons");
const resetButton = document.getElementById("resetButton");
const operatorButtonsContainer = document.querySelector(".operatorButtons");
const plusMinusButton = document.getElementById("plusMinus");

const operatorButtons = Array.from(operatorButtonsContainer.childNodes);
const numberButtons = Array.from(numberButtonContainer.childNodes);

resetButton.addEventListener("click", () => {
  operation = [];
  enableOperaters();
  decimalButton.removeAttribute("disabled");
  equalsButton.setAttribute("disabled", "true");
  display.textContent = "";
  console.log(operation);
});

//toggle between neg and pos num
plusMinusButton.addEventListener("click", () => {
  if (display.textContent !== "") {
    display.textContent = parseFloat(display.innerText) * -1;
  }
});

//allow decimal numbers
decimalButton.addEventListener("click", () => {
  display.textContent += decimalButton.innerText;
  decimalButton.setAttribute("disabled", "true");
});

equalsButton.addEventListener("click", () => {
  operation.push(display.innerText);
  if (operation[1] == "\u00f7" && operation[2] == "0") {
    alert("Don't be a nob");
    operation = [];
    display.textContent = "";
  }
  console.log(operation);
  equalsButton.setAttribute("disabled", "true");
  enableOperaters();
  let result = calculate();
  // decimalButton.removeAttribute("disabled");
  operation = [];
  display.textContent = result;
});

let operation = [];

function enableOperaters() {
  plusButton.removeAttribute("disabled");
  minusButton.removeAttribute("disabled");
  timesButton.removeAttribute("disabled");
  divideButton.removeAttribute("disabled");
}

function disableOperaters() {
  plusButton.setAttribute("disabled", "true");
  minusButton.setAttribute("disabled", "true");
  timesButton.setAttribute("disabled", "true");
  divideButton.setAttribute("disabled", "true");
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operation.push(display.innerText);
    operation.push(button.innerText);
    display.innerText = "";

    disableOperaters();
    decimalButton.removeAttribute("disabled");
    equalsButton.removeAttribute("disabled");

    console.log(operation);
  });
});

//updates calc display
function addToDisplayText() {
  display.innerText += this.innerText;
}

//creates number buttons
for (i = 9; i >= 0; i--) {
  let numberButton = document.createElement("button");
  numberButton.innerText = i;
  numberButton.classList.add("button");
  numberButtonContainer.appendChild(numberButton);
  numberButton.addEventListener("click", addToDisplayText);
}

//operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function muliply(a, b) {
  return a * b;
}

function calculate() {
  let a = parseFloat(operation[0]);
  let b = parseFloat(operation[2]);

  let result;
  if (operation[1] === "+") {
    result = add(a, b);
  }

  if (operation[1] === "-") {
    result = subtract(a, b);
  }

  if (operation[1] === "\u00d7") {
    result = muliply(a, b);
  }

  if (operation[1] === "\u00f7") {
    result = divide(a, b);
  }
  //round to 2.d.p
  return result.toFixed(2);
}
