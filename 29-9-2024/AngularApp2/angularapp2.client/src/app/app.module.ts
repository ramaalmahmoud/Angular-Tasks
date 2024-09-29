import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    ServiceDetailsComponent,
   
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "service", component: ServicesComponent, pathMatch: "full" },
      { path: "subservices/:id", component: SubServicesComponent, },
      { path: "servicedetails/:id", component: ServiceDetailsComponent, },

    


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
