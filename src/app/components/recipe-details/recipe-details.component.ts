import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute, private location: Location, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipeId: number = parseInt(params.get('recipeId'), 10);
      this.recipeService.getRecipeById(recipeId).then((recipe) => {
        this.recipe = recipe;
      });
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
