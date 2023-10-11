import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandComponent } from './components/brand/brand.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NavBlankComponent } from './layouts/nav-blank/nav-blank.component';
import { authGuard } from './guard/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FotgetPasswordComponent } from './components/fotget-password/fotget-password.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'forgotPass', component: FotgetPasswordComponent, title: 'forgot-Pass' },
    ]
  },
  {
    path: '', component: NavBlankComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', canActivate: [authGuard], component: HomeComponent, title: 'Home' },
      { path: 'product', canActivate: [authGuard], component: ProductComponent, title: 'Product' },
      { path: 'categories', canActivate: [authGuard], component: CategoriesComponent, title: 'Categories' },
      { path: 'wish-list', canActivate: [authGuard], component: WishlistComponent, title: 'Wish-List' },
      { path: 'cart', canActivate: [authGuard], component: CartComponent, title: 'Cart' },
      { path: 'brand', canActivate: [authGuard], component: BrandComponent, title: 'Brands' },
      { path: 'forgotPass', canActivate: [authGuard], component: FotgetPasswordComponent, title: 'forgot-Pass' },
      { path: 'shipping/:id', canActivate: [authGuard], component: ShippingComponent, title: 'Payment' },
      { path: 'product-Details/:id', canActivate: [authGuard], component: ProductDetailsComponent, title: 'product-Details' },
    ]
  },

  { path: '**', component: NotfoundComponent, title: 'Not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
