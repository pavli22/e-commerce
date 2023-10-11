import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/servics/auth-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading: boolean = false;
  errorMSG: string = '';
  constructor(private _Router: Router, private _AuthServicesService: AuthServicesService) { }

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-zA-z0-9]{5,15}$')]),
  })

  getLogedData(data: FormGroup) {
    this.isLoading = true;
    if (data.valid) {
      this._AuthServicesService.login(data.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          if (res.message === 'success') {
            this._Router.navigate(['/home']);
            localStorage.setItem('userToken', res.token);
          }
        },
        error: (err) => {
          console.log(err);
          this.errorMSG = err.error.message
          this.isLoading = false;
        }
      })
    }
  }
}
