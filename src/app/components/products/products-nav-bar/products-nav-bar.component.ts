import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetSelectedProductsAction, SearchedProductsAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))

  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchedProductsAction(dataForm.keyword));

  }
}
