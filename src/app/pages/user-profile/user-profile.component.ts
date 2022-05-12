import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AnnoncesService } from '../../core/services/annonces.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  ngOnInit() {
    this.authService.profileUser().subscribe(
      (result) => {
        this.user = result.data;
        const user_id = this.user.id;

        //Recupertation des annonces de user
        this.annonceservice.myposts(user_id).subscribe(
          (response) => {
            this.annonces = response.data;
          }
        );

      },
      (error) => {
        this.errors = error.error;
      }
    );
  }

}
