import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AnnoncesService } from '../../core/services/annonces.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

export interface Annonces {
  adresse: string
  author_id: number;
  categorie: string;
  category_id: number;
  created_at: string;
  description: string;
  email: string;
  featured: boolean;
  id: number;
  id_bien: number;
  image: string;
  latitude: number;
  lien_visite: string;
  lieu: string;
  longitude: number;
  meta_description: string;
  meta_keywords: string;
  portable: string;
  price_max: number;
  price_min: number;
  seo_title: string;
  slug: string;
  status: string;
  titre: string;
  updated_at: string;
  website: string;
  whatsapp: string;
}

export interface User {
  id: number,
  name: string,
  email: string,
  created_at: string,
  avatar: string,
  role_id: string,
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  displayedColumns: string[] = ['image', 'titre', 'status', 'featured', 'lieu', 'categorie', 'action'];

  annonces: Annonces[] = [];
  pagemeta: any = {};

  user_id: number = 0;

  user: User = {
    id: 0,
    avatar: "",
    created_at: "",
    email: "",
    name: "",
    role_id: "",
  }


  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    public annonceservice: AnnoncesService,
  ) {
    this.registerForm = this.fb.group({
      avatar: "",
      created_at: [''],
      email: [''],
      name: [''],
      role_id: [''],
    });
  }

  delete(id: number) {
    this.annonceservice.delete(id).subscribe(
      (response) => {
        console.log(response);
        if (response.message_succes == "Succès") {
          this.userAnnonces(this.user_id);
        }
      },
      (error) => {
        this.errors = error.error;
      }
    );

  }

  //Recupertation des annonces de user
  userAnnonces(id: number) {

    this.annonceservice.myposts(id).subscribe(
      (response) => {
        this.annonces = response.data;
      }
    );
  }

  ngOnInit() {
    this.authService.profileUser().subscribe(
      (result) => {
        this.user = result.data;
        this.user_id = this.user.id;

        this.userAnnonces(this.user_id);

      },
      (error) => {
        this.errors = error.error;
      }
    );
  }

  alertConfirmation(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Ce processus est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, vas y.',
      cancelButtonText: 'Non, laisse-moi réfléchir',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Supprimé !', 'Annonce supprimée avec succès.', 'success');
        this.delete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Annonce toujours dans notre base de données.)', 'error');
      }
    });
  }

}
