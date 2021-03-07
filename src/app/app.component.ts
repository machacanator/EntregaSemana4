import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './Services/database.service';
import siteTranslation from '../assets/JSON/translations.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'EntregaSemana4';
  observer:Observable<string>;
  headerLanguage:any;
  footerLanguage:any;

  constructor(private service:DatabaseService){
    this.observer=this.service.requestObservable();
    this.observer.subscribe(
      (language:string)=>{
        switch (language){
          case "Spanish":{
            this.headerLanguage=siteTranslation.Spanish.header;
            this.footerLanguage=siteTranslation.Spanish.footer;
          };break;
          default:{
            this.headerLanguage=siteTranslation.English.header;
            this.footerLanguage=siteTranslation.English.footer;
          };break;
        }
      }
    );
    this.headerLanguage=siteTranslation.English.header;
    this.footerLanguage=siteTranslation.English.footer;
  }

  onLanguageChange(newLanguage:string){
    this.service.changeSiteLanguage(newLanguage);
  }
}
