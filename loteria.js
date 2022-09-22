
function sortear(){

function sorteando(){   
let sorteo = Math.ceil(Math.random() * (5 - 0) + 0); 
document.getElementById("numero").innerHTML=sorteo;
}
sorteando()

let uno = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("1").innerHTML=uno;
let dos = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("2").innerHTML=dos;
let tres = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("3").innerHTML=tres;
let cuatro = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("4").innerHTML=cuatro;


function carton1() {
    if (uno === sorteo) {
        document.getElementById("igual1").innerHTML = "X"
    }else{
        document.getElementById("1").innerHTML=uno;
    }
}
carton1()

function carton2() {
    if (dos === sorteo) {
        document.getElementById("igual2").innerHTML = "X"
    }else{
        document.getElementById("1").innerHTML=dos 
    }
}
carton2()

function carton3() {
    if (tres === sorteo) {
        document.getElementById("igual3").innerHTML = "X"
    }else{
        document.getElementById("1").innerHTML=tres
    }
}
carton3()

function carton4() {
    if (cuatro === sorteo) {
        document.getElementById("igual4").innerHTML = "X"
    }else{
        document.getElementById("1").innerHTML=cuatro;
    }
}
carton4()
}

sortear()

