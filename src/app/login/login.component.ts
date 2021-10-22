import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:LoginInfo;

  constructor(private http:HttpClient) { 
    this.loginData=new LoginInfo();
    this.loginData.UserName='Pragim';
  }

  ngOnInit(): void {
  }
  onLogIn(){
    this.loginData.UserName='Pragim@newdata';
    console.log(this.loginData);
    this.http.post<Boolean>('https://localhost:44340/api/UserApi',this.loginData).subscribe(result=>{
      if(result){
        alert('valid credentials');
      }
      else{
        alert('invalid credentials');
      }
    })
  }
}
class LoginInfo{
  UserName:string;
  PassWord:string;
}
