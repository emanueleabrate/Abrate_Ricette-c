import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipesListModel } from './recipes-list.models';
import { IngredientiModel } from './recipes-list.models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  constructor(public recipesListService:RecipesService){
    
  }
  
 /* btnClick(id:string){
    this.recipesListService.getRecipe(id);
    console.log("hai selezionato id="+id+" "+this.recipesListService.recipe.nomeRicetta);
   // window.alert("hai selezionato id="+id+" "+this.libriService.libro.author);
    window.alert();
  } */
  btnInserisciClick(){

  } 
 
  btnCancella(id:string){
    this.recipesListService.deleteRecipe(id);
    window.location.reload();
  }


  ngOnInit(){
    this.recipesListService.getRecipes();
  }
}
