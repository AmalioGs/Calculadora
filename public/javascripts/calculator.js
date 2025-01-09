let addToScreen = (data) => {
    document.getElementById("screen").value += data;
    let sound = document.getElementById(("equalSound2"));
    sound.play();
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
    let sound = document.getElementById(("equalSound1"));
    sound.play();
}

let calculateScreen = () => {
    let operation = document.getElementById("screen").value;

    console.log(operation);

    let result = cal(operation);

    document.getElementById("screen").value = result;

    if (result == 'Try Again'){
        document.getElementById("equalSound4").play();
      }
      else if (result == 'Demasiadas Vueltas') {
        document.getElementById("equalSound5").play();
      }
      else {
        document.getElementById("equalSound").play();
      }
}   

function findOperator(operation) {
    let pos = -1;
    let count = 0;

    for (let i = 0; i < operation.length - 1; i++){
        if (!isNaN(operation[i]) && isNaN(operation[i + 1])) {
            count ++;
            pos = i + 1;
        }
    }

    if (count != 1 || pos == operation.length) {
        pos = -1;
    }

    return pos;
}

function getOperation(operation) {
    let pos = findOperator(operation);
    let operacion = 'Try Again'

    if (pos != -1) {
        operacion = operation[pos];
    }

    console.log(pos);
    
    return operacion;
}

function getFirstNumber(operation) {
    let pos = findOperator(operation);
    let number = '';

    for (let i = 0; i < pos; i++) {
        number += operation[i];
    }

    return parseInt(number);
}

function getSecondNumber(operation) {
    let pos = findOperator(operation);
    let number = "";

    for (let i = 0; i < operation.length; i++){
        if (i > pos) {
            number += operation[i];
        }
    }

    return parseInt(number)
}

function cal(operation) {
    let cal = getOperation(operation);
    let firstNumber = getFirstNumber(operation);
    let secondNumber = getSecondNumber(operation);
    let result = "Try Again";
    console.log(cal);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        switch (cal) {
            case ('+'):
                result = firstNumber + secondNumber;
                break;
            case ('-'):
                result = firstNumber - secondNumber;
                break;
            case ('*'):
                result = firstNumber * secondNumber;
                break;
            case ('/'):
                result = 'Demasiadas Vueltas';
                if (secondNumber != 0) {
                    result = firstNumber / secondNumber;
                }
                break;
            default:
                result = 'Try Again';
                break;
        }
    }
    return result;
}


