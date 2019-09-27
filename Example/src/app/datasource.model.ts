import {Product} from "./product.model";

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "İphone 7", "Mükemmel", "1.jpg", 3500),
      new Product(2, "İphone 8", "Mükemmel", "2.jpg", 6000),
      new Product(3, "İphone X", "Mükemmel", "3.jpg", 8000),
      new Product(4, "İphone Xs", "Mükemmel", "4.jpg", 9000),
      new Product(5, "İphone Xr", "Mükemmel", "5.jpg", 10000)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
