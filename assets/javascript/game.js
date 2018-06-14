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

    
    var arr = []
    while(arr.length < 4){
        var randomnumber = Math.floor(Math.random()*12) + 1;
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }

    numopt1 = parseInt(arr[0]);

    numopt2 = parseInt(arr[1]);

    numopt3 = parseInt(arr[2]);

    numopt4 = parseInt(arr[3]); 
}

function check() {
    $(".thepoints").html(score);

    if(score === goal){
        wins++;
        $(".win").html(wins);
        $(".hi").html("");
        crystalGame()
    }
    else if(score > goal){
        loss++;
        $(".loss").html(loss);
        $(".hi").html("");
        crystalGame()
    }
}

$("#crystals1").on("click", function(){
    score = score + numopt1;
    $(".crysid1").html("Gem 1: " + numopt1)
    check()
    })

    $("#crystals2").on("click", function(){
        score = score + numopt2;
        $(".crysid2").html("Gem 2: " + numopt2)
        check()
    })

    $("#crystals3").on("click", function(){
        score = score + numopt3;
        $(".crysid3").html("Gem 3: " +  numopt3)
        check()
    })

    $("#crystals4").on("click", function(){
        score = score + numopt4;
        $(".crysid4").html("Gem 4: " + numopt4)
        check()
    })


crystalGame()

});