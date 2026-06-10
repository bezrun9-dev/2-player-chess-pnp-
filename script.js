const board = document.getElementById("board");

let pieces = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

let selectedRow = null;
let selectedCol = null;

let currentTurn = "white";

const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔"];
const blackPieces = ["♟", "♜", "♞", "♝", "♛", "♚"];

function drawBoard() {

    board.innerHTML = "";

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

            if (blackPieces.includes(pieces[row][col])) {
                piece.classList.add("black-piece");
            }

            if (whitePieces.includes(pieces[row][col])) {
                piece.classList.add("white-piece");
            }

            square.appendChild(piece);

            if (row === selectedRow && col === selectedCol) {
                square.classList.add("selected");
            }

            square.addEventListener("click", function () {

                const clickedPiece = pieces[row][col];

                if (selectedRow === null) {

                    if (clickedPiece === "") return;

                    if (
                        currentTurn === "white" &&
                        !whitePieces.includes(clickedPiece)
                    ) {
                        return;
                    }

                    if (
                        currentTurn === "black" &&
                        !blackPieces.includes(clickedPiece)
                    ) {
                        return;
                    }

                    selectedRow = row;
                    selectedCol = col;

                    drawBoard();

                } else {

                    pieces[row][col] =
                        pieces[selectedRow][selectedCol];

                    pieces[selectedRow][selectedCol] = "";

                    selectedRow = null;
                    selectedCol = null;

                    if (currentTurn === "white") {
                        currentTurn = "black";
                    } else {
                        currentTurn = "white";
                    }

                    drawBoard();
                }
            });

            board.appendChild(square);
        }
    }
}

drawBoard();
