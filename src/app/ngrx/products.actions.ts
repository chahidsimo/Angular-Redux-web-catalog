import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsTypes{
  //Get All products
  GET_ALL_PRODUCTS="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

  //Get Selected products
  GET_SELECTED_PRODUCTS="[Products] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",


  //Search
  GET_SEARCH_PRODUCTS="[Products] Get Searched products",
  GET_SEARCH_PRODUCTS_SUCCESS="[Products] Get Searched products Success",
  GET_SEARCH_PRODUCTS_ERROR="[Products] Get Searched products Error",


  //Create products
  NEW_PRODUCTS="[Products] Create products",
  NEW_PRODUCTS_SUCCESS="[Products] Create products Success",
  NEW_PRODUCTS_ERROR="[Products] Create products Error",
}
export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAllProductsSuccessAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsErrorAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

//Selected Products

export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetSelectedProductsSuccessAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}
export class GetSelectedProductsErrorAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

//Searched Products
export class SearchedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SEARCH_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class SearchedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}
export class SearchedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

export type ProductsActions=
  GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction
  | GetSelectedProductsAction | GetSelectedProductsSuccessAction| GetSelectedProductsErrorAction
  | SearchedProductsAction | SearchedProductsActionSuccess| SearchedProductsActionError;
