import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  showPassword : boolean = false;


  constructor(private dataService: DataService, private router: Router){}
  showHidePassword(){
    this.showPassword = !this.showPassword
  }
  signupForm(signupData: any){
    this.dataService.saveSignUpDetails(signupData).subscribe(val => {
      console.log(val);
      this.router.navigate(['/login'])
    })
  }


}
