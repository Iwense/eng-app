import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http:HttpClient,
              private cookie: CookieService) {

  }

  registrationUser(payload: User){
    const url =  'http://localhost:5000/auth/registration'
    return this.http.post(url, payload)
  }

  loginUser(email:string, password: string){
    const url = 'http://localhost:5000/auth/login'
    const data = {
      email,
      password
    }
    return this.http.post(url,data)
  }

  getTranslateWord(word: string) {
    const url = `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}&pageSize=1`
    return this.http.get(url)
  }
}
