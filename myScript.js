
function createGrid() {
    const container = document.querySelector('#container');
    
    
    for(let i = 0; i < 16; i++)
    {
        let divs = document.createElement('div');
        divs.style.backgroundColor  = "white";
        container.appendChild(divs);
    }
        
    

}

createGrid();




//const div = document.querySelectorAll('#container div');
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





