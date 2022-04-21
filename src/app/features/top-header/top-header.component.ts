import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})

export class TopHeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
