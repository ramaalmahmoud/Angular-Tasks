import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  ngOnInit() {

  }
  

  constructor(private _ser: UrlService, private _router: Router) { }
  
  image: any
  changeImage(event: any) {
    
    debugger
    this.image = event.target.files[0]

  }


  addNewService(data: any) {
    debugger
    var form = new FormData();
    for (let key in data) {
      form.append(key,data[key])
    }
    form.append("Image", this.image);
    this._ser.addNewService(form).subscribe(() => {
      alert("services added succesfully")
    },
     (error) => {
        alert(error.error)
      })
  }

}
