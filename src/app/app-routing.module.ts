import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Error404Component } from './composants/error404/error404.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'informatique',component:ListmaterielComponent},
  {path:'contact',component:ContactComponent},
  {path:'informatique/:id',component:DetailmaterielComponent},
  {path:'**',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
