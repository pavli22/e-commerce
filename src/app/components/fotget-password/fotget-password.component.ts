import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordService } from 'src/app/servics/forgot-password.service';


@Component({
  selector: 'app-fotget-password',
  templateUrl: './fotget-password.component.html',
  styleUrls: ['./fotget-password.component.scss']
})
export class FotgetPasswordComponent {
  constructor(private _ForgotPasswordService: ForgotPasswordService, private _ToastrService: ToastrService, private _Router: Router) { }

  userEmail: string = '';
  Msg: string = ''

  step1: boolean = true
  step2: boolean = false
  step3: boolean = false


  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })
  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  })
  resetPassword: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-zA-z0-9]{5,15}$')]),
  })


  getForgetPass() {
    const Data = this.forgotPasswordForm.value;
    this.userEmail = Data.email;
    this._ForgotPasswordService.forgotPassword(Data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.step1 = false;
        this.step2 = true;
        this._ToastrService.info(res.message);

      },
      error: (err: any) => {
        this.Msg = err.message
      }
    })
  }

  getVerifiedCode() {
    const Data = this.verifyCodeForm.value;
    this._ForgotPasswordService.verifyRestPassword(Data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.step2 = false;
        this.step3 = true;
        this._ToastrService.info(res.message);

      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  getRestPassword() {
    const Data = this.resetPassword.value;
    Data.email = this.userEmail;
    this._ForgotPasswordService.restPassword(Data).subscribe({
      next: (res: any) => {
        console.log(res);
        this._ToastrService.success(res.message);
        setTimeout(() => {
          this._Router.navigate(['/home']);
        }, 1000);

      }
    })
  }




}
