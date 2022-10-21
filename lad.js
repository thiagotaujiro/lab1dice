var diceOne = document.getElementById("dice1");
var comeOut = document.getElementById("roll");

comeOut.onclick = function(){ rollDice();};

function rollDice() {
    var diceOne = Math.floor((Math.random() * 6) +1);

    console.log(diceOne);

    for(var i=1; i<= 6; i++) { diceOne.classList.remove("show-" +i);
if (diceOne === i) { 
    diceOne.classList.add("show-" +i);}
}

setTimeout(rollDice(), 1000);
}