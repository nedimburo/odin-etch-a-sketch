window.addEventListener("load", generateGridsSquares());

function generateGridsSquares(size=16){
    let mainContainer=document.getElementById("container");
    mainContainer.innerHTML="";
    for (let i=1; i<=size; i++){
        let newGrid=document.createElement("div");
        newGrid.setAttribute("id", "grid_"+i);
        newGrid.classList.add("grid");
        for (let j=1; j<=size; j++){
            let newSquare=document.createElement("div");
            newSquare.setAttribute("id", "square_"+i+"_"+j);
            newSquare.setAttribute("onmouseover", "editSquare(this)");
            newSquare.classList.add("square");
            newGrid.appendChild(newSquare);
        }
        mainContainer.appendChild(newGrid);
    }
}

function editLayoutInfo(newSize){
    let layoutInfo=document.querySelector(".layout-info");
    layoutInfo.textContent=`Current Layout: ${newSize}x${newSize}`;
}

function inputNewGrid(){
    let newSize=Number(prompt("Enter the size of new grid(max. 100):"));
    if(newSize>100){
        alert("The entered number is greater than 100.");
    }
    else if(newSize<1){
        alert("The etnered number is lesser than 1.");
    }
    else{
        generateGridsSquares(newSize);
        editLayoutInfo(newSize);
    }
}

function editSquare(element){
    element.classList.add("colored");
}