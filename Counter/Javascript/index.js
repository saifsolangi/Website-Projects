// document.querySelector("#num").innerHTML="Hello"

let display =  document.getElementById('num')
let incBtn = document.querySelector('.inc')
let decBtn = document.querySelector('.dec')
resetBtn = document.querySelector('.reset')

incBtn.addEventListener('click',increment)
decBtn.addEventListener('click',decrement)
resetBtn.addEventListener('click',reset)

value = 0;
function increment(){
    value+=1;
    display.textContent = value;
}

function decrement(){
    value-=1;
    display.textContent = value;
}

function reset(){
    value = 0
    display.textContent = value;
}