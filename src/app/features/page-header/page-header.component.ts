import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  // Variables
  authUrl = 'https://abidjanhd.bigfive.dev/api/login';
  apiUrl = 'https://abidjanhd.bigfive.dev/api/';


  //options: any;
  formData: any = new FormData();

  constructor(private http: HttpClient) {

    this.formData.append("email", 'henri@bigfiveabidjan.com');
    this.formData.append("password", 'CL9tdjV24');
  }

  //afficher ou cacher le menu mobile
  largeurFenetre: any;
  isMobile!: boolean;
  isToggled!: boolean;
  afficher: boolean = false;
  etatdumenu: boolean = false;
  connectServer() {
    this.http.post(this.authUrl, this.formData)
      .subscribe(
        (response) => {
          this.getToken(response);
        },
        (error) => console.log(error)
      );
  };

  getToken(response: any) {
    const token = response.token;

    localStorage.setItem('token', token);
  }

  ngOnInit(): void {

    this.connectServer();
    //affichage ou non du menu mobile app
    this.menumobile();
  }
  menumobile() {
    //recuperer la largeur de la fenetre
    this.largeurFenetre = window.innerWidth;
    console.log(this.largeurFenetre);
    this.largeurFenetre <= 768 ? this.isMobile = true : this.isMobile = false;
    console.log(this.isMobile);
  }
  toggleur() {
    this.afficher = !this.afficher;
    this.etatdumenu = !this.etatdumenu;
    console.log(this.afficher);
  }

}
