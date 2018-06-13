$(document).ready(function() {
var wins= 0;
var loss= 0;
var goal= 0;
var score = 0;


function crystalGame(result){
var goal = Math.floor(Math.random() * 120) + 30;
$(".goal").append(goal);
console.log(goal);


var numopt1 = Math.floor(Math.random() * 12) + 1; 
console.log(numopt1);

var numopt2 = Math.floor(Math.random() * 12) + 1; 
console.log(numopt2);

var numopt3 = Math.floor(Math.random() * 12) + 1; 
console.log(numopt3);

var numopt4 = Math.floor(Math.random() * 12) + 1; 
console.log(numopt4);

$("#crystals1").on("click", function(){
score = score + numopt;
console.log(score);
})

$("#crystals2").on("click", function(){
    score = score + numopt1;
    console.log(score);
    })
}

crystalGame()

});