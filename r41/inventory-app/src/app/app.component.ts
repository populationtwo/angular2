import {Component} from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'inventory-app-root',
  template: `
    <div class="inventory-app">
      <products-list 
        [productList]="products"
        (onProductSelected)="productWasSelected($event)">
      </products-list>
    </div>
  `
})
export class InventoryAppComponent {

  product: Product[];

  constructor() {
    this.product = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}


