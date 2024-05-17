import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchRecipesComponent } from '../search-recipes/search-recipes.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}
  cercaRicetta(searchTerm: string) :void{
    this.router.navigate(['/search-recipes'], {queryParams : {term : searchTerm}})
  }
}
