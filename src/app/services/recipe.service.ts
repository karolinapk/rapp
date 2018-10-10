import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {Http} from '@angular/http';

const RECIPE_SERVER = 'http://localhost:8080/v1';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[];

  constructor(private http: Http) {
  }

  getAllRecipes(): Promise<Recipe[]> {
    return this.http.get(RECIPE_SERVER + '/recipes.json')
      .toPromise()
      .then(response => response.json().data as Recipe[]);
  }

  getRecipeById(recipeId: number): Promise<Recipe> {
    return this.http.get(RECIPE_SERVER + `/recipes/${recipeId}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }

  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    console.log(recipe);
    return this.http.put(RECIPE_SERVER + '/recipes.json', recipe).toPromise().then(response => response.json().data as Recipe);
  }
}
