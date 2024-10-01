import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  ngOnInit(){

  }
  constructor(private _ser: UrlService, private _router: Router) { }

  regiisterUser(data: any) {
    
    var form = new FormData();
    for (let key in data) {
      form.append(key,data[key])
    }
    this._ser.regiisterUser(form).subscribe(() => {
      alert("user registerd sucssefully")
      this._router.navigate(["/login"]);

    },
      (error) => {
        alert(error.error)
      }
    )
  }


}
