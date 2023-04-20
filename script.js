const cells = document.querySelectorAll('#cells');
const resetButton = document.querySelector('.resetButton');
let playerTurn = 1;
let playerMark = "o";
let cell1;
let cell2;
let cell3;
let cell4;
let cell5;
let cell6;
let cell7;
let cell8;
let cell9;

// Function that adds playerMark value to target if empty

function marker(event) {
    if (event.target.innerHTML === "") {
        event.target.innerHTML = playerMark;
        event.target.classList.add('marked');
        cell1 = document.querySelector('.cell1').innerHTML;
        cell2 = document.querySelector('.cell2').innerHTML;
        cell3 = document.querySelector('.cell3').innerHTML;
        cell4 = document.querySelector('.cell4').innerHTML;
        cell5 = document.querySelector('.cell5').innerHTML;
        cell6 = document.querySelector('.cell6').innerHTML;
        cell7 = document.querySelector('.cell7').innerHTML;
        cell8 = document.querySelector('.cell8').innerHTML;
        cell9 = document.querySelector('.cell9').innerHTML;
        checkWin();
    }
};

// Function that increases playerTurn in order to alter playerMark

function changePlayer() {
    playerTurn++;
};

// Function that will alter playerMark depending on who's go it is

function changeMark() {
    if (playerTurn % 2 == 0) {
        playerMark = "x";
    } else {
        playerMark = "o";
    }
}


// Function that checks win

function checkWin() {
    if ((cell1 === 'x' && cell2 === 'x' && cell3 === 'x') ||
        (cell4 === 'x' && cell5 === 'x' && cell6 === 'x') ||
        (cell7 === 'x' && cell8 === 'x' && cell9 === 'x') ||
        (cell1 === 'x' && cell4 === 'x' && cell7 === 'x') ||
        (cell2 === 'x' && cell5 === 'x' && cell8 === 'x') ||
        (cell3 === 'x' && cell6 === 'x' && cell9 === 'x') ||
        (cell1 === 'x' && cell5 === 'x' && cell9 === 'x') ||
        (cell3 === 'x' && cell5 === 'x' && cell7 === 'x')) {
        console.log('x wins')
    } else if ((cell1 === 'x' && cell2 === 'x' && cell3 === 'x') ||
        (cell4 === 'o' && cell5 === 'o' && cell6 === 'o') ||
        (cell7 === 'o' && cell8 === 'o' && cell9 === 'o') ||
        (cell1 === 'o' && cell4 === 'o' && cell7 === 'o') ||
        (cell2 === 'o' && cell5 === 'o' && cell8 === 'o') ||
        (cell3 === 'o' && cell6 === 'o' && cell9 === 'o') ||
        (cell1 === 'o' && cell5 === 'o' && cell9 === 'o') ||
        (cell3 === 'o' && cell5 === 'o' && cell7 === 'o')) {
        console.log('o wins')
    }


}
// Function that resets the board

resetButton.addEventListener('click', function () {
    cells.forEach(function (cell) {
        cell.innerHTML = '';
        cell.classList.remove('marked');
    })
})


// Adds marker function to each click on cell

cells.forEach(function (cell) {
    cell.addEventListener('click', marker);
    cell.addEventListener('click', changePlayer)
    cell.addEventListener('click', changeMark)
});

// Increase playerTurn on each click

cells.forEach(function (cell) {
    cell.addEventListener('click', changePlayer)
});

// Change playerMark on each click 

cells.forEach(function (cell) {
    cell.addEventListener('click', changeMark)
});