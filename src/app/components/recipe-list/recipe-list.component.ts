import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  recipeLoaded: boolean;

  constructor(private router: Router, private recipeService: RecipeService) {
    this.recipeLoaded = false;
  }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().then((recipes) => {
      this.recipes = recipes;
      this.recipeLoaded = true;
    });
  }

  userClickedOnRecipe(recipeId: number) {
    this.router.navigateByUrl('/recipes/' + recipeId);
  }

  addNewRecipePressed(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
