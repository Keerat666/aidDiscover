import { Component, OnInit } from '@angular/core';
import {CreatePostService} from './create-post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {
  response
  title:String
  body:String
  role:String
  category:String
  address:String
  pincode:String
  images:String
  tags:String

  constructor(private createPost : CreatePostService, private router: Router) {  }

  ngOnInit(): void {
  }

  create_post()
  {
    this.createPost.create_post(this.title,this.role,this.body,this.category,this.address,this.pincode,this.images,this.tags).subscribe(data=>
      {
        console.log(data)
        this.response=data
        this.router.navigate(['/dashboard']);
      
      });
      
  }

}
