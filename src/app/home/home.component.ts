import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataa: any[] = [];
  isLoggedIn:boolean = false
  searchText = '';

  constructor(
    private dataService: DataService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const username = localStorage.getItem('userName')
    this.isLoggedIn = !!username
    this.dataService.data().subscribe((d : any) => {
      this.dataa = d.data
      console.log(this.dataa);

      this.actRoute.params.subscribe(params => {
        let searchItem = params['searchId']
        if(searchItem){
          this.dataa = this.dataa.filter((products: any) => {
            return products.name.toLowerCase().includes(searchItem.toLowerCase())
          })
        }
      })
    })
  }

  searchItem(){
    if(this.searchText){
      this.router.navigateByUrl('/search/' + this.searchText)
    }
  }

  // addToCart(id: any){
  //   this.dataService.cartProducts(id)
  // }
  addToCart(prod: any){
    console.log(prod);

    this.dataService.cartProducts(prod).subscribe(val => {
      alert(`product added to cart ${val.name}`)
    })

  }
}
