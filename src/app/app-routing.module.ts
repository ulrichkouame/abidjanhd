import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { MicasaComponent } from './micasa/micasa.component';
import { OneCasaComponent } from './one-casa/one-casa.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'micasa', component: MicasaComponent },
  { path: 'micasa/:id', component: OneCasaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
