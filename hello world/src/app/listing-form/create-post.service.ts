import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }


  create_post(title,role,body,category,address,pincode,images,tags)
  {
    let key = 'Item 1';
    let token = localStorage.getItem(key);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Token " + token});
    let options = { headers: headers };
    return this.http.post('https://6345acbb.ngrok.io/api/posts/posts/',{"title":title,"body":body,"address":address+", " +pincode,"tags":tags,"category":category,"role":role,"images":images},options);

  }

}
