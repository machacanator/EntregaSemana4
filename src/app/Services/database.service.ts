import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cardJSON, foreignLanguage, requestJSON } from '../Models/interfacesJSON';
import { ExtenseCard } from '../Models/extenseCardClass';
import { SimpleCard } from '../Models/simpleCardClass';
import { Observable } from 'rxjs';


const siteURL:string="https://api.magicthegathering.io/v1/";
const cardsURL:string="cards/";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private observable:Observable<string>;
  private cardList: cardJSON[];
  private siteLanguage:string;

  constructor(private http:HttpClient) {
    this.observable=new Observable<string>((observer)=>{
      observer.next(this.siteLanguage);
    });
    this.updateDatabase();
    this.setCardTypes(new ExtenseCard(null,null,null,null,null,null,null, null), "Creature — Human Cleric");
  }

  getCardDetails(cardName:string):ExtenseCard{
    if(cardName==null) return null;
    this.cardList.forEach((card)=>{
      if(card.name==cardName)
        var result:ExtenseCard=new ExtenseCard(card.manaCost,card.colors, card.rarity, card.artist, card.number, card.power, card.toughness, card.layout);
        if(this.siteLanguage=="English"){
          result.setSetName(card.setName);
          result.setTypes(card.types[0]);
          result.setSubTypes(card.subtypes);
          result.setFlavor(languageFields.flavor);
          result.setText(languageFields.text);
          result.setImage(languageFields.imageUrl);
        }else{
          var languageFields:foreignLanguage= this.getCardLanguage(card);

          if(languageFields!=null){
            result.setSetName(languageFields.name);
            this.setCardTypes(result, languageFields.type);
            result.setFlavor(languageFields.flavor);
            result.setText(languageFields.text);
            result.setImage(languageFields.imageUrl);
          }
        }
        return result;
    });
    return null;
  }

  getCardList():SimpleCard[]{
    let resultList:SimpleCard[]=null;

    this.cardList.forEach((card)=>{
      resultList.push(new SimpleCard(card.name, card.manaCost, card.colors));
    });
    return resultList;
  }

  getCardLanguage(jsonCard:cardJSON):foreignLanguage{    /*Completes the card fields with the input language */
    jsonCard.foreignNames.forEach((cardLanguage)=>{
      if(cardLanguage.language==this.siteLanguage){
        return cardLanguage.language;
      }
    });
    return null;
  }

  setCardTypes(card:ExtenseCard, allTypes:string):void{
    let typeStrings:string[]=allTypes.split(" ");
    
    card.setTypes(typeStrings[0]);
    typeStrings.splice(0,2);
    card.setSubTypes(typeStrings);
  }

  requestObservable():Observable<string>{
    return this.observable;
  }

  changeSiteLanguage(language:string){
    if(this.siteLanguage!=language){
      //this.observable.next(language);
      this.siteLanguage=language;
    }
  }

  updateDatabase(){
    this.http.get(siteURL+cardsURL).subscribe((json:requestJSON)=>{
      this.cardList=json.cards;
    });
  }
}
