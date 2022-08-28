// Selectors
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const span = document.querySelector('.text-color');
const hexLink = document.querySelector('.rgba-a');


//Functions
const changeColor = () =>{
    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);

    container.style.backgroundColor = `rgba(${rColor}, ${gColor}, ${bColor})`;
    span.textContent = ` rgba(${rColor}, ${gColor}, ${bColor})`;
}


// Event Listeners
btn.addEventListener('click', changeColor);
document.addEventListener('DOMContentLoaded', function(){
    hexLink.classList.add('a-active');
})


