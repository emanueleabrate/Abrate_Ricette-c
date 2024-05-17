import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipesListModel } from '../recipes-list/recipes-list.models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-recipes',
  templateUrl: './insert-recipes.component.html',
  styleUrls: ['./insert-recipes.component.css']
})
export class InsertRecipesComponent {

  id:string = "";
  
  recipeAus: RecipesListModel = {
    id: "",
    nomeRicetta: "",
    descrizione: "",
    ingredienti: [{
      nome: "",
      qta: 0,
      udm: ""
    }],
    istruzioni: "",
    tempo: "",
    difficolta: "",
    immagine: ""

  }

  constructor(public recipesListService: RecipesService, private route: ActivatedRoute, private router: Router){}

  inserisci():void{
    this.recipesListService.postRecipe(this.recipeAus);
    window.alert("Ricetta inserita con successo");
    this.recipesListService.getRecipes();
    this.router.navigate(['../recipes-list']);
  }

  aggiungi():void{
    this.recipeAus.ingredienti.push({ nome: "", qta: 0, udm: '' });

  }
}
