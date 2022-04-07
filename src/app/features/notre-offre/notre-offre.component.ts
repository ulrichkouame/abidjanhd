import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-notre-offre',
  templateUrl: './notre-offre.component.html',
  styleUrls: ['./notre-offre.component.scss']
})
export class NotreOffreComponent implements OnInit {

  lienvisiteVirtuelle3D!: SafeResourceUrl;
  lienvisiteVirtuelleHD!: SafeResourceUrl;
  panoramaAvantRetouche!:string;
  panoramaApresRetouche!:string;

  constructor(private sanitizer: DomSanitizer) {
    this.lienvisiteVirtuelle3D = this.sanitizer.bypassSecurityTrustResourceUrl("https://my.matterport.com/show/?m=W9ufV4AFQs6");
    this.lienvisiteVirtuelleHD = this.sanitizer.bypassSecurityTrustResourceUrl("https://webobook.com/public/61d31c5b04cc4d646862bf92,en?ap=true&si=true&sm=false&sp=true&sfr=false&sl=false&sop=false&");
  }

  ngOnInit(): void {

    this.panoramaAvantRetouche = "./assets/images/panoBefore.webp";
    this.panoramaApresRetouche = "./assets/images/panoAfter.webp";
    //comparaison

  }

}
