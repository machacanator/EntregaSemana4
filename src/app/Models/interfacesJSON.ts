/*Intefaces que usamos para almacenar cartas en el JSON con TODAS sus propiedades */

export interface foreignLanguage{
    "name": string;
    "text": string;
    "type": string;
    "flavor": string;
    "imageUrl": string;
    "language": string;
    "multiverseid": number;
}

export interface legalities{
    "format": string;
    "legality": string;
}

export interface cardJSON{
    "name": string;
    "manaCost": string;
    "cmc": number;
    "colors": string[];
    "colorIdentity": string[];
    "type": string;
    "types": string[];
    "subtypes": string[];
    "rarity": string;
    "set": string;
    "setName": string;
    "text": string;
    "artist": string;
    "number": string;
    "power": string;
    "toughness": string;
    "layout": string;
    "multiverseid": string;
    "imageUrl": string;
    "variations": string[];
    "foreignNames": foreignLanguage[]
    "printings": string[];
    "originalText": string;
    "originalType": string;
    "legalities": legalities[];
    "id": string;
}

export interface requestJSON{
    "cards": cardJSON[]
}