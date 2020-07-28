import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'test',
            'just for test',
            'https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg',
            [new Ingredient("pepper", 1), new Ingredient("salt", 2)]
        ),
        new Recipe(
            'test2',
            'just for test2',
            'https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg',
            [new Ingredient("apple", 10), new Ingredient("olive", 9)]
        )
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}