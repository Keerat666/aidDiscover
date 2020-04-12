import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(    private http: HttpClient) { }


  login_check()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
