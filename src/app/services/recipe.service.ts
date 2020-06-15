

import { IngredientModel } from '../models/ingredient.model';
import { RecipeModel } from './../models/recipe.model';



export class RecipeService {
    private recipes: RecipeModel[] = [
        new RecipeModel(
            'A Test Recipe', 
            'A super-tasty Schnitzel - just awesome!', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
            [
                new IngredientModel('Meat', 1),
                new IngredientModel('French Fries', 20)
            ]
        ),
        new RecipeModel(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://images.food52.com/hXVO4po6G0e-3b666Sss0DIDkSE=/530x354/f42279ed-97c2-4bff-be0e-e77735062bac--2020-0526_baked-skillet-pasta-with-tomatoes-white-beans-and-greens_3x2_allison-buford.jpg',
            [
                new IngredientModel('Buns', 2),
                new IngredientModel('Meat', 1)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}