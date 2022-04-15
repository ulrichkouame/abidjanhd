import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables
  apiUrl = 'https://abidjanhd.bigfive.dev/api/';
  options: any;

  /**
   * Constructor
   * @param http The http client object
   */
  constructor(private http: HttpClient) {};

   // User registration
  register(user: User): Observable<any> {
    return this.http.post(this.apiUrl+'register', user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl+'login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(this.apiUrl+'profile');
  }

  // Send mail
  sendMail(user: User) {

    this.http.post('https://formspree.io/f/mknyqbpo', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (response) => {
        console.log(response);

      },
      (error) => {
        console.log(error);

      }
    );

  }


}

