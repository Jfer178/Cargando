const $PERCENT = document.querySelector('.PERCENT');
const $CIRCULO = document.querySelector('.CIRCULO');
let load= 0;
function update(){
    load += load <100;
    $PERCENT.innerHTML = load;
    $CIRCULO.style.background = 
        `conic-gradient(from 0ded at 50% 
        50%, #6f7bf7 0%, #9bf8f4 ${load}
        %, #101012 ${load}%)`;
}
setInterval(update, 120); //velocidiad del contador