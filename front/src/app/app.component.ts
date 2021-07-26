import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(router: Router,
    private cookie: CookieService){
    
    const token = this.cookie.get('token')
    if (token){
      router.navigate(['/workbook'])
    }else{
      router.navigate(['/sign'])
    }
  }
}