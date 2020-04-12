import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor( private http: HttpClient) { }

  register_user(email,name,phone,pass)
  {
    return this.http.post('https://6345acbb.ngrok.io/api/user/create/',{"email":email,"name":name,"phone_number":phone,"password":pass});
  }
}
