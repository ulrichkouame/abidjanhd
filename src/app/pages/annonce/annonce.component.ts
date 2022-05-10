import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  editPosition(Pos: { Lat: number; Lon: number; Name: string }) {
    this.registerForm.patchValue({
      latitude: Pos.Lat,
      longitude: Pos.Lon,
      adresse: Pos.Name
    });
  }

  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      titre: [''],
      description: [''],
      categorie: [''],
      price_min: [''],
      price_max: [''],
      lieu: [''],
      portable: [''],
      whatsapp: [''],
      website: [''],
      email: [''],
      longitude: [''],
      latitude: [''],
      lien_visite: [''],
      adresse: [''],
      image: [''],

    });
  }
  ngOnInit() {


  }
  onSubmit() {

    console.log(this.registerForm.value);
    //this.registerForm
  }

}
