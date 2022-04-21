import defaultLanguage from "./../assets/i18n/fr.json";
import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abidjanhd';

  constructor(private translate: TranslateService) {
    translate.setTranslation('fr', defaultLanguage);
    translate.setDefaultLang('fr');
  }
}
