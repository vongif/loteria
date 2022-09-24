let sorteo = Math.ceil(Math.random() * (5 - 0) + 0); 
    document.getElementById("numero").innerHTML=sorteo;

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
    
    i = 0
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

    let cinco = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("5").innerHTML=uno;
    let seis = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("6").innerHTML=dos;
    let siete = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("7").innerHTML=tres;
    let ocho = Math.ceil(Math.random() * (5-0) + 0);
    document.getElementById("8").innerHTML=cuatro;
            
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
        
        i = 0
        switch(sorteo){
         case cinco: i=i+1 
        document.getElementById("aciertos1").innerHTML= i
        break;
        }
        switch(sorteo){ 
        case seis:  i=i+1 
         document.getElementById("aciertos1").innerHTML= i
        break; 
        }
        switch(sorteo){  
         case siete:  i=i+1 
         document.getElementById("aciertos1").innerHTML= i
        break;
        }
        switch(sorteo){ 
         case ocho:  i=i+1 
         document.getElementById("aciertos1").innerHTML= i
        break; 
            
        }
    
    let aciertos = document.getElementById("aciertos").value;
    let aciertos1 = document.getElementById("aciertos1").value;
     console.log (aciertos)
     console.log (aciertos1)   
    

   /* if(aciertos > aciertos1 ){
        document.getElementById("resultado").innerHTML= "Ganador : Participante 1"
    }else if(aciertos.value < aciertos1.id.value ){
        document.getElementById("resultado").innerHTML= "Ganador : Participante 2"
    }else{
        document.getElementById("resultado").innerHTML= "Empate"
    }        
     */     
}
sortear()