import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRecipesComponent } from './insert-recipes.component';

describe('InsertRecipesComponent', () => {
  let component: InsertRecipesComponent;
  let fixture: ComponentFixture<InsertRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertRecipesComponent]
    });
    fixture = TestBed.createComponent(InsertRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
