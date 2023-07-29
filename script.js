window.addEventListener("load", generateGridsSquares());

function generateGridsSquares(size=16){
    let mainContainer=document.getElementById("container");
    for (let i=1; i<=size; i++){
        let newGrid=document.createElement("div");
        newGrid.setAttribute("id", "grid_"+i);
        newGrid.classList.add("grid");
        for (let j=1; j<=size; j++){
            let newSquare=document.createElement("div");
            newSquare.setAttribute("id", "square_"+i+"_"+j);
            newSquare.classList.add("square");
            newGrid.appendChild(newSquare);
        }
        mainContainer.appendChild(newGrid);
    }
}