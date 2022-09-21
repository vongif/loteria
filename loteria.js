 
let sorteo = Math.ceil(Math.random() * (5 - 0) + 0); 
document.getElementById("numero").innerHTML=sorteo;

let uno = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("1").innerHTML=uno;

let dos = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("2").innerHTML=dos;

let tres = Math.ceil(Math.random() * (5-0) + 0);
document.getElementById("3").innerHTML=tres;




function carton1() {
    if (sorteo === uno) {
        document.getElementById("1").innerHTML = "X"
    }
}
carton1()

function carton2() {
    if (sorteo === dos) {
        document.getElementById("2").innerHTML = "X"
    }
}
carton2()

function carton3() {
    if (sorteo === tres) {
        document.getElementById("3").innerHTML = "X"
    }
}
carton3()

