import { Subject } from 'rxjs';

import { IngredientModel } from './../models/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<IngredientModel[]>();
    startedEditing = new Subject<number>();
    private ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 5),
        new IngredientModel('Tomatoes', 10)
    ];

    getIngredient(index: number): IngredientModel {
        return this.ingredients[index];
    }

    addIngredient(ingredient: IngredientModel): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: IngredientModel[]): void {
        for( let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
    }
    updateIngredient(index: number, ingredient: IngredientModel): void {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number): void {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}