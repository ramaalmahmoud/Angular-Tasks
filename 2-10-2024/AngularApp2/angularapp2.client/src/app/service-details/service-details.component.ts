import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  parameter: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get('id');
    this.getServiceDetails(this.parameter);
  }

  constructor(private _ser: UrlService, private _route: ActivatedRoute) {

  }
  serviceDetails: any
  getServiceDetails(id: any) {
    this._ser.getsubServiceById(id).subscribe((data) => {
      this.serviceDetails = data;
      console.log(this.serviceDetails);
    })
  }
}
