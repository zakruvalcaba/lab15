/*eslint-env browser*/

//SET MAX SIDES OF DIE
var MAX_DIE_SIDES = 6;

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var getRandomNumber = function () {
    "use strict";
    var random;
    //MAKE SURE MAXDIESIDES IS A NUMBER
    if (!isNaN(MAX_DIE_SIDES)) {
        //VALUE BETWEEN 0 AND 1
        random = Math.random();
        //VALUE IS INTEGER BETWEEN 0 AND MAX - 1
        random = Math.floor(random * MAX_DIE_SIDES);
        //VALUE IS INTEGER BETWEEN 1 AND MAX
        random = random + 1;
    }
    return random;
};

var changePlayer = function () {
    "use strict";
    //SWITCH CURRENT PLAYER TO NEXT PLAYER
    if ($("current").innerHTML === $("player1").value) {
        $("current").innerHTML = $("player2").value;
    } else {
        $("current").innerHTML = $("player1").value;
    }
    //RESET DIE TEXT BOX AND TOTAL TEXT BOX
    $("die").value = "0";
    $("total").value = "0";
    //FOCUS ROLL BUTTON
    $("roll").focus();
};

var newGame = function () {
    "use strict";
    //SET BOTH SCORE TEXT BOXES TO 0
    $("score1").value = "0";
    $("score2").value = "0";
    //MAKE SURE PLAYER TEXT BOXES ARE NOT EMPTY
    //IF THEY ARE, HIDE SECTION AND ALERT USER
    //IF THEY'RE NOT, SHOW SECTION AND CHANGE PLAYER
    if ($("player1").value === "" || $("player2").value === "") {
        $("turn").removeAttribute("class");
        window.alert("Please enter two player names");
    } else {
        $("turn").setAttribute("class", "open");
        changePlayer();
    }
};

var rollDice = function () {
    "use strict";
    var total, die;
    //GET THE RUNNING TOTAL
    total = parseInt($("total").value, 10);
    //GET THE CURRENT DIE ROLL
    die = getRandomNumber();
    //IF DIE IS 1, RESET TOTAL AND CHANGE PLAYER
    //OTHERWISE INCREASE TOTAL WITH DIE NUMBER
    if (die === 1) {
        total = 0;
        changePlayer();
    } else {
        total = total + die;
    }
    //SET DIE TEXT BOX TO DIE ROLL
    $("die").value = die;
    //SET TOTAL TEXT BOX TO CURRENT RUNNING TOTAL
    $("total").value = total;
};

var holdTurn = function () {
    "use strict";
    var score, total;
    //GET THE CURRENT TOTAL
    total = parseInt($("total").value, 10);
    //IF THE CURRENT PLAYER IS PLAYER 1
    if ($("current").innerHTML === $("player1").value) {
        //GET PLAYER 1'S BANKED TOTAL
        score = $("score1");
    } else {
        //GET PLAYER 2'S BANKED TOTAL
        score = $("score2");
    }
    //ADD THE CURRENT TOTAL TO THE BANKED TOTAL
    score.value = parseInt(score.value, 10) + total;
    //IF THE SCORE IS 100 OR MORE, PLAYER WINS
    //OTHERWISE PLAY CONTINUES TO NEXT PLAYER
    if (score.value >= 100) {
        window.alert($("current").innerHTML + " wins!");
        newGame();
    } else {
        changePlayer();
    }
};

window.addEventListener("load", function () {
    "use strict";
    $("new_game").addEventListener("click", newGame);
    $("roll").addEventListener("click", rollDice);
    $("hold").addEventListener("click", holdTurn);
});