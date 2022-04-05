import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {  this.titleService.setTitle('Abidjan HD - Accélérez vos locations et vos ventes de maisons à Abidjan');
  this.meta.updateTag({ name: 'description', content: "Accélérez vos locations et vos ventes de maisons à Abidjan grâce aux visites virtuelles 3D et HD" });
  this.meta.updateTag({ name: 'keywords', content: 'Abidjan HD' });
  }

  ngOnInit(): void {
  }

}
