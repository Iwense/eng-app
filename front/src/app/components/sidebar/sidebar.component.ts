import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name: string = ''
  constructor(
    private cookie: CookieService
  ) { 
    this.name = this.cookie.get('name')
  }

  ngOnInit(): void {
  }

}
