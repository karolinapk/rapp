import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from './components/edit-new-recipe/edit-new-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummaryComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'editnewrecipe',
        component: EditNewRecipeComponent
      },
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path: 'recipes/:recipeId',
        component: RecipeDetailsComponent
      },
      {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      }]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
