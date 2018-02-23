import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="form-group">
    <div *ngIf="selectedAnimal">
      <h3>Edit {{selectedAnimal.name}} the {{selectedAnimal.species}}</h3>

      <label>Edit name:</label>
      <input [(ngModel)]="selectedAnimal.name">

      <label>Edit species:</label>
      <input [(ngModel)]="selectedAnimal.species">

      <label>Edit sex:</label>
      <input type="radio" [(ngModel)]="selectedAnimal.sex" [value]="Male">Male<br>
      <input type="radio" [(ngModel)]="selectedAnimal.sex" [value]="Female">Female<br>

      <label>Edit location:</label>
      <input [(ngModel)]="selectedAnimal.location">

      <label>Edit caretakers:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">

      <label>Edit likes:</label>
      <input [(ngModel)]="selectedAnimal.likes">

      <label>Edit dislikes:</label>
      <input [(ngModel)]="selectedAnimal.dislikes">

      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
}
