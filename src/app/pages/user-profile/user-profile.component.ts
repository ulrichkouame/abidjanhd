import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: any;
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

  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }
  ngOnInit() {
    this.authService.profileUser().subscribe(
      (result) => {

        console.log(result);


      },
      (error) => {
        console.log(error);

      },
      /*() => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['profile']);
      }*/
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
