import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss']
})
export class SliderHomeComponent implements OnInit {

  constructor() { }

  visite3d() {
    $('#mat-tab-label-0-0').trigger('click');
  }
  visitehd() {
    $('#mat-tab-label-0-1').trigger('click');
  }

  ngOnInit(): void {
  }

}
