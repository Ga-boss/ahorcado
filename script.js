var palabras=["COMIDA","AGUA","CAMA","DUCHA","GABRIEL","MUSICA","PANDA","COMPUTADORA","CELULAR","PANTALLA","HTML","ALURA","LATAM","ORACLE","CSS","JAVASCRIPT","TECLADO","VENTANA","BRINCARIA","CIELO","FELIZ","AMOR","REGRESARAS","AMOR","DOLOR","TALVEZ","VUELVES","OIR","SIENTO","ILUSION","FOTOGRAFIA","HIJO","PADRE","MADRE","RELOJ","MIEDO","PODRIA","SUELO","AQUI","GRITAR","CALLES","VIERA"];

var numpalabra=Math.round((Math.random()*(palabras.length-1)));

var adivinar=document.getElementById("numrayas");
var adivinarletras=document.getElementById("deletreo");
var silaba=document.getElementById("letraintento");
var numero=palabras[numpalabra].length;
var vector=new Array(numero);
var numerror=0;
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
        pincel.strokeStyle = '#0A3871';
var letrasmal=document.getElementById("errados");
var fallas =0;
var terminojuego=document.getElementById("mensaje");
var correcto=0;

 function ocultar1_3(){

        var uno= document.getElementsByClassName("botonesinicio");
                 uno[0].style.display="none";
          var tres=document.getElementsByClassName("nuevapalabra");
          tres[0].style.display="none";     
          var dos=document.getElementsByClassName("juego");
          dos[0].style.display="inline";

 }
           
    function guardaryempezar(){

        var guardarplabra=document.getElementById("nuepala");
        if(guardarplabra.value.length>3 &&guardarplabra.value.length<9){
        palabras.push(guardarplabra.value.toUpperCase());
        numpalabra=palabras.length-1;
        numero=palabras[numpalabra].length;

        vector=new Array(numero);
        numerror=0;
        adivinarletras.value="";
        letrasmal.value="";
        pincel.clearRect(0,0,430,400);
        for(var i=0;i<vector.length;i++){

                vector[i]="  ";
        }

        terminojuego.innerHTML="";
         letras();

        var uno= document.getElementsByClassName("botonesinicio");
        uno[0].style.display="none";
        var tres=document.getElementsByClassName("nuevapalabra");
        tres[0].style.display="none";     
        var dos=document.getElementsByClassName("juego");
        dos[0].style.display="inline";
                }

    }

        function ocultar1_2(){

                var uno= document.getElementsByClassName("botonesinicio");
                uno[0].style.display="none";
         var tres=document.getElementsByClassName("nuevapalabra");
         tres[0].style.display="inline";     
         var dos=document.getElementsByClassName("juego");
         dos[0].style.display="none";


        }
        for(var i=0;i<vector.length;i++){

                vector[i]="  ";
        }

         letras();



        function jugardenuevo(){
                numpalabra=Math.round((Math.random()*(palabras.length-1)));
                numero=palabras[numpalabra].length;

                 vector=new Array(numero);
                numerror=0;

                adivinarletras.value="";
                letrasmal.value="";
                pincel.clearRect(0,0,430,400);
                for(var i=0;i<vector.length;i++){

                        vector[i]="  ";
                }
                terminojuego.innerHTML="";
                 letras();




        }
                      
        
 

    document.addEventListener('keydown', (event) => {
        var keyValue = event.key.toUpperCase();
        var codasci=keyValue.charCodeAt(0);
        if(codasci>=65 && codasci<=90){
        letracorrecta(keyValue);
        }
        
       
      }, false);


function letras(){

    numerorayas(palabras[numpalabra].length)
}

function numerorayas(numero){
    adivinar.value="";
    //vector.reduce();
   // adivinarletras.value="";

    var rayas=adivinar.value;
    

    for(var i=0;i<numero;i++)
    {   
        

        rayas=rayas+"_ ";

    }
    
    
    adivinar.value=rayas;
    
}

function letracorrecta(tecleado){
        var letraigual=false;
    
         
    for(var i=0;i<numero;i++){

            if(palabras[numpalabra].charAt(i)==tecleado&&numerror<7){

              
                letraigual=true;
                //correcto++;
                vector[i]=palabras[numpalabra].charAt(i);
                
               
                }
                
                
        }

        var ganar=vector.indexOf("  ");

        if(!letraigual&&numerror<7&&ganar!=-1){

                
                letraerrada(tecleado)


        }

        if(ganar==-1){

                terminojuego.style.color="green"             
                terminojuego.innerText="GANASTEE, FELICIDADES";
        }
        
       

        //alert("pero que pasa chavales");
        
        adivinarletras.value=vector.join("   ");

}


function dibujo(){
    numerror++;
    
  
    function dibujarCirculo(x, y, radio) {

        //pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*3.14);
       // pincel.fill();
       pincel.stroke(); 
    }
     function dibujarlinea(x,y,x2,y2){

        pincel.beginPath();
        // Grosor de línea
        pincel.lineWidth = 3;
        // Color de línea 
        pincel.lineCap="round";
     
        // Comenzamos en 0, 0
        pincel.moveTo(x,y );
        // Hacemos una línea hasta 48, 48
        pincel.lineTo(x2, y2);

        pincel.stroke(); 


     }

   
                        if(numerror==1){

                              //  dibujarCirculo(300,200,30,"red");
                              
                             dibujarlinea(160,390,440,390);
                             dibujarlinea(250,390,250,130);
                             dibujarlinea(250,130,390,130);
                             dibujarlinea(390,130,390,180);


                        }
                        if(numerror==2){
                                dibujarCirculo(390,205,25);
                        }
                        if(numerror==3){
                                dibujarlinea(390,233,390,330);
                        }
                        if(numerror==4){
                                dibujarlinea(390,330,350,360);
                        }
                        if(numerror==5){
                                dibujarlinea(390,330,430,360);
                        }
                        if(numerror==6){
                                dibujarlinea(390,250,350,280);
                        }
                        if(numerror==7){
                                dibujarlinea(390,250,430,280);
                                terminojuego.style.color="red"
                               terminojuego.innerText="FIN DEL JUEGO!";
                        }
            
        }

    


function letraerrada(tecla){


                if(letrasmal.value.indexOf(tecla)==-1)
                {

                        letrasmal.value=letrasmal.value+tecla;
                        dibujo();

                } 


}


