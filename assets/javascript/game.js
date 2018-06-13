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
        //console.log("loop iteration" + randomnumber);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
        //console.log("pushed number " + randomnumber);
    }

    numopt1 = parseInt(arr[0]);
    console.log("this is the ran1 " + numopt1);

    numopt2 = parseInt(arr[1]);
    console.log("this is the ran2 " + numopt2);

    numopt3 = parseInt(arr[2]);
    console.log("this is the ran3 " + numopt3);

    numopt4 = parseInt(arr[3]); 
    console.log("this is the ran3 " + numopt4);
}

  /*  numopt1 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt1);

    numopt2 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt2);

    numopt3 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt3);

    numopt4 = Math.floor(Math.random() * 12) + 1; 
    console.log(numopt4);
}*/


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