import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertRecipesComponent } from './insert-recipes/insert-recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UpdateRecipesComponent } from './update-recipes/update-recipes.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/recipes-list"
  },
  {
    path: "recipes-list",
    component: RecipesListComponent
  },
  {
    path: "insert-recipes",
    component: InsertRecipesComponent
  },
  {
    path: "view-details/:id",
    component: ViewDetailsComponent
  },
  {
    path: "update-recipes/:id",
    component: UpdateRecipesComponent
  },
  {
    path: "search-recipes",
    component: SearchRecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
