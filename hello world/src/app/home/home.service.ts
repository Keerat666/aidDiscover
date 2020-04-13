import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  get_all()
  {
    return this.http.get('https://262da9cb.ngrok.io/api/posts/all/');
  }

  search(x)
  {
    return this.http.get('https://262da9cb.ngrok.io/api/posts/search/'+x);
  }
}
