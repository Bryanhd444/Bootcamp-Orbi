var player = "X";
var playerSelected = document.getElementById("Jogador-selecionado");
var Winner = document.getElementById("vencedor-selecionado");
var squires = document.getElementsByClassName("squire");




function onClick(id) {

    var squire = document.getElementById(id);

    if (squire.innerHTML !== '-') return;
    if(Winner.innerHTML !== "") return;

    squire.innerHTML = player;
    squire.style.color = '#000';

    defineWinner();
    player = changePlayer(player);
    playerSelected.innerHTML = player;
    

    
}

function changePlayer(value) {
    if (value === "X")
        value = "O";
    else
        value = "X";
    return value;
}

function defineWinner() {

    //CHECK HORIZONTAL

    if (checkWinner(squires[0], squires[1], squires[2])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[0], squires[1], squires[2]);
        return;
    }
    if (checkWinner(squires[3], squires[4], squires[5])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[3], squires[4], squires[5]);
        return;
    }
    if (checkWinner(squires[6], squires[7], squires[8])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[6], squires[7], squires[8]);
        return;
    }

    //CHECK VERTICAL

    if (checkWinner(squires[0], squires[3], squires[6])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[0], squires[3], squires[6]);
        return;
    }
    if (checkWinner(squires[1], squires[4], squires[7])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[1], squires[4], squires[7]);
        return;
    }
    if (checkWinner(squires[2], squires[5], squires[8])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[2], squires[5], squires[8]);
        return;
    }

    //CHECK DIAGONAL

    if (checkWinner(squires[0], squires[4], squires[8])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[0], squires[4], squires[8]);
        return;
    }
    if (checkWinner(squires[2], squires[4], squires[6])) {
        Winner.innerHTML = player;
        changeWinnerSquireColor(squires[2], squires[4], squires[6]);
        return;
    }

    
    
}

function checkWinner(squire1, squire2, squire3) {

    var check = false;

    if (squire1.innerHTML !== '-' && squire1.innerHTML === squire2.innerHTML && squire2.innerHTML === squire3.innerHTML)
        check = true;
    else
        false;

    return check;
}

function changeWinnerSquireColor(squire1, squire2, squire3) {
    squire1.style.backgroundColor = '#32CD32';
    squire2.style.backgroundColor = '#32CD32';
    squire3.style.backgroundColor = '#32CD32';
}

function Restart(){
    Winner.innerHTML = "";

    for(var i = 1; i <= 9; i++){
        var squire = document.getElementById(i);
        squire.style.backgroundColor = '#FFFEF2';
        squire.style.color = 'transparent'
        squire.innerHTML = '-';
    }
    player = "X"
    playerSelected.innerHTML = "X";
}