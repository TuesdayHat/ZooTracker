import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="form-group">
    <div *ngIf="selectedAnimal">
      <h3>Edit {{selectedAnimal.name}} the {{selectedAnimal.species}}</h3>

      <label>Edit name:</label>
      <input [(ngmodel)]="selectedAnimal.name">

      <label>Edit species:</label>
      <input [(ngmodel)]="selectedAnimal.species">

      <label>Edit sex:</label>
      <input type="radio" [(ngmodel)]="selectedAnimal.sex" [value]="Male">Male<br>
      <input type="radio" [(ngmodel)]="selectedAnimal.sex" [value]="Female">Female<br>

      <label>Edit location:</label>
      <input [(ngmodel)]="selectedAnimal.location">

      <label>Edit caretakers:</label>
      <input [(ngmodel)]="selectedAnimal.caretakers">

      <label>Edit likes:</label>
      <input [(ngmodel)]="selectedAnimal.likes">

      <label>Edit dislikes:</label>
      <input [(ngmodel)]="selectedAnimal.dislikes">

      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
}
