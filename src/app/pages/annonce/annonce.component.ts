import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnnoncesService } from '../../core/services/annonces.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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
    public authService: AuthService,
    public annonce: AnnoncesService,
    public dialog: MatDialog,
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


  }
  onSubmit() {

    console.log(this.registerForm.value);
    //this.registerForm

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
