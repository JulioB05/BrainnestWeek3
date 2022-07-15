//Exercise a
function diagonal(side) {
    let diag = side * Math.sqrt(2);
    let shortDiag = diag.toFixed(3);

    console.log("The diagonal of a square of " + side + " per side is: " + shortDiag);
}

diagonal(9);

//Exercise b
function area(side1, side2, side3) {
    let sp = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(sp * (sp - side1) * (sp - side2) * (sp - side3))
    let shortArea = area.toFixed(3);

    console.log("The area of a triangle with sides " + side1 + ", " + side2 + " and " + side3 + ", is: " + shortArea);
}

area(5, 6, 7);

//Exercise c

function circum(radius) {
    const pi = 3.1416;
    let circum = 2 * pi * radius;
    let area = pi * radius * radius;

    console.log("The circumference for a circle of radius: " + radius + " is: " + circum + " and the area is: " + area);

}

circum(4);