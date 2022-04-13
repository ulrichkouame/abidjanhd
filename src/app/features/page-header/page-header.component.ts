import { Component, OnInit } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor(public router: Router) {}

  //options: any;
  formData: any = new FormData();

  //afficher ou cacher le menu mobile
  largeurFenetre: any;
  isMobile!: boolean;
  isToggled!: boolean;
  afficher: boolean = false;
  etatdumenu: boolean = false;


  getToken(response: any) {
    const token = response.token;

    localStorage.setItem('token', token);
  }

  ngOnInit(): void {

    //affichage ou non du menu mobile app
    this.menumobile();
  }
  menumobile() {
    //recuperer la largeur de la fenetre
    this.largeurFenetre = window.innerWidth;
    this.largeurFenetre <= 768 ? this.isMobile = true : this.isMobile = false;
  }
  toggleur() {
    this.afficher = !this.afficher;
    this.etatdumenu = !this.etatdumenu;
  }
  logOut() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('isLogin');
    //this.router.navigate(['/']);
  }

}
