import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() email?: string = "";
  @Input() password?: string = "";
  @Input() error?:string = ''

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  enter(){
    const submitData = {
      email:this.email,
      password: this.password
    } 
    this.clicked.emit(submitData)
  }

  ngOnInit(): void {
    
  }

}
