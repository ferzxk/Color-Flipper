// Selectors

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const span = document.querySelector('.text-color');
const hexLink = document.querySelector('.hex-a');

// Functions

const changeColor = () => {
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    let hexColor = `#`

    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hexColor += hex[index]
    }

    container.style.backgroundColor = `${hexColor}`;
    span.textContent = ` ${hexColor}`;
}


// Event Listeners
btn.addEventListener('click', changeColor)
document.addEventListener("DOMContentLoaded", function(){
    hexLink.classList.add('a-active');
});