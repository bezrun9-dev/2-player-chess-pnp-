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

let selectedSquare = null;

for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

        const square = document.createElement("div");

        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("blue");
        }

        const piece = document.createElement("span");

        piece.textContent = pieces[row][col];

        if (row < 2) {
            piece.classList.add("black-piece");
        }

        if (row > 5) {
            piece.classList.add("white-piece");
        }

        square.appendChild(piece);

        square.addEventListener("click", function () {

            if (selectedSquare) {
                selectedSquare.classList.remove("selected");
            }

            selectedSquare = square;

            square.classList.add("selected");
        });

        board.appendChild(square);
    }
}
