import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;

  constructor() {
    this.recipe_in_progress = Recipe.createBlank();
  }

  ngOnInit() {
  }

  addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    // this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  addIngredientPressed(): void {
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [{ingredient: null, measure: null}];
    } else {
      this.recipe_in_progress.ingredients.push({ingredient: null, measure: null});
    }
  }

  removeIngredientAtIndex(i: number): void {
    this.recipe_in_progress.ingredients.splice(i, 1);
  }

  addInstructionPressed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [{instruction: null, photo: null}];
    } else {
      this.recipe_in_progress.instructions.push({instruction: null, photo: null});
    }
  }

  removeInstructionAtIndex(i: number): void {
    this.recipe_in_progress.instructions.splice(i, 1);
  }
}
