import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthServicesService } from 'src/app/servics/auth-services.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  cartId: string = '';
  msg: string = ''
  constructor(private _ActivatedRoute: ActivatedRoute, private _AuthServicesService: AuthServicesService) {
    _ActivatedRoute.paramMap.subscribe((res) => {
      this.cartId = res.get('id') || '';
    })
  }
  shippingForm: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl('')
  })
  getShippingData(data: FormGroup) {
    this._AuthServicesService.payment(this.cartId, data.value).subscribe({
      next: (res: any) => {
        console.log(res);
        this.msg = res.status;
        window.location.href = res.session.url;
      }
    });
  }
}
