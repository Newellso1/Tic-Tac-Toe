const cells = document.querySelectorAll('.cell');
let playerTurn = 1;
let playerMark = "o";

// Function that adds 'x' to target

function marker(event) {
  event.target.innerHTML = playerMark;
};

// Function that increases playerTurn in order to alter playerMark

function changePlayer() {
    playerTurn ++;
};

// Function that will alter playerMark depending on who's go it is

function changeMark() {
    if (playerTurn % 2 == 0) {
        playerMark = "x";
    } else {
        playerMark = "o";
    }
}

// Adds marker function to each click on cell

cells.forEach(function(cell) {
  cell.addEventListener('click', marker);
});

// Increase playerTurn on each click

cells.forEach(function(cell) {
    cell.addEventListener('click', changePlayer)
});

// Change playerMark on each click 

cells.forEach(function(cell) {
    cell.addEventListener('click', changeMark)
});