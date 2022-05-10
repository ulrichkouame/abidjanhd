import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
  avatar!: String;
  role_id!: Number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Variables
  apiUrl = 'https://abidjanhd.bigfive.dev/api/users/';
  options: any;

  constructor(private http: HttpClient) { }

  // User show
  show(id: number): Observable<any> {
    return this.http.get(this.apiUrl+id);
  }

  // User update
  update(user: User, id: number): Observable<any> {
    return this.http.post(this.apiUrl+id, user);
  }

}
