import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnoncesService } from '../../core/services/annonces.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  isAdd: boolean = true;
  isCaptchaValide: boolean = false;
  annonce_id: string = '';
  file!: File; // Variable to store file
  data!: any;

  editPosition(Pos: { Lat: number; Lon: number; Name: string }) {
    this.registerForm.patchValue({
      latitude: Pos.Lat,
      longitude: Pos.Lon,
      adresse: Pos.Name
    });
  }
  imgLink(image: File) {
    this.file = image;
  }

  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    public annonce: AnnoncesService,
    private location: Location,
  ) {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      categorie: ['', Validators.required],
      price_min: ['', Validators.required],
      price_max: ['', Validators.required],
      lieu: ['', Validators.required],
      telephone: ['', Validators.required],
      whatsapp: ['', Validators.required],
      website: ['', Validators.required],
      email: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      url_vr: ['', Validators.required],
      adresse: ['', Validators.required],
      image: [File],
      status: ['EN ATTENTE'],
      recaptcha: ['', Validators.required]
    });
  }

  public addAnnonce() {

    //Recupertation des annonces
    this.annonce.create(this.registerForm.value, this.file).subscribe(
      (result) => {
        this.successNotificationAdd()
      },
      (error) => {
        this.errors = error.error;
      }

    );
  }

  public editAnnonce() {
    //Recupertation des annonces
    this.annonce.update(this.registerForm.value, this.annonce_id, this.file).subscribe(
      (result) => {
        this.successNotificationUpdate();
      },
      (error) => {
        this.errors = error.error;
      }

    );
  }

  ngOnInit() {
    //get url path
    const urlpath = this.location.path();
    if (urlpath.includes("edit")) {

      this.annonce_id = urlpath.substring(urlpath.lastIndexOf("/")+1);

      if (this.annonce_id != '') {
        this.isAdd = false;
        //Recupertation des informations de l'annonce
        this.annonce.post(this.annonce_id).subscribe(
          (result) => {

            const data = result.data;
            this.data = result.data;

            this.registerForm.patchValue({
              title: data.title,
              body: data.body,
              categorie: data.categorie,
              price_min: data.price_min,
              price_max: data.price_max,
              lieu: data.lieu,
              telephone: data.telephone,
              whatsapp: data.whatsapp,
              website: data.website,
              email: data.email,
              longitude: data.longitude,
              latitude: data.latitude,
              url_vr: data.url_vr,
              adresse: data.adresse,
              image: data.image,
              status: data.status,
            });
          },
          (error) => {
            this.errors = error.error;
          }

        );
      }
    }

  }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    if (this.isAdd == true) {
      this.addAnnonce();
    }
    if (this.isAdd == false) {
      this.editAnnonce
    }
  }

  successNotificationUpdate() {
    Swal.fire('Mise à jour annonce', 'Votre annonce a été mise à jour avec succès.', 'success').then((result) => {
      //this.router.navigate(['/profile']);
    });
  }
  successNotificationAdd() {
    Swal.fire('Annonce', 'Votre annonce a été ajouté avec succès.', 'success').then((result) => {
      //this.router.navigate(['/profile']);
    });
  }

  resolved(captchaResponse: string) {
    if (captchaResponse != null) {
      this.registerForm.patchValue({
        recaptcha: captchaResponse,
      });
    }
  }

}

