import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandComponent } from './components/brand/brand.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NavBlankComponent } from './layouts/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NblankComponent } from './components/nblank/nblank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { SearchPipe } from './search.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoaderComponent } from './components/components/loader/loader.component';
import { FotgetPasswordComponent } from './components/fotget-password/fotget-password.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderInterceptor } from './components/loader.interceptor';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ShippingComponent } from './components/shipping/shipping.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    CartComponent,
    BrandComponent,
    AuthLayoutComponent,
    NavBlankComponent,
    NavAuthComponent,
    NblankComponent,
    ProductDetailsComponent,
    SearchPipe,
    CategoriesComponent,
    LoaderComponent,
    FotgetPasswordComponent,
    ScrollToTopComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyhttpInterceptor, multi: true }, {
    provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
