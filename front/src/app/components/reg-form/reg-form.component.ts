import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  @Input() email?: string = "";
  @Input() password?: string = "";
  @Input() name?: string = "";
  @Input() city?: string = "";
  @Input() error?:string = ''

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  reg(){
    const submitData = {
      email:this.email,
      password: this.password,
      name: this.name || "",
      city: this.city || ""
    } 
    this.clicked.emit(submitData)
    this.reset()
  }

  reset(){
    this.email = ''
    this.password = ''
    this.city = ''
    this.name = ''
    this.error = ''
  }

  ngOnInit(): void {
  }

}
