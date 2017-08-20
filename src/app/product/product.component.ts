import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: any[];
  constructor() { }

  ngOnInit() {
    this.productList = [{ id: 1, name: 'Product1', price: 1000 },
    { id: 1, name: 'Product1', price: 1000 },
    { id: 1, name: 'Product1', price: 1000 }
    ];
  }

}
