import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {
  parameter:any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get('id');
    this.getSubService(this.parameter);
  }

  constructor(private _ser: UrlService, private _route: ActivatedRoute) {

  }
  subServicesData:any
  getSubService(id:any) {
    this._ser.getsubServices(id).subscribe((data) => {
      this.subServicesData = data;
      console.log(this.subServicesData);
    })
  }
}
