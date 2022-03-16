import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';


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
    PageAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    ReactiveFormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		MatInputModule,
		BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
