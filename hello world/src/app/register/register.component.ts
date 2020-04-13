import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from './register-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register
  email:String;name:String;phone:String;password:String
  status:String
  constructor( private registerService: RegisterServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  register_user()
  {
    this.register=""

    this.registerService.register_user(this.email,this.name,this.phone,this.password).subscribe(data =>{
      console.log(data["name"])

      if(data["name"])
      {
        this.register="Registration was a success "+data["name"]+" ! Please login to continue :)"
        alert(this.register)
        this.router.navigate(['/login']);

      }
    });
  }

}
