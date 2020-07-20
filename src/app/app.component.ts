import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = "recipes";

  constructor() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
