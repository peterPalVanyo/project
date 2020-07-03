import { Component, OnInit } from '@angular/core';
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
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
