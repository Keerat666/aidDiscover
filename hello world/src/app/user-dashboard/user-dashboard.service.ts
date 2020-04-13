import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private http: HttpClient) { }

  generate_post()
  {
    let key = 'Item 1';
    let token = localStorage.getItem(key);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Token " + token});
    let options = { headers: headers };
    return this.http.get('https://262da9cb.ngrok.io/api/posts/posts/',options);
  }
}

