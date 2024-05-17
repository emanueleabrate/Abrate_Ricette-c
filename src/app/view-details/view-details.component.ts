import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesListModel } from '../recipes-list/recipes-list.models';
import { InMemoryScrollingOptions } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
 
  quantita:number = 1;
  public recipe!: RecipesListModel;
  constructor(public recipesListService:RecipesService, private route: ActivatedRoute){
    
  }
  ngOnInit(){
    let id:string;
    this.route.params.subscribe(params=>{
      id = params['id'];
      this.dettagliRicetta(id);
    })
  }

  private dettagliRicetta(id:string): void{
    this.recipesListService.getRecipe(id)
    .then((data) => {
      this.recipe = data;
    })
    .catch((error) => {
      window.alert(error);
    });
  }

   btnModifica(recipe: RecipesListModel){
    console.log(recipe);
    var rec : RecipesListModel ={
      "id": recipe.id,
      "nomeRicetta": recipe.nomeRicetta,
      "descrizione": recipe.descrizione,
      "ingredienti": recipe.ingredienti,
      "istruzioni": recipe.istruzioni,
      "tempo": recipe.tempo,
      "difficolta": recipe.difficolta,
      "immagine": recipe.immagine
    }
    this.recipesListService.putRecipe(recipe.id, rec);
    this.recipesListService.getRecipes();
  }

  ottieniValore(): void{
    console.log('Valore inserito:', this.quantita);
  }
}
