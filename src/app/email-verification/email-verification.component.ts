import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit{
  constructor(private route: ActivatedRoute, private DataService: DataService) {}

  ngOnInit():void {
    this.route.params.subscribe((params) => {
      const userId = params['userId']
      console.log(userId);

      if(userId){
        this.DataService.verifyEmail(userId).subscribe(res => console.log(res),err =>{console.log(err);
        }
        )
      }
    })
  }
}
