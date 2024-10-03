import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-get-services-asadmin',
  templateUrl: './get-services-asadmin.component.html',
  styleUrl: './get-services-asadmin.component.css'
})
export class GetServicesASAdminComponent {
  ngOnInit() {
    this.getAllServicesAdmin()
  }

  constructor(private _ser: UrlService) { }
  array:any
  getAllServicesAdmin() {
    this._ser.getServices().subscribe((data) => {
      this.array = data;
      console.log(this.array)
    })
  }
}
