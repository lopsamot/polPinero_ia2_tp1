
let miPaleta;
let miFondo;

let miBase = [];
let miCircuito = [];
let cantidad = 0;

let miVentana = [];
let cantidadVent = 0;

let clickeaste = 0;

let estado = "cero";
let dClicks = 0;

function preload() {
  miPaleta = new paleta("data/ejemplo2.png");
}


function setup() {

  createCanvas(displayHeight, displayHeight);
  
  miFondo = new fondo();

}

function draw() {
  //1536, 864
 
    miFondo.dibujar();

  if(clickeaste >= 1) {
    for(let i = 0; i < 3; i++){  
      miBase[i].dibujar();
    
    }
    
    /* for(let i = 0; i < 5; i++){
      
      miCircuito[i].dibujar();
      
    } */


    /////circuitos creacion y draw
    for( let j=0 ; j<10 ; j++ ){

      miCircuito[ cantidad ] = new circuitos();
  
      let tieneLugar = true;
  
      for( let i=0 ; i<cantidad ; i++ ){
        if( miCircuito[i].esPisadoPor( miCircuito[cantidad] ) ){
          tieneLugar = false;
        }
      }
      if( tieneLugar ){
        cantidad++;
      }
      
      for( let i=0 ; i<cantidad ; i++ ){
        miCircuito[i].dibujar();
  
      }
  
    }

    
    for(let i = 0; i < cantidadVent; i++){

      miVentana[i].dibujar(estado);

    }
    //clickeaste = false;
  }
    

  }


function mousePressed(){

  clickeaste ++;

  if(estado == "cero"){

    for(let i = 0; i < 3; i++){

      miBase [i] = new base();

    }

    /* for(let i = 0; i < 5; i++){

      miCircuito [i] = new circuitos();
        
    }*/

    
    /* for( let j=0 ; j<10 ; j++ ){

      miCircuito[ cantidad ] = new circuitos();
  
      let tieneLugar = true;
  
      for( let i=0 ; i<cantidad ; i++ ){
        if( miCircuito[i].esPisadoPor( miCircuito[cantidad] ) ){
          tieneLugar = false;
        }
      }
      if( tieneLugar ){
        cantidad++;
      }
      
      for( let i=0 ; i<cantidad ; i++ ){
        miCircuito[i].dibujar();
  
      }
  
    } */

    estado = "quieto";
  }

  //estado = "quieto";
  
  
  /* if(cantidadVent >= 4){
    cantidadVent = 0;
  } */

  if(mouseButton == RIGHT){
    cantidadVent = 0;
  }
  //miVentana[cantidadVent].estado = "creciendo";
  /* if (doubleClicked(false) && estado == "creciendo" || estado == "decreciendo"){
    estado = "cero";
  }
 */
  

}

function doubleClicked(){

  if(cantidadVent <= 3){
    miVentana[cantidadVent] = new Ventana(mouseX);
    cantidadVent ++;
  }

  
  else if( cantidadVent >= 4){
    if(estado == "quieto" || estado == "decreciendo"){
      dClicks ++;
      estado = "creciendo";
    }
    else if(estado == "creciendo"){
      estado = "decreciendo";
      dClicks ++;
    }
  
    if(dClicks >= 3){
      estado = "quieto";
      dClicks = 0;
    }

    /* else if(estado == "decreciendo"){
      estado = "cero";
    } */

  }

  
  
}