import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  user: User = new User()
  
  constructor() { }

  reg(){
    //TODO: click registartion
  }

  ngOnInit(): void {
  }

}
