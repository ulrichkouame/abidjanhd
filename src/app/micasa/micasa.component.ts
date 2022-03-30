import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-micasa',
  templateUrl: './micasa.component.html',
  styleUrls: ['./micasa.component.scss']
})
export class MicasaComponent implements OnInit {

  public nombrePost: any =0;
  posts: any;
  token:string = '';
  // Variables
  authUrl = 'https://abidjanhd.bigfive.dev/api/login';
  apiUrl = 'https://abidjanhd.bigfive.dev/api/';


  //options: any;
  formData: any = new FormData();

  constructor(private http : HttpClient) {

    this.formData.append("email", 'henri@bigfiveabidjan.com');
    this.formData.append("password", 'CL9tdjV24');
  }

  public connectServer() {
    this.http.post(this.authUrl, this.formData)
    .subscribe(
      (response) => {
        this.getPosts(response);
      },
      (error) => console.log(error)
    );
  };

  public getPosts(response:any){
    const token = response.token;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get(this.apiUrl +'posts', { 'headers': headers })
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
    this.nombrePost = localStorage.getItem('postsLength');
    this.posts = localStorage.getItem('posts');
    this.posts = JSON.parse(this.posts);
  }

  ngOnInit(): void {
    this.connectServer() ;
    this.nombrePost = localStorage.getItem('postsLength');
    this.posts = localStorage.getItem('posts');
    this.posts = JSON.parse(this.posts);

    //console.log(this.posts)
    //console.log(localStorage.getItem('posts')?.length);
  }
}
