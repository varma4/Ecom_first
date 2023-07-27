import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  details : string = ""
  showPassword: boolean = false

  constructor(private dataService: DataService, private router: Router){}
  showHidePassword(){
    this.showPassword = !this.showPassword
  }

  loginDetails(loginData: any){
    this.dataService.saveLoginDetails(loginData).subscribe((res: any) => {
      this.details = res.userName
      const id = res.id
      console.log(id);

      console.log(res.id);

      localStorage.setItem("Token", res.token)
      localStorage.setItem("userName", res.userName)
      localStorage.setItem("id", res['id'])
      this.router.navigate(['/'])
    })
  }
}
