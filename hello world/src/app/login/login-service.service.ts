import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(    private http: HttpClient) { }


  login_check(email,password)
  {
    return this.http.post('https://262da9cb.ngrok.io/api/user/token/',{"email":email,"password":password});
  }
}
