var input = document.querySelector("#opt-text"); // text input button
var number =  document.querySelectorAll('.numbers div'); // number buttons
var operator = document.querySelectorAll('.operators div'); // operator buttons
var result = document.getElementById('result') // equal button
var resultText = document.getElementById('result-text') // equal button
var reset = document.getElementById('reset'); // reset button

resultDisplayed = false;


// adding click to numbers buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        
        //storing current input and its last character in variables
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false ) {
            input.innerHTML += e.target.innerHTML;
        }else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            // if result is currently displayed and user pressed a operation
            // we need to keep on adding to the input for next operation
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        }else {
            // if result is currently displayed and user pressed a number
            // we need to restart the input and add new input to the start the new operation.
            resultDisplayed = false;
            input.innerHTML = "0";
            input.innerHTML += e.target.innerHTML;
        }
    } )
    
}

// adding click to operation button
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {

         // storing current input and its last character in variables
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" ) {
        var newInput = currentString.substring(0, currentString.length -1) + e.target.innerHTML;
        input.innerHTML = newInput;
    }else if (currentString.length == 0) {
        //if first key press is operation, don't do anything
        alert("enter a number first");
    }else {
        //else jsut wait for new key to be press
        input.innerHTML += e.target.innerHTML
    }
    })
}





result.addEventListener("click", function() {

    // this is the string that we will be processing eg. -10+26+33-56*34/23
    var inputString = input.innerHTML;
  
    // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
  
    // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
    // first we replace all the numbers and dot with empty string and then split
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
  
    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");
  
    // now we are looping through the array and doing one operation at a time.
    // first divide, then multiply, then subtraction and then addition
    // as we move we are alterning the original numbers and operators array
    // the final element remaining in the array will be the output
  
    var divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
  
    var multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
  
    var subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  
    var add = operators.indexOf("+");
    while (add != -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
  
    resultText.innerHTML = numbers[0]; // displaying the output
  
    resultDisplayed = true; // turning flag if result is displayed
  });
  
  // clearing the input on press of clear
  reset.addEventListener("click", function() {
    input.innerHTML = "";
    resultText.innerHTML = ""
  })