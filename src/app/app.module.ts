import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Amelioration du code
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
//Local data
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


import { AppComponent } from './app.component';
import { PageHeaderComponent } from './features/page-header/page-header.component';

import { TopHeaderComponent } from './features/top-header/top-header.component';
import { SliderHomeComponent } from './features/slider-home/slider-home.component';
import { HomeSectionDescriptionComponent } from './features/home-section-description/home-section-description.component';
import { NotreOffreComponent } from './features/notre-offre/notre-offre.component';
import { CommentCaMarcheComponent } from './features/comment-ca-marche/comment-ca-marche.component';

import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { MicasaComponent } from './pages/micasa/micasa.component';
import { OneCasaComponent } from './pages/one-casa/one-casa.component';
import { SafePipe } from './core/pipe/safe.pipe';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { AngularMaterialModule } from './shared/angular-material.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { AnnonceComponent } from './pages/annonce/annonce.component';
import { GmapComponent } from './features/gmap/gmap.component';
import { FileUploadComponent } from './features/file-upload/file-upload.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    SafePipe,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    SiteLayoutComponent,
    AnnonceComponent,
    GmapComponent,
    FileUploadComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AngularMaterialModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
