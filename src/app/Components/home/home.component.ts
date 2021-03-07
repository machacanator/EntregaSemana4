import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/Services/database.service';
import siteTranslation  from '../../../assets/JSON/translations.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeLanguage:string[];
  observer:Observable<any>;


  constructor(private service:DatabaseService) { 
    this.observer=this.service.requestObservable();
    this.observer.subscribe(
      (language:string)=>{
        switch (language){
          case "Spanish":{
            this.homeLanguage=siteTranslation.Spanish.home;
          };break;
          default:{
            this.homeLanguage=siteTranslation.English.home;
          };break;
        }
        
      }
    );
    this.homeLanguage=siteTranslation.English.home;
  }

  ngOnInit(): void {
  }

}
