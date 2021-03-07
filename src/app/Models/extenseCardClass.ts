/*Clase que usamos para detalles de una carta, contiene CASI TODAS sus propiedades originales(algunas son irrelevantes)*/

export class ExtenseCard{ 
    
    private name:string; //
    private manaCost:string;
    private colors:string[];
    private types:string[];//
    private subTypes:string[];//
    private rarity:string;
    private setName:string;
    private text:string;//
    private flavor:string;//
    private artist:string;
    private number:number;
    private power:string;
    private toughness:string;
    private layout:string;
    private image:string;//

    constructor(manaCost:string, colors:string[], rarity:string, artist:string, number:string, power:string, toughness:string, layout:string){
        this.manaCost=manaCost;
        this.colors=colors;
        this.rarity=rarity;
        this.artist=artist;
        this.number=parseFloat(number);
        this.power=power;
        this.toughness=toughness;
        this.layout=layout;

        this.setName=null;
        this.types=null;
        this.subTypes=null;
        this.flavor=null;
        this.text=null;
        this.image=null;
    }

    setSetName(setName:string){
        this.setName=setName;
    }
    
    setTypes(types:string){
        this.types=[types];
    }

    setSubTypes(subTypes:string[]){
        this.subTypes=subTypes;
    }
    
    setText(text:string){
        this.text=text;
    }
    
    setFlavor(flavor:string){
        this.flavor=flavor;
    }
    
    setImage(image:string){
        this.image=image;
    }

}