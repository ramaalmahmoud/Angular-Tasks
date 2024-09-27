import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    StickyHeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "product", component: ProductComponent },
      { path: "About Us", component: AboutUsComponent },
      { path: "Contact Us", component: ContactUsComponent }


    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
