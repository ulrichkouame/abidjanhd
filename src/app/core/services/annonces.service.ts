import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Annonces interface
export class Data {
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
  image!: any;
}

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  // Variables
  apiUrl = 'https://abidjanhd.bigfive.dev/api/posts/';
  apiPostUrl = 'https://abidjanhd.bigfive.dev/api/list/post/author/';
  postItem = 'https://abidjanhd.bigfive.dev/api/post/item/';
  options: any;

  constructor(private http: HttpClient) { }

  // All annonces show
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // One annonce show
  post(id: string): Observable<any> {
    return this.http.get(this.apiUrl+id);
  }

  // Get user posts
  myposts(id: number): Observable<any> {
    return this.http.get(this.apiPostUrl+id);
  }

  // Annonce update
  update(data: Data, id: string): Observable<any> {
    return this.http.post(this.apiUrl+id, data);
  }

  // Annonde delete
  delete(id: number): Observable<any> {
    return this.http.post(this.postItem+id+'/delete', {});
  }

  // Post annonce
  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}

