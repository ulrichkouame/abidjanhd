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

  editPosition(Pos: { Lat: number; Lon: number }) {
    this.registerForm.patchValue({
      latitude: Pos.Lat,
      longitude: Pos.Lon
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
      file: [''],

    });
  }
  ngOnInit() {}
  onSubmit() {
    /*this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );*/
    this.registerForm.patchValue({
      longitude: 123,
      // formControlName2: myValue2 (can be omitted)
    });
    console.log(this.registerForm.value);
    this.registerForm
  }

}
