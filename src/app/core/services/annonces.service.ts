import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Annonces interface
export class Data {
  title!: string;
  body!: string;
  categorie!: string;
  price_min!: string;
  price_max!: string;
  lieu!: string;
  telephone!: string;
  whatsapp!: string;
  website!: string;
  email!: string;
  longitude!: string;
  latitude!: string;
  url_vr!: string;
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
  update(data: Data, id: string, file: File): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('image', file);
    formData.append('title', data.title);
    formData.append('body', data.body);
    formData.append('categorie', data.categorie);
    formData.append('price_min', data.price_min);
    formData.append('price_max', data.price_max);
    formData.append('lieu', data.lieu);
    formData.append('telephone', data.telephone);
    formData.append('whatsapp', data.whatsapp);
    formData.append('website', data.website);
    formData.append('email', data.email);
    formData.append('longitude', data.longitude);
    formData.append('latitude', data.latitude);
    formData.append('url_vr', data.url_vr);
    formData.append('adresse', data.adresse);

    return this.http.post(this.apiUrl+id, formData);
  }

  // Annonde delete
  delete(id: number): Observable<any> {
    return this.http.post(this.postItem+id+'/delete', {});
  }

  // Post annonce
  create(data: any, file: File): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('image', file);
    formData.append('title', data.title);
    formData.append('body', data.body);
    formData.append('categorie', data.categorie);
    formData.append('price_min', data.price_min);
    formData.append('price_max', data.price_max);
    formData.append('lieu', data.lieu);
    formData.append('telephone', data.telephone);
    formData.append('whatsapp', data.whatsapp);
    formData.append('website', data.website);
    formData.append('email', data.email);
    formData.append('longitude', data.longitude);
    formData.append('latitude', data.latitude);
    formData.append('url_vr', data.url_vr);
    formData.append('adresse', data.adresse);
    formData.append('status', "PUBLIER");

    return this.http.post(this.apiUrl, formData);
  }

}

