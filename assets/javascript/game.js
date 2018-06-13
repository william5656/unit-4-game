$(document).ready(function() {
var wins= 0;
var loss= 0;
var score = 0;

var goal = Math.floor(Math.random() * 100) + 30;
  $(".goal").append(goal);
  console.log(goal);


function crystalGame(){

    var numopt1 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt1);

    var numopt2 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt2);

    var numopt3 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt3);

    var numopt4 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt4);
    

    $("#crystals1").on("click", function(){
    score = score + numopt1;
    console.log(score);
    check()
    })

    $("#crystals2").on("click", function(){
        score = score + numopt2;
        console.log(score);
        check()
    })

    $("#crystals3").on("click", function(){
        score = score + numopt3;
        console.log(score);
        check()
    })

    $("#crystals4").on("click", function(){
        score = score + numopt4;
        console.log(score);
        check()
    })
}

function check() {
    
    if(score === goal){
        wins++
        alert("you win")
        console.log ("you score is " + score);
        console.log ("your goal is " + goal);
        console.log (goal);
    }
}

crystalGame()

});