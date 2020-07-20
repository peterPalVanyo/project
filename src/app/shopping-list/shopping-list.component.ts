import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient("Bananas", 12),
    new Ingredient("Tomatoes", 3)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
