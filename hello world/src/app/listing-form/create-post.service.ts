import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }


  create_post()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

}
