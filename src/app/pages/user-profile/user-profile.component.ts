import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AnnoncesService } from '../../core/services/annonces.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: any;
}

export interface User {
  name: string,
  email: string,
  created_at: string,
  avatar: string,
  role_id: string,
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action:''},
];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;

  user: User = {
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
    public annonces: AnnoncesService,
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

        this.registerForm.patchValue({
          longitude: 123,
          // formControlName2: myValue2 (can be omitted)
        });

        //Recupertation des annonces
        this.annonces.getAll().subscribe(
          (result) => {
            console.log(result);

          },
          (error) => {
            this.errors = error.error;
          }

        );

      },
      (error) => {
        this.errors = error.error;
      }
    );
  }
  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );
  }

}
