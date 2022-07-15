//Exercise a
function compareNumber() {
    let number1 = prompt("Enter the first number:", 0);
    let number2 = prompt("Enter the second number:", 0);
    if (number1 > number2) {
        console.log("The larger number is: " + number1);
    } else {
        console.log("The larger number is: " + number2);
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
