import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login
  email:String
  password:String
  error:String

  
  constructor(private loginService: LoginServiceService,  private router: Router) {

    
   }

  ngOnInit(): void {

  }

  logincheck()
  {
    console.log(this.email+""+this.password)
    this.loginService.login_check(this.email,this.password).subscribe(data =>{
      console.log(data["message"])
      if(data["token"])
      {
        let key = 'Item 1';
        localStorage.setItem(key, ''+data["token"]);
        let myItem = localStorage.getItem(key);
        console.log("Retrieved from browser cache "+myItem)
        this.router.navigate(['/dashboard']);
      }
   
     
    })
  }

}
