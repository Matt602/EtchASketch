

const div = document.querySelectorAll('div');

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


