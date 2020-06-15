import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IngredientModel } from './../../../models/ingredient.model';
import { ShoppingListService } from './../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscribtion: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: IngredientModel;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscribtion = this.shoppingListService.startedEditing.subscribe( (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }
  
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if( this.editMode ) this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    else this.shoppingListService.addIngredient(newIngredient);
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
