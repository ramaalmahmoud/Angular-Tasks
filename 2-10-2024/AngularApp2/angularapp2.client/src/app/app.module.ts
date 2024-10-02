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
import { TestComponent } from './test/test.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubsicriptionComponent } from './subsicription/subsicription.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    ServiceDetailsComponent,
    TestComponent,
    SubsicriptionComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddServiceComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "service", component: ServicesComponent, pathMatch: "full" },
      { path: "subservices/:id", component: SubServicesComponent, },
      { path: "servicedetails/:id", component: ServiceDetailsComponent, },
      { path: "test", component: TestComponent, },
      { path: "subsicription", component: SubsicriptionComponent, },
      { path: "register", component: RegisterComponent, },
      { path: "login", component: LoginComponent },

      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "addServices", component: AddServiceComponent, }
      ] }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
