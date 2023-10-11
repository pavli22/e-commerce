import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/servics/auth-services.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isLoading: boolean = false;
  errorMSG: string = '';
  constructor(private _Router: Router, private _AuthServicesService: AuthServicesService) { }

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-zA-z0-9]{5,15}$')]),
    rePassword: new FormControl(null),
    phone: new FormControl(null, [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]),
  }, { validators: [this.rePassConfirm] } as FormControlOptions)

  rePassConfirm(data: FormGroup) {
    const pass = data.get('password');
    const rePass = data.get('rePassword');
    if (rePass?.value === '') {
      rePass?.setErrors({ required: true })
    }
    else if (rePass?.value !== pass?.value) {
      rePass?.setErrors({
        missmatch: true,
      })
    }

  }

  getRegisterData(data: FormGroup) {
    this.isLoading = true;
    if (data.valid) {
      this._AuthServicesService.register(data.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          if (res.message === 'success') {
            this._Router.navigate(['/login'])

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
