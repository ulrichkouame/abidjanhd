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
  apiUrl = 'https://abidjanhd.bigfive.dev/api/';

  //options: any;
  formData: any = new FormData();

  constructor(private http : HttpClient) {
  }

  getPosts(){
    const token = localStorage.getItem('token');

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
    this.getPosts();
    this.nombrePost = localStorage.getItem('postsLength');
    this.posts = localStorage.getItem('posts');
    this.posts = JSON.parse(this.posts);

  }
}
