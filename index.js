
var randomNumberA = Math.floor(Math.random()*6+1)
var randomImageSourceA = "images/dice"+randomNumberA+".png"
var imageA = document.querySelectorAll("img")[0]
imageA.setAttribute("src",randomImageSourceA)

var randomNumberB = Math.floor(Math.random()*6+1)
var randomImageSourceB = "images/dice"+randomNumberB+".png";
var imageB = document.querySelectorAll("img")[1]
imageB.setAttribute("src", randomImageSourceB );

if (randomNumberA>randomNumberB){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}
else if (randomNumberB > randomNumberA) {
  document.querySelector("h1").innerHTML =   "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


document.querySelector("button").addEventListener("click",refreshPage)

function refreshPage() {
    location.reload();}