import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PostDataService } from 'src/app/post-data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: User = new User()
  error:string | undefined = ''
  
  constructor(private routes: Router,
    private api: PostDataService,
    private cookie: CookieService) {
   }

   handleEnterClick(submitData:User){
     console.log("submitData = ", submitData)
    if(submitData.email && submitData.password){
        this.api.loginUser(submitData.email, submitData.password)
              .subscribe((data: any) => {
                console.log("data = " , data)
                this.cookie.set('token' , data?.token)
                this.cookie.set('email', data.email)
                this.cookie.set('name', data.name)
                this.error = ''
                this.routes.navigate(['home'])
              },
                (err) => {
                  console.log("Error = " , err)
                  this.error = err?.error?.message
              })
    }
  }
  ngOnInit(): void {
  }

}
