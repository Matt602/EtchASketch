
function createGrid(side) {
    const container = document.querySelector('#container');
    container.style['grid-template-columns'] = `repeat(${side}, 1fr)`;
    let totalDivs = side ** 2;
    
    for(let i = 0; i < totalDivs; i++)
    {
        let divs = document.createElement('div');
        divs.classList.add("item");
        divs.style.backgroundColor  = "white";
        divs.style.height = `${600/side}px`;

        divs.addEventListener('mouseover', () => {
            if(divs.style.backgroundColor === "white")
            {
                divs.style.backgroundColor  = "black";
            }
            else
            {
                divs.style.backgroundColor  = "white";
            }
        });


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
    let input = parseInt(prompt('Enter a number from 1 to 100, inclusively.'));
    //alert(input);
    clearGrid();
    createGrid(input);
});










