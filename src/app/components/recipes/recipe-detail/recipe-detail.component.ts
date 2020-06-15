import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShoppingListService } from './../../../services/shopping-list.service';
import { RecipeService } from './../../../services/recipe.service';
import { RecipeModel } from './../../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe: RecipeModel;
  isOpen: boolean = false;
  id: number;
  
  constructor(private shoppingListService:ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id)
    });
  }

  onOpen() {
    this.isOpen = !this.isOpen;
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
