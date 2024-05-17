import { Component } from '@angular/core';
import { RecipesListModel } from '../recipes-list/recipes-list.models';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent {

  ris: RecipesListModel[] = [];

  constructor(public recipeListService: RecipesService, private route:ActivatedRoute, private router:Router){}

 async ngOnInit(){
    const term = this.route.snapshot.queryParams['term'];
    if(term){
      this.ris = await this.recipeListService.searchRecipes(term);
    }
  }
  
}
