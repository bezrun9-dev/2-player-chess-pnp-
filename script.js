const board = document.getElementById("board");

for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++){

        const square = document.createElement("div");
        
        square.classicList.add("square");

        if ((row + col) % 2 === 0) {
            square.classicList.add("white");
        } else {
            square.classicList.add("blue");
        }

        board.appendChild(square);
    }
}