//Exercise a
function compareNumber() {
    let number1 = prompt("Enter the first number:", 0);
    let number2 = prompt("Enter the second number:", 0);
    //converting input to type number
    let num1 = Number(number1);
    let num2 = Number(number2);

    if (num1 > num2) {
        console.log("The larger number is: " + num1);
    } else {
        console.log("The larger number is: " + num2);
    }
}

compareNumber();

//Exercise b
function evenOrOdd() {
    let number1 = prompt("Enter the first number:", 0);
    if ((number1 % 2) > 0) {
        console.log("The number: " + number1 + " is odd number");
    } else {
        console.log("The number: " + number1 + " is even number");
    }
}

evenOrOdd();
