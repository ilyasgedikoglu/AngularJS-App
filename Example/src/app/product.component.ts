import {Component} from '@angular/core';
import {ProductRepository} from "./repository.model";

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();
  disabled: true;

  getClasses(id:number): string {
    let product = this.model.getProductById(id);
    return (product.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2";
  }

  getClassMap(id: number): Object {
    let product = this.model.getProductById(id);
    return {
      "bg-info": product.price <= 1000,
      "bg-secondary": product.price > 1000,
      "text-center text-white": product.name === "İphone 7"
    }
  }

  color: string = this.model.getProductById(1).price <= 1000 ? "red" : "green";
  fontSize: string = "25px";

  getStyles(id: number) {
    let product = this.model.getProductById(id);
    return {
      fontsize: "25px",
      color: product.price <= 1000 ? "green" : "red"
    }
  }
}
