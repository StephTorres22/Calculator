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
    
    -need to add a clear/reset button*/

    


    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');
    const timesButton = document.getElementById('timesButton');
    const divideButton = document.getElementById('divideButton');
    const numberButtonContainer = document.querySelector('.numberButtons');
    const display = document.querySelector('.screen');
    let numA;
    let numB;

    let numberButton;
    for (i=9; i>=0; i--){
        numberButton = document.createElement('button');
        numberButton.innerText = (i);
        numberButton.classList.add('button');
        numberButtonContainer.appendChild(numberButton);
        numberButton.addEventListener('click', function(){
            display.innerText += this.innerText;
        })
    }

    
    function displayInput(){



    }

    