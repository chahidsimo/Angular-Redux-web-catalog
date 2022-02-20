import {Injectable} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction,
  GetSelectedProductsErrorAction, GetSelectedProductsSuccessAction, ProductsActions,
  ProductsActionsTypes, SearchedProductsActionError, SearchedProductsActionSuccess
} from "./products.actions";

@Injectable()
export class ProductsEffects {
  constructor(private productService:ProductsService, private effectActions:Actions) {
  }

  getAllProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getAllProducts()
          .pipe(
            map((products)=> new GetAllProductsSuccessAction(products)),
            catchError((err)=>of(new GetAllProductsErrorAction(err.message)))
          )
      })
    )
  );

  /* Get Selected Products*/
  getSelectedProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getSelectedProducts()
          .pipe(
            map((products)=> new GetSelectedProductsSuccessAction(products)),
            catchError((err)=>of(new GetSelectedProductsErrorAction(err.message)))
          )
      })
    )
  );

  /* Get Searched Products*/
  getSearchedProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SEARCH_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((products)=> new SearchedProductsActionSuccess(products)),
            catchError((err)=>of(new SearchedProductsActionError(err.message)))
          )
      })
    )
  );

}
