import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { MicasaComponent } from './pages/micasa/micasa.component';
import { OneCasaComponent } from './pages/one-casa/one-casa.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { AnnonceComponent } from './pages/annonce/annonce.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'micasa', component: MicasaComponent },
  { path: 'micasa/:id', component: OneCasaComponent },
  {
    path: 'login',
    component: SigninComponent
  },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'profile/annonce/add', component: AnnonceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
