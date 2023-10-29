import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit{

  myproducts: any = []

  constructor(private service : DataService){}

  ngOnInit(): void {
    this.getItems()
  }

  getItems(){
    this.service.getMyProducts().subscribe((val:any) => {
      this.myproducts = val.myproducts
      console.log(this.myproducts)
    })
  }

  remove(item: any){
    this.service.removeMyProduct(item._id).subscribe((val) => {
      console.log(val);
      this.getItems()
    })
  }


}
