import { Component, OnInit } from '@angular/core';
import { CreatePostService } from '../listing-form/create-post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private get_details:CreatePostService) { }
x
  ngOnInit(): void {

    this.get_details.get_particluar_post().subscribe(data =>{
      console.log(data)
      this.x=data;
      
   
     
    })
    
  }

}
