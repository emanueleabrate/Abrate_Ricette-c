import { Component, NgModule } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipesListModel } from '../recipes-list/recipes-list.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-update-recipes',
  templateUrl: './update-recipes.component.html',
  styleUrls: ['./update-recipes.component.css']

})
export class UpdateRecipesComponent {
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

 
  constructor(public recipesListService: RecipesService, private route: ActivatedRoute, private Router: Router){}

  async ngOnInit() {
    
      this.id = this.route.snapshot.paramMap.get("id") ?? "";
        
      this.recipeAus = await this.recipesListService.getRecipe(this.id);
      console.log(this.id);

      console.log(this.recipeAus);

    
  }

  modifica() : void{
    this.recipesListService.putRecipe(this.id, this.recipeAus);
    window.alert("Ricetta modificata con successo");
    this.Router.navigate(['../view-details', this.id]);
  } 

  
  aggiungi():void{
    this.recipeAus.ingredienti.push({ nome: "", qta: 0, udm: '' });
  }
}
