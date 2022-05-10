import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Annonces interface
export class User {
  titre!: string;
  description!: string;
  categorie!: string;
  price_min!: number;
  price_max!: number;
  lieu!: string;
  portable!: string;
  whatsapp!: string;
  website!: string;
  email!: string;
  longitude!: number;
  latitude!: number;
  lien_visite!: string;
  adresse!: string;
  image!: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  // Variables
  apiUrl = 'https://abidjanhd.bigfive.dev/api/posts';
  options: any;

  constructor(private http: HttpClient) { }

  // User show
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // User update
  update(user: User, id: number): Observable<any> {
    return this.http.post(this.apiUrl+id, user);
  }

}

