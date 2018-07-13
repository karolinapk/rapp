import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];

  recipe_in_progress: Recipe;

  current_classes: any;
  current_styles: any;

  constructor() {
    this.recipe_in_progress = Recipe.createBlank();
    this.current_classes = {'darkbg': false};
    this.current_styles = {'font-size': '150%'};

    this.recipes = [
      new Recipe('Banana bread', 'Favourite stuff', 4, 60, null, null, null),
      new Recipe('Tofu', 'Nasty stuff', 4, 30, null, null, null),
      new Recipe('Fried Rice', 'unhealthy stuff', 2, 15, null, null, null)];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  public zoomInOnRecipe(recipe: Recipe) {
    console.log('Zoom in on recipe');
    console.log(JSON.stringify(recipe, null, 2));
  }

  public toggleBackground() {
    const newValue = !this.current_classes['darkbg'];
    this.current_classes = {'darkbg': newValue};
  }

  public toggleFontSize() {
    this.current_styles  = this.current_styles['font-size']  === '150%' ? {'font-size': '175%'} : {'font-size': '150%'};
  }
}
