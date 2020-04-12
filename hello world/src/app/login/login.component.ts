import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login
  constructor(    private loginService: LoginServiceService,) { }

  ngOnInit(): void {

  }

  logincheck()
  {
    this.loginService.login_check().subscribe(data =>{
      console.log(data)
      this.login=data
    });
  }

}
