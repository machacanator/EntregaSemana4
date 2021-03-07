import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './Components/card-details/card-details.component';
import { CardListComponent } from './Components/card-list/card-list.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'details', component:CardDetailsComponent},
  {path:'cardlist', component:CardListComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
