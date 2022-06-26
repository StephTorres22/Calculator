//Calculator project

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
    
    -once one operator is clicked, other operators disabled*/

    

    


    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');
    const timesButton = document.getElementById('timesButton');
    const divideButton = document.getElementById('divideButton');
    const decimalButton = document.getElementById('decimalButton');
    const equalsButton = document.getElementById('equalsButton');
    const numberButtonContainer = document.querySelector('.numberButtons');


    const display = document.querySelector('.screen');
    let numA;
    let numB;
    let result;
    let number;
    let numberButton;
    for (i=9; i>=0; i--){
        numberButton = document.createElement('button');
        numberButton.innerText = (i);
        numberButton.classList.add('button');
        numberButtonContainer.appendChild(numberButton);
        numberButton.addEventListener('click', function(){
            display.innerText += this.innerText;
            number = display.innerText;
            console.log(number);
        })
    }
    plusButton.addEventListener('click', addOperatorToDisplayText);
    plusButton.addEventListener('click', disableButtons);        
    
    minusButton.addEventListener('click', addOperatorToDisplayText);
    minusButton.addEventListener('click', disableButtons);
    
    timesButton.addEventListener('click', addOperatorToDisplayText);
    timesButton.addEventListener('click', disableButtons);

    divideButton.addEventListener('click', addOperatorToDisplayText);
    divideButton.addEventListener('click', disableButtons);

    equalsButton.addEventListener('click', splitString);
    equalsButton.addEventListener('click', whichOperator);

    decimalButton.addEventListener('click', function(){
        display.innerText += this.innerText;//this will need some work so you can only use once decimal either side of operator.
    })
    
    function addOperatorToDisplayText(){
        display.innerText += this.innerText
    }

    function disableButtons(){
      plusButton.removeEventListener('click', addOperatorToDisplayText);
      plusButton.classList.add('disabled');
      minusButton.removeEventListener('click', addOperatorToDisplayText);
      minusButton.classList.add('disabled');
      timesButton.removeEventListener('click', addOperatorToDisplayText);
      timesButton.classList.add('disabled');
      divideButton.removeEventListener('click', addOperatorToDisplayText);
      divideButton.classList.add('disabled');
    }

    function add(){

        result = numA + numB
        display.innerText = result
        
    }

    function subtract(){
        result = numA - numB;
        display.innerText = result;
    }

    function divide(){
        result = numA/numB
        display.innerText = result;

    }

    function muliply(){
        result = numA * numB;
        display.innerText = result;
    }

    function splitString(){
        let fisrtNumber;
        let secondNumber;
        if(number.includes('+')){
            fisrtNumber = number.slice(0, (number.indexOf('+')));
            secondNumber = number.slice((number.indexOf('+')+1));
        } else if(number.includes('-')){
            fisrtNumber = number.slice(0,(number.indexOf('-')));
            secondNumber = number.slice((number.indexOf('-')+1));
        } else if (number.includes('\u00d7')){
            fisrtNumber = number.slice(0, (number.indexOf('\u00d7')));
            secondNumber = number.slice((number.indexOf('\u00d7')+1));
        } else if (number.includes('\u00f7')){
            fisrtNumber = number.slice(0,(number.indexOf('\u00f7')));
            secondNumber = number.slice((number.indexOf('\u00f7')+1));
        }

        numA = parseInt(fisrtNumber);
        numB = parseInt(secondNumber);
        return numA, numB;
    }

    function whichOperator(){
        if(number.includes('+')){
            add();
        }else if(number.includes('-')){
            subtract();
        }else if (number.includes('\u00d7')){
            muliply();
        }else if (number.includes('\u00f7')){
            divide();
        }
    }


        



    

    