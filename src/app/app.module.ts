import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

//Local data
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HomeSectionDescriptionComponent } from './home-section-description/home-section-description.component';
import { NotreOffreComponent } from './notre-offre/notre-offre.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommentCaMarcheComponent } from './comment-ca-marche/comment-ca-marche.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { MicasaComponent } from './micasa/micasa.component';
import { OneCasaComponent } from './one-casa/one-casa.component';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    TopHeaderComponent,
    SliderHomeComponent,
    HomeSectionDescriptionComponent,
    NotreOffreComponent,
    CommentCaMarcheComponent,
    ContactComponent,
    FooterComponent,
    PageContactComponent,
    PageAccueilComponent,
    MicasaComponent,
    OneCasaComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    ReactiveFormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		MatInputModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
