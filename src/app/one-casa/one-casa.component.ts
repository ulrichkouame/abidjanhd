import { Component, OnInit, ViewEncapsulation, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-one-casa',
  templateUrl: './one-casa.component.html',
  styleUrls: ['./one-casa.component.scss']
})

export class OneCasaComponent implements OnInit {
  public layerType: string = '';
  hddata: any;
  posts:any = localStorage.getItem('posts');

  //embedUrl: string = '<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=5.295799408188004,-3.9972884&hl=es&z=14&amp;output=embed"></iframe>';
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
