import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:ProductModel[] | any;

  imageWidth: number =50;
  imageMargin: number =2;

  constructor (public productservice: ProductService){}
  ngOnInit() : void
{
  this.productservice.getProducts().subscribe((data) =>
  {
    console.log(data);
    this.products=JSON.parse(JSON.stringify(data));

  })
}
}
