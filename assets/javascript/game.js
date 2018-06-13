$(document).ready(function() {
var wins= 0;
var loss= 0;
var score = 0;
var numopt1 = 0;
var numopt2 = 0;
var numopt3 = 0;
var numopt4 = 0;
var goal = 0;


function crystalGame(){

    score = 0;
    numopt1 = 0;
    numopt2 = 0;
    numopt3 = 0;
    numopt4 = 0;
    goal = 0;

    $(".thepoints").html(score);
    
    goal = Math.floor(Math.random() * 100) + 30;
    $(".goal").html(goal);
    console.log(goal);

    numopt1 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt1);

    numopt2 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt2);

    numopt3 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt3);

    numopt4 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt4);
}


function check() {
    $(".thepoints").html(score);

    if(score === goal){
        wins++;
        $(".win").html(wins);
        crystalGame()
    }
    else if(score > goal){
        loss++;
        $(".loss").html(loss);
        crystalGame()
    }
}

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

crystalGame()

});