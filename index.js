/**
 * Tic Tac Toe game
 * object -> game {
 *              winner : 
 *              board :
 *              get winnerText(){
 *                  return `Winner is ${this.winner}`; 
 *              }
 *          }
 * -player variable to find which player is playing
 * -onClick for each grid in tic tac toe -> set the grid in board to the character according to player variable
 * -An array of objects to store the player and the moves
 *            moves = [{player :  , move : }]
 * -Each onClick will have 
 *      -check if already there is a winner by game.winner. If there is winner disable the grid buttons
 *      If there is no winner
 *      - setting the board character
 *      - checking the winner
 * 
 * -function disableButtons() -> disable all the grid button except history of moves and reset
 * -function checkWinner() -> checks the condition for winning and sets the winner property to player 1 or 2
 *                           Set the text for the modal body as game.winnerText . Change the modal display to block
 * -function reset() -> Clears the board and winner
 * -function showMoves() -> Use map to map the list items with html
 */



const game = {
    winner : '',
    board : [
        ['' , '' , ''],
        ['' , '' , ''],
        ['' , '' , '']
    ],

    get winnerMsg(){
        if(this.winner === 'Player 1') return `Player 1 wins`;
        if(this.winner === 'Player 2') return `Player 2 wins`;
        if(this.winner === 'Draw') return `Match is Draw`;
    }
}

const moves = [];

let player = 0;
let moveCount = 0;

