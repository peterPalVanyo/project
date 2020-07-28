import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) name: ElementRef;
  @ViewChild('amountInput', { static: false }) amount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    if (this.name.nativeElement.value && this.amount.nativeElement.value) {
      this.shoppingListService.addIngredient({
        name: this.name.nativeElement.value,
        amount: this.amount.nativeElement.value,
      });
    }
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
