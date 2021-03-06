import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor() {}

  //options: any;
  formData: any = new FormData();

  //isLogin
  islogin: boolean = false;

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
    //this.isLogin = localStorage.getItem('isLogin') == 'true' ? true : false;

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

  isLogin() {
    this.islogin = localStorage.getItem('isLogin') == 'true' ? true : false;
  }
}
