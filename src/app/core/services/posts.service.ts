import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // Variables
  authUrl = 'https://abidjanhd.bigfive.dev/api/login';
  apiUrl = 'https://abidjanhd.bigfive.dev/api/';

  //options: any;
  formData: any = new FormData();

  constructor(
    private http : HttpClient,
    ) {
    this.formData.append("email", 'henri@bigfiveabidjan.com');
    this.formData.append("password", 'CL9tdjV24');
  }

  connectServer() {
    if (localStorage.getItem("auth_token") === null) {

      this.http.post(this.authUrl, this.formData)
      .subscribe(
        (response) => {
          this.saveToken(response);
        },
        (error) => console.log(error)
      );

    }

  };

  saveToken(response: any) {
    const token = response.token;

    if (localStorage.getItem("auth_token") === null) {
      localStorage.setItem('auth_token', token);
      this.getPosts();
    }

  }

  getPosts(){
    this.http.get(this.apiUrl +'posts')
    .subscribe(
      (response) => {
        this.PostsSucces(response)
      },
      (error) => console.log(error)
    );
  }

  PostsSucces(response:any) {
    const jsonData = JSON.stringify(response.data);
    localStorage.setItem('posts', jsonData);
    localStorage.setItem('postsLength', response.data.length);
    //this.nombrePost = response.data.lenght;

  }
}
