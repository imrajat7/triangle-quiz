var base = document.getElementById("base");
var height = document.getElementById("height");
var calcHypoBtn = document.getElementById("calcHypoBtn");
var calcHypoOutput = document.getElementById("calcHypoOutput");

function calcHypo() {
    var baseVal = parseFloat(base.value);
    var heightVal = parseFloat(height.value);
    var hypo = Math.sqrt(baseVal ** 2 + heightVal ** 2);

    if (base.value === "" || height.value === "") {
        calcHypoOutput.innerText = "Fill in all the values correctly first.";
    } else if (base.value < 0 || height.value < 0) {
        calcHypoOutput.innerText = "Please fill positive values only!";
    } else if (baseVal === 0 || heightVal === 0) {
        calcHypoOutput.innerText = "This will not form a triangle!!!";
    } else {
        calcHypoOutput.innerText = "Length of Hypotenuse is: " + hypo;
    }
}
