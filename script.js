const board = document.getElementById("board");

const pieces = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

        const square = document.createElement("div");

        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("blue");
        }

        square.textContent = pieces[row][col];

        
        if (row < 2) {
            square.style.color = "black";
        }

        if (row > 5) {
            square.style.color = "white";
        }

        board.appendChild(square);
    }
}
