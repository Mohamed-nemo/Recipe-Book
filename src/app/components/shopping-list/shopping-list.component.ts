import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingListService } from './../../services/shopping-list.service';
import { IngredientModel } from './../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe( (ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
