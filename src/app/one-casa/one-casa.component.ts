import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-casa',
  templateUrl: './one-casa.component.html',
  styleUrls: ['./one-casa.component.scss']
})

export class OneCasaComponent implements OnInit {
  public layerType: string = '';
  hddata: any;
  posts:any = localStorage.getItem('posts');

  embedUrl: string = 'https://maps.google.com/maps?q=5.295799408188004,-3.9972884&hl=es&z=14';

  constructor(private route: ActivatedRoute) { }

  getPostData(id: number) {
    this.posts = JSON.parse(this.posts);

    for (let i = 0; i < this.posts.length; i++) {

      if (this.posts[i]?.id == id) {
        this.hddata = this.posts[i]
      }
    }

  }

  ngOnInit(): void {
    const id:any = this.route.snapshot.paramMap.get('id');
    this.getPostData(id);
    this.embedUrl = "https://maps.google.com/maps?q="+this.hddata.latitude+","+this.hddata.longitude+"&hl=es&z=14";
  }

}
