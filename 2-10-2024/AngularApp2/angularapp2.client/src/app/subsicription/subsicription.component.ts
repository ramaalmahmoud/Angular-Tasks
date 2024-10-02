import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-subsicription',
  templateUrl: './subsicription.component.html',
  styleUrl: './subsicription.component.css'
})
export class SubsicriptionComponent {
  ngOnInit() {
    this.getSubsicription();
   
  }

  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }

  subsicriptionArray: any
  getSubsicription() {
    this._ser.getsubsicription().subscribe((data) => {
      this.subsicriptionArray = data;
    })
  }
   data = {
  "userId": 3,
  "subsicriotionID": 0,
  "subServiceId": 2
  }

  addUserSubsicription(id: any) {
    this.data.subsicriotionID = id;
    
    this._ser.addUserSubsicription(this.data).subscribe(() => {
      debugger

      setTimeout(() => {
        debugger
        alert("batool")
      }, 1000);


    })
  }

}
