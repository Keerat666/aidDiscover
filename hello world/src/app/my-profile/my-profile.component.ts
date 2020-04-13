import { Component, OnInit } from '@angular/core';
import { CreatePostService } from '../listing-form/create-post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private createPost : CreatePostService,private router: Router) { }
  response;
  ngOnInit(): void {

    this.createPost.get_user_details().subscribe(data=>
      {
        console.log(data)
        this.response=data
      
      });
      
  }

  logout()
  {
    localStorage.setItem("Item 1", ''+"");

    this.router.navigate(['/home']);

  }

}
