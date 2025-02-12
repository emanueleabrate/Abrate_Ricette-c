import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { InsertRecipesComponent } from './insert-recipes/insert-recipes.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateRecipesComponent } from './update-recipes/update-recipes.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesListComponent,
    InsertRecipesComponent,
    ViewDetailsComponent,
    UpdateRecipesComponent,
    SearchRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
