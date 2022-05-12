import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnnoncesService } from '../../core/services/annonces.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  isAdd: boolean = true;
  annonce_id: string = '';

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
    public authService: AuthService,
    public annonce: AnnoncesService,
    public dialog: MatDialog,
    private location: Location,
  ) {
    this.registerForm = this.fb.group({
      title: [''],
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
      status: ['EN ATTENTE'],

    });
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

            this.registerForm.patchValue({
              title: data.title,
              description: data.description,
              categorie: data.categorie,
              price_min: data.price_min,
              price_max: data.price_max,
              lieu: data.lieu,
              portable: data.portable,
              whatsapp: data.whatsapp,
              website: data.website,
              email: data.email,
              longitude: data.longitude,
              latitude: data.latitude,
              lien_visite: data.lien_visite,
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

    console.log(this.registerForm.value);

    if (this.isAdd) {
      this.addAnnonce();
    } else {
      this.editAnnonce
    }
  }

  addAnnonce() {
console.log("addAnnonce");

    //Recupertation des annonces
    this.annonce.create(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialog.open(DialogueAnnonceAjouter);
      },
      (error) => {
        this.errors = error.error;
      }

    );
  }

  editAnnonce() {
    console.log("eddAnnonce");
    //Recupertation des annonces
    this.annonce.update(this.registerForm.value, this.annonce_id).subscribe(
      (result) => {
        console.log(result);

        this.dialog.open(DialogueAnnonceAjouter);
      },
      (error) => {
        this.errors = error.error;
      }

    );
  }

}

@Component({
  selector: 'annonce-ajouter',
  templateUrl: 'annonce-ajouter.html',
})
export class DialogueAnnonceAjouter {

  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<DialogueAnnonceAjouter>,
  ) { }

  returnHome(): void {
    this.dialogRef.close();
    this.router.navigate(['/profile']);
  }
}
