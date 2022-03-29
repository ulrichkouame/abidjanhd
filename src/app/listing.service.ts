import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private apiURL = "https://abidjanhd.bigfive.dev/api/login";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     }),
    formData: {
      'email': 'henri@bigfiveabidjan.com',
      'password': 'bigfiveabidjan'
    }
  }
  constructor() { }
}
