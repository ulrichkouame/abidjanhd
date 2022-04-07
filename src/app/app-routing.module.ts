import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { MicasaComponent } from './pages/micasa/micasa.component';
import { OneCasaComponent } from './pages/one-casa/one-casa.component';

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
