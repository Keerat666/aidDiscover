import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService,) { }
  result;
  lenp=0;
  ngOnInit(): void {
    this.load_all_posts()
  }

  load_all_posts()
  {
    this.homeService.get_all().subscribe(data =>{
      console.log(data)
      this.result=data;
      this.lenp=this.result.length
      console.log(this.lenp)
   
     
    })
  }

}
