import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test',
      'just for test',
      'https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg'
    ),
    new Recipe(
      'test2',
      'just for test2',
      'https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg'
    )
  ];
  @Output("recipeWasSelected") recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {}
}
