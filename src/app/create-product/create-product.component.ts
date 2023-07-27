import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(private dataService: DataService){}
  title = "Upload your product"
  getFormDetails(data: any){
    data.images = data.images.split(',')
    this.dataService.saveProduct(data).subscribe((result) => {
      console.log(result);
    })
  }
}
