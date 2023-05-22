class circuitos{
    constructor(){
        this.x = random(displayWidth);
        this.y = 167;
        this.ancho = random(200, 400);
        this.alto = random(200, 200 * 5);
        this.color = miPaleta.darColor();
        this.anchoLineas = random(15, 40);

        this.opcion = int(random(2));
        
        this.izq = this.x - this.ancho/2 + this.anchoLineas - this.anchoLineas/2;
        this.izqInt = this.izq - this.anchoLineas;
        this.der = this.x + this.ancho/2 + this.anchoLineas - this.anchoLineas/2;
        this.derInt = this.der + this.anchoLineas;
        this.arr = this.y - this.alto/2 + this.anchoLineas - this.anchoLineas/2;
        this.arrInt = this.arr - this.anchoLineas;
        this.abj = this.y + this.alto/2 + this.anchoLineas - this.anchoLineas/2;
        this.abjInt = this.abj + this.anchoLineas;
    }
    
    dibujar(){

        push();

        noFill();
        strokeWeight(this.anchoLineas);
        stroke(this.color);
        
        translate(width, height);
        rotate(PI);

        
        //push();
            
            if(this.opcion == 0){
                //derAbj
                line(this.x, this.y, this.x, width);
                line(this.x, this.y, 0, this.y);
            }
            else if(this.opcion == 1){
                //izqArr
                line(width, this.alto, this.x + this.ancho, this.alto);
                line(this.x + this.ancho, this.alto, this.x + this.ancho, this.y);
            }
            
        //pop();


        pop();

    }

    esPisadoPor( otro ){
        // Calculate the outer and inner boundaries of the current object's contour lines
        let thisOuterLeft = this.izq - this.anchoLineas;
        let thisOuterRight = this.der + this.anchoLineas;
        let thisOuterTop = this.arr - this.anchoLineas;
        let thisOuterBottom = this.abj + this.anchoLineas;
        let thisInnerLeft = this.izq + this.anchoLineas;
        let thisInnerRight = this.der - this.anchoLineas;
        let thisInnerTop = this.arr + this.anchoLineas;
        let thisInnerBottom = this.abj - this.anchoLineas;

        // Calculate the outer and inner boundaries of the other object's contour lines
        let otroOuterLeft = otro.izq - otro.anchoLineas;
        let otroOuterRight = otro.der + otro.anchoLineas;
        let otroOuterTop = otro.arr - otro.anchoLineas;
        let otroOuterBottom = otro.abj + otro.anchoLineas;
        let otroInnerLeft = otro.izq + otro.anchoLineas;
        let otroInnerRight = otro.der - otro.anchoLineas;
        let otroInnerTop = otro.arr + otro.anchoLineas;
        let otroInnerBottom = otro.abj - otro.anchoLineas;

        // Check for overlap in the horizontal dimension
        let horizontalOverlap =
            (otroOuterLeft > thisOuterLeft && otroOuterLeft < thisOuterRight) ||
            (otroOuterRight > thisOuterLeft && otroOuterRight < thisOuterRight) ||
            (otroOuterLeft < thisOuterLeft && otroOuterRight > thisOuterRight) ||
            (otroOuterLeft > thisOuterLeft && otroOuterRight < thisOuterRight) ||
            (otroInnerLeft > thisInnerLeft && otroInnerLeft < thisInnerRight) ||
            (otroInnerRight > thisInnerLeft && otroInnerRight < thisInnerRight) ||
            (otroInnerLeft < thisInnerLeft && otroInnerRight > thisInnerRight) ||
            (otroInnerLeft > thisInnerLeft && otroInnerRight < thisInnerRight);

        // Check for overlap in the vertical dimension
        let verticalOverlap =
            (otroOuterTop > thisOuterTop && otroOuterTop < thisOuterBottom) ||
            (otroOuterBottom > thisOuterTop && otroOuterBottom < thisOuterBottom) ||
            (otroOuterTop < thisOuterTop && otroOuterBottom > thisOuterBottom) ||
            (otroOuterTop > thisOuterTop && otroOuterBottom < thisOuterBottom) ||
            (otroInnerTop > thisInnerTop && otroInnerTop < thisInnerBottom) ||
            (otroInnerBottom > thisInnerTop && otroInnerBottom < thisInnerBottom) ||
            (otroInnerTop < thisInnerTop && otroInnerBottom > thisInnerBottom) ||
            (otroInnerTop > thisInnerTop && otroInnerBottom < thisInnerBottom);

        // Return true if there is overlap in both dimensions, false otherwise
        return horizontalOverlap && verticalOverlap;
        /* let superPosicionHrz = 
        (otro.izq > this.izq && otro.izq < this.der) ||
        (otro.der > this.izq && otro.der < this.der) ||
        (otro.izq < this.izq && otro.der > this.der) ||
        (otro.izq > this.izq && otro.der < this.der);
        let superPosicionVert = 
        (otro.arr > this.arr && otro.arr < this.abj) ||
        (otro.abj > this.arr && otro.abj < this.abj) ||
        (otro.arr < this.arr && otro.abj > this.abj) ||
        (otro.arr > this.arr && otro.abj < this.abj);

        return superPosicionHrz && superPosicionVert; */
        
    }
}