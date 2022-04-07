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

  constructor(private http : HttpClient) {

    this.formData.append("email", 'henri@bigfiveabidjan.com');
    this.formData.append("password", 'CL9tdjV24');
  }

  connectServer() {
    this.http.post(this.authUrl, this.formData)
    .subscribe(
      (response) => {
        this.getToken(response);
      },
      (error) => console.log(error)
    );
  };

  getToken(response:any){
    const token = response.token;

    localStorage.setItem('token', token);
  }

  ngOnInit(): void {

    this.connectServer() ;

  }

}
