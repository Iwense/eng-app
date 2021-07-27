import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PostDataService } from 'src/app/post-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  user: User = new User()
  @Input() error: string = ''

  constructor(
    private api: PostDataService,
    private routes: Router,
  ) { }

  handleRegistrationClick(submitData: User){
    console.log("Registration data = ",submitData)
    this.api.registrationUser(submitData).subscribe(
      (data) => { 
        console.log("Recieve data = ", data)
        this.routes.navigate(['sign'])
      },
      (err) => {console.log("Error | handleRegistrationClick ->  ", err)}
    )
  }

  ngOnInit(): void {
  }

}
