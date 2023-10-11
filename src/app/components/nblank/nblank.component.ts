import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/servics/auth-services.service';
import { CratServiceService } from 'src/app/servics/crat-service.service';


@Component({
  selector: 'app-nblank',
  templateUrl: './nblank.component.html',
  styleUrls: ['./nblank.component.scss']
})
export class NblankComponent implements OnInit {
  constructor(private _AuthServicesService: AuthServicesService, private _CratServiceService: CratServiceService) {
  }
  cartCount: number = 0;
  ngOnInit(): void {
    this.cartCount = this._CratServiceService.cartNumber.getValue();
    this._CratServiceService.cartNumber.subscribe({
      next: (res) => {
        this.cartCount = res;
      }
    })
  }

  logOut() {
    this._AuthServicesService.logOut()
  }
}
