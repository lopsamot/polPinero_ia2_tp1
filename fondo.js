class fondo{

    
    constructor(){
        this.color = color(miPaleta.darColor());
    }
    
    dibujar(){

        push();

        noStroke();    
        
        fill(this.color);
        rect(0,0,displayWidth,displayHeight);

        pop();
    }
}

