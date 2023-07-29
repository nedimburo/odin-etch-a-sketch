window.addEventListener("load", generateGridsSquares);

function generateGridsSquares(){
    let mainContainer=document.getElementById("container");
    for (let i=1; i<=16; i++){
        let newGrid=document.createElement("div");
        newGrid.setAttribute("id", "grid_"+i);
        newGrid.classList.add("grid");
        for (let j=1; j<=16; j++){
            let newSquare=document.createElement("div");
            newSquare.setAttribute("id", "square_"+i+"_"+j);
            newSquare.classList.add("square");
            newGrid.appendChild(newSquare);
        }
        mainContainer.appendChild(newGrid);
    }
}