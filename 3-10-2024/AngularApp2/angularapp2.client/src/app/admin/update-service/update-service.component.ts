import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';
import { mapOneOrManyArgs } from 'rxjs/internal/util/mapOneOrManyArgs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent {

  param:any
  ngOnInit() {
    this.param = this._active.snapshot.paramMap.get('id');
  }

  constructor(private _ser: UrlService, private _active: ActivatedRoute) { }
  image:any
  updateImage(event: any) {
    
this.image=event.target.files[0]
  }
  UpdateServic(data: any) {
    
    var form = new FormData();
    for (let key in data) {
      form.append(key,data[key])
    }
    form.append("Image",this.image)
    this._ser.UpdateServic(this.param, form).subscribe((data) => {
      
      alert("services update succsefully")
    })
  }
}
