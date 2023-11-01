import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  dataa: any[] = [];
  singleProduct: any;
  constructor(
    private dataService: DataService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.dataService.data().subscribe((val) => {
      this.dataa = val.data
      // console.log(this.dataa);

      this.actRoute.params.subscribe((params) => {
        let id = params['id']
        // console.log(id);

        this.singleProduct =this.dataa.find(product =>{
          return product._id == id
        })
        // console.log(this.singleProduct);

      })

    })
  }
}
