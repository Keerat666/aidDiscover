import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from './register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register
  constructor( private registerService: RegisterServiceService) { }

  ngOnInit(): void {
  }

  register_user()
  {
    this.registerService.register_user("gurkeeratsondhi@gmail.com","Keerat","9566214296","Popping_Pills").subscribe(data =>{
      console.log(data)
      this.register=data
    });
  }

}
