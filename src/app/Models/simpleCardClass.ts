export class SimpleCard{    /*Clase que usamos para la seleccion de la lista de cartas, contiene POCAS de sus propiedades originales*/
    private name:string;
    private manaCost:string;
    private colors:string[];
    
    constructor(name:string , manaCost:string, colors:string[]){
        this.name=name;
        this.manaCost=manaCost;
        this.colors=colors;
    }
}