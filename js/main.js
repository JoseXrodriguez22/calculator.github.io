//RESET
function reset() {
  document.getElementById("container").reset();
}

// SQUARE FUNCTON
function calculate() {
  var side = parseInt(document.getElementById("side").value);
  var resultSide = side * side;
  document.getElementById("result").innerHTML = resultSide;
}

// TRIANGLE FUNCTON
function calculateTriangle() {
  var base = parseInt(document.getElementById("base").value);
  var height = parseInt(document.getElementById("height").value);
  var resultTriangle = (base * height) / 2;
  document.getElementById("result").innerHTML = resultTriangle;
}
// TRIANGLE FUNCTON
function calculateParalelo() {
  var base = parseInt(document.getElementById("base").value);
  var height = parseInt(document.getElementById("height").value);
  var resultTriangle = base * height;
  document.getElementById("result").innerHTML = resultTriangle;
}

//FUNCTION TRAPECIO
function calculateTrapecio() {
  var baseMayor = parseInt(document.getElementById("baseMayor").value);
  var baseMenor = parseInt(document.getElementById("baseMenor").value);
  var height = parseInt(document.getElementById("height").value);
  var resultTrapecio = ((baseMayor + baseMenor) * height) / 2;
  document.getElementById("result").innerHTML = resultTrapecio;
}

//FUNCTION CIRCLE
function calculateCirculo() {
  var radio = parseInt(document.getElementById("radio").value);
  var pi = parseInt(3.14);
  var resultCirculo = pi * radio ** 2;
  document.getElementById("result").innerHTML = resultCirculo;
}

// FUNCTION ROMBO
function calculateRombo() {
  var diagonalMayor = parseInt(document.getElementById("diagonalMayor").value);
  var diagonalMenor = parseInt(document.getElementById("diagonalMenor").value);
  var resultRombo = (diagonalMayor * diagonalMenor) / 2;
  document.getElementById("result").innerHTML = resultRombo;
}
