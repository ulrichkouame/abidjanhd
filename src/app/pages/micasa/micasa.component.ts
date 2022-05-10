import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PostsService } from 'src/app/core/services/posts.service';

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

  constructor(
    private meta: Meta,
    private titleService: Title,
    private postsService: PostsService
    ) {
    this.titleService.setTitle('Modèle de visite 3D et HD - Abidjan HD');
    this.meta.updateTag({ name: 'description', content: "Vos locations et maisons à Abidjan grâce aux visites virtuelles 3D et HD" });
    }

  ngOnInit(): void {
    this.postsService.connectServer();

    this.nombrePost = localStorage.getItem('postsLength');
    this.posts = localStorage.getItem('posts');
    this.posts = JSON.parse(this.posts);

  }

  ngAfterViewChecked() {
    this.nombrePost = localStorage.getItem('postsLength');
    this.posts = localStorage.getItem('posts');
    this.posts = JSON.parse(this.posts);
  }


}
