import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService,private router: Router) { }
  result;
  lenp=0;
  search_query:string;
  search_query1:string


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

  load_full_post(id)
  {
    console.log(id)
    let key = 'id';
    localStorage.setItem(key, ''+id);
    this.router.navigate(['/full_post']);

  }

  search_posts()
  {
    console.log("Hi "+this.search_query)
    this.search_query1=" for "+this.search_query
    this.homeService.search(this.search_query).subscribe(data =>{
      console.log(data)
      this.result=data;
      this.lenp=this.result.length
      console.log(this.lenp)
   
     
    })
  }

}
