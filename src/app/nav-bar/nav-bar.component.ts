import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  uName!:string| null
  constructor(private router: Router, private dataService : DataService){}
  ngOnInit(): void {
    const userName = localStorage.getItem('userName')
    console.log(userName);
    this.uName = userName
  }
  



  logOut(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
