import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { RecipesListModel } from '../recipes-list/recipes-list.models';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: RecipesListModel[] = [];
  recipe!: RecipesListModel;
  
  constructor(private storageService: StorageService) { }

  getRecipes(){
    this.storageService.sendGetRequest('recipes').subscribe({
      next: (data: any) => {
        console.log(data);
        this.recipes = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }

  getRecipe(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storageService.sendGetRequest('recipes/' + id).subscribe({
        next: (data: any) => {
          console.log(data);
          resolve(data);
        },
        error: (errore: any) => {
          console.log(errore);
          reject("ERRORE: " + errore);
        }
      });
    });
  }
  
  postRecipe(body:any){
    this.storageService.sendPostRequest('recipes/', body).subscribe({
      next: (data: any) => {
        console.log(data);
        this.recipe = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }

  putRecipe(id:string, body:any){
    this.storageService.sendPutRequest('recipes/' + id, body).subscribe({
      next: (data: any) => {
        console.log(data);
        this.recipe = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }

  deleteRecipe(id:string){
    this.storageService.sendDeleteRequest('recipes/' + id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.recipe = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }

  public async searchRecipes(query: string){
    if (query !== "") {
      const recipes = (await this.storageService.sendGetRequest('recipes/?q=' + encodeURIComponent(query)).toPromise()) as RecipesListModel[];
        return recipes;    
    } else {
      return [];
    }
  }
}
