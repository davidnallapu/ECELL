import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthResponseData, AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;

  loginForm= new FormGroup({
    'email': new FormControl(),
    'password': new FormControl(),
  })
  constructor(private authService: AuthServiceService, private router: Router) { }
  loggedin(form: NgForm){
    if (!form.valid) {
        return;
      }
      const email = form.value.email;
      const password = form.value.password;
  
      let authObs: Observable<AuthResponseData>;
  

   authObs= this.authService.login(email,password)
authObs.subscribe(
    resData=>{
        console.log(resData);
    this.router.navigate(['/admin-ecell-snu']);
    }
);


}




  ngOnInit() {
  }

}
