
function createGrid(side) {
    const container = document.querySelector('#container');
    let totalDivs = side ** 2;
    
    for(let i = 0; i < totalDivs; i++)
    {
        let divs = document.createElement('div');
        divs.classList.add("item");
        divs.style.backgroundColor  = "white";
        container.appendChild(divs);
    }
        
    

}

function clearGrid()
{
    const containerToClear = document.querySelector('#container');
    const squares = containerToClear.querySelectorAll('.item');

    squares.forEach( square => {
        square.remove();
    });
}


createGrid(4);


const cButton = document.querySelector('#changeSize');

cButton.addEventListener('click', () => {
    clearGrid();
});




const parent = document.querySelector('#container');
div = parent.querySelectorAll('div');

div.forEach((div) => {

    div.addEventListener('mouseover', () => {
        if(div.style.backgroundColor === "white")
        {
            div.style.backgroundColor  = "black";
        }
        else
        {
            div.style.backgroundColor  = "white";
        }
    });

});






