import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from './user-dashboard.service';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userDashboard: UserDashboardService) { }
  response

  ngOnInit(): void {
    this.load_posts()
  }

  load_posts()
  {
    this.userDashboard.generate_post().subscribe(data=>{

      this.response = data
      console.log(this.response)


    });

   
  }

}
