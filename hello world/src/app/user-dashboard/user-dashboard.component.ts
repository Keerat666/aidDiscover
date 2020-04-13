import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from './user-dashboard.service';
import { CreatePostService } from '../listing-form/create-post.service';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userDashboard: UserDashboardService,private userDetails: CreatePostService) { }
  response
  user_name

  ngOnInit(): void {
    this.load_posts()
  }

  load_posts()
  {
    this.userDashboard.generate_post().subscribe(data=>{

      this.response = data
      console.log(this.response)


    });

    this.userDetails.get_user_details().subscribe(data=>{

      this.user_name = data
      console.log(this.response)


    });

   
  }

}