function checkWinner(){
    board = [...game.board];
    
    // Check the first row
    if((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && board[0][0] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && board[0][0] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    //Check the second row
    else if((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && board[1][0] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && board[1][0] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    //Check the third row
    else if((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && board[2][0] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && board[2][0] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    //Check the first column
    else if((board[0][0] === board[1][0]) && (board[0][0] === board[2][0]) && board[0][0] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[0][0] === board[1][0]) && (board[0][0] === board[2][0]) && board[0][0] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    //Check the second column
    else if((board[0][1] === board[1][1]) && (board[0][1] === board[2][1]) && board[0][1] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[0][1] === board[1][1]) && (board[0][1] === board[2][1]) && board[0][1] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    
    //Check the third column
    else if((board[0][2] === board[1][2]) && (board[0][2] === board[2][2]) && board[0][2] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[0][2] === board[1][2]) && (board[0][2] === board[2][2]) && board[0][2] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    //Check diagonal 1
    
    else if((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && board[0][0] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && board[0][0] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    
    //Check diagonal 2
    
    else if((board[0][2] === board[1][1]) && (board[0][2] === board[2][0]) && board[0][2] === 'X')
    {
        game.winner = 'Player 1';
        disableButtons();
    }

    else if((board[0][2] === board[1][1]) && (board[0][2] === board[2][0]) && board[0][2] === 'O')
    {
        game.winner = 'Player 2';
        disableButtons();
    }

    else if(moveCount == 9)
    {
        game.winner = 'Draw';
    }

    displayWinnner();
}

function displayWinnner(){
    if(game.winner === 'Player 1')
    {
        $('#winnerModal #winner').text(game.winnerMsg);
        $("#winnerModal").modal();
    }
    else if(game.winner === 'Player 2')
    {
        $('#winnerModal #winner').text(game.winnerMsg);
        $("#winnerModal").modal();
    }
    else if(game.winner === 'Draw')
    {
        $('#winnerModal #winner').text(game.winnerMsg);
        $("#winnerModal").modal();
    }   
}

function disableButtons(){
    document.getElementById("1").disabled =true;
    document.getElementById("2").disabled =true;
    document.getElementById("3").disabled =true;
    document.getElementById("4").disabled =true;
    document.getElementById("5").disabled =true;
    document.getElementById("6").disabled =true;
    document.getElementById("7").disabled =true;
    document.getElementById("8").disabled =true;
    document.getElementById("9").disabled =true;
}

function enableButtons(){
    document.getElementById("1").disabled =false;
    document.getElementById("2").disabled =false;
    document.getElementById("3").disabled =false;
    document.getElementById("4").disabled =false;
    document.getElementById("5").disabled =false;
    document.getElementById("6").disabled =false;
    document.getElementById("7").disabled =false;
    document.getElementById("8").disabled =false;
    document.getElementById("9").disabled =false;
}


function reset(){
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    document.getElementById("5").value = "";
    document.getElementById("6").value = "";
    document.getElementById("7").value = "";
    document.getElementById("8").value = "";
    document.getElementById("9").value = "";
    player = 0;
    moveCount = 0;
    enableButtons();
    game.winner = '';
    game.board = [
        ['' , '' , ''],
        ['' , '' , ''],
        ['' , '' , '']
    ];
    moves.length = 0;
    document.getElementById("moves").innerHTML="";


}

function showMoves(){
    // Creates an array in which each move is mapped with list items
    let listed = moves.map(moveObj => `<li>Player : ${moveObj.player} ${moveObj.move}</li>`);

    let htmlText = '<ol>' + listed.join('') + '</ol>';
    document.getElementById("moves").innerHTML = htmlText;
}

function btn1(){
    
    if(document.getElementById("1").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("1").value = 'X';
        game.board[0][0] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 1 Col 1'});
    }

    else{
        document.getElementById("1").value = 'O';
        game.board[0][0] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 1 Col 1'});
    }

    checkWinner();
}

function btn2(){

    if(document.getElementById("2").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("2").value = 'X';
        game.board[0][1] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 1 Col 2'});
    }

    else{
        document.getElementById("2").value = 'O';
        game.board[0][1] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 1 Col 2'});
    }

    checkWinner();
}


function btn3(){

    if(document.getElementById("3").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("3").value = 'X';
        game.board[0][2] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 1 Col 3'});
    }

    else{
        document.getElementById("3").value = 'O';
        game.board[0][2] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 1 Col 3'});
    }

    checkWinner();
}

function btn4(){

    if(document.getElementById("4").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("4").value = 'X';
        game.board[1][0] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 2 Col 1'});
    }

    else{
        document.getElementById("4").value = 'O';
        game.board[1][0] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 2 Col 1'});
    }

    checkWinner();
}

function btn5(){

    if(document.getElementById("5").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("5").value = 'X';
        game.board[1][1] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 2 Col 2'});
    }

    else{
        document.getElementById("5").value = 'O';
        game.board[1][1] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 2 Col 2'});
    }

    checkWinner();
}

function btn6(){

    if(document.getElementById("6").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("6").value = 'X';
        game.board[1][2] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 2 Col 3'});
    }

    else{
        document.getElementById("6").value = 'O';
        game.board[1][2] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 2 Col 3'});
    }

    checkWinner();
}

function btn7(){

    if(document.getElementById("7").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("7").value = 'X';
        game.board[2][0] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 3 Col 1'});
    }

    else{
        document.getElementById("7").value = 'O';
        game.board[2][0] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 3 Col 1'});
    }

    checkWinner();
}

function btn8(){

    if(document.getElementById("8").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("8").value = 'X';
        game.board[2][1] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 3 Col 2'});
    }

    else{
        document.getElementById("8").value = 'O';
        game.board[2][1] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 3 Col 2'});
    }

    checkWinner();
}


function btn9(){

    if(document.getElementById("9").value !== '')
    {
        alert("Already filled");
        return;
    }

    if(player === 0)
    {
        document.getElementById("9").value = 'X';
        game.board[2][2] = 'X';
        moveCount++;
        player = 1;
        moves.push({player : 1 , move : 'Row 3 Col 3'});
    }

    else{
        document.getElementById("9").value = 'O';
        game.board[2][2] = 'O';
        moveCount++;
        player = 0;
        moves.push({player : 2 , move : 'Row 3 Col 3'});
    }

    checkWinner();
}




