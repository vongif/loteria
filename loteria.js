let sorteo = Math.ceil(Math.random() * (5 - 0) + 0); 
    document.getElementById("numero").innerHTML=sorteo;

let i = 0
let a = 0    

function sortear(){
     
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
            document.getElementById("1").innerHTML=uno 
        }
    }
    carton1()
    
    function carton2() {
        if (dos === sorteo) {
            document.getElementById("igual2").innerHTML = "X"
        }else{
            document.getElementById("2").innerHTML=dos 
        }
    }
    carton2()
    
    function carton3() {
        if (tres === sorteo) {
            document.getElementById("igual3").innerHTML = "X"
        }else{
            document.getElementById("3").innerHTML=tres
        }
    }
    carton3()
    
    function carton4() {
        if (cuatro === sorteo) {
            document.getElementById("igual4").innerHTML = "X"
        }else{
            document.getElementById("4").innerHTML=cuatro;
        }
    }
    carton4()
    
    
    switch(sorteo){
     case uno: i=i+1 
    document.getElementById("aciertos").innerHTML= i
    break;
    }
    switch(sorteo){ 
    case dos:  i=i+1 
     document.getElementById("aciertos").innerHTML= i
    break; 
    }
    switch(sorteo){  
     case tres:  i=i+1 
     document.getElementById("aciertos").innerHTML= i
    break;
    }
    switch(sorteo){ 
     case cuatro:  i=i+1 
     document.getElementById("aciertos").innerHTML= i
    break; 
    }
}
sortear()


function sortearmas(){

    let cinco = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("5").innerHTML=cinco;
    let seis = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("6").innerHTML=seis;
    let siete = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("7").innerHTML=siete;
    let ocho = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("8").innerHTML=ocho;
            
        function carton5() {
            if (cinco === sorteo) {
                document.getElementById("igual5").innerHTML = "X"
            }else{
                document.getElementById("5").innerHTML=cinco 
            }
        }
        carton5()
        
        function carton6() {
            if (seis === sorteo) {
                document.getElementById("igual6").innerHTML = "X"
            }else{
                document.getElementById("6").innerHTML=seis 
            }
        }
        carton6()
        
        function carton7() {
            if (siete === sorteo) {
                document.getElementById("igual7").innerHTML = "X"
            }else{
                document.getElementById("7").innerHTML=siete
            }
        }
        carton7()
        
        function carton8() {
            if (ocho === sorteo) {
                document.getElementById("igual8").innerHTML = "X"
            }else{
                document.getElementById("8").innerHTML=ocho;
            }
        }
        carton8()
        
        
        switch(sorteo){
         case cinco: a=a+1 
        document.getElementById("aciertos1").innerHTML = a
        break;
        }
        switch(sorteo){ 
        case seis:  a=a+1 
         document.getElementById("aciertos1").innerHTML = a
        break; 
        }
        switch(sorteo){  
         case siete:  a=a+1 
         document.getElementById("aciertos1").innerHTML = a
        break;
        }
        switch(sorteo){ 
         case ocho:  a=a+1 
         document.getElementById("aciertos1").innerHTML = a
        break;     
        }
    }
    sortearmas()

    console.log(i)

    if( i > a ){
        document.getElementById("resultado").innerHTML= "Ganador : Participante 1"
    }else if( i < a ){
        document.getElementById("resultado").innerHTML= "Ganador : Participante 2"
    }else{
        document.getElementById("resultado").innerHTML= "Empate"
    }        
    

