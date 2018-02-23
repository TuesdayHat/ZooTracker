import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="form-group">
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>

      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">

      <label>Edit species:</label>
      <input [(ngModel)]="childSelectedAnimal.species"> <br>

      <label>Edit sex:</label><br>
      <input type="radio" [(ngModel)]="childSelectedAnimal.sex" value="Male">Male <br>
      <input type="radio" [(ngModel)]="childSelectedAnimal.sex" value="Female">Female<br>

      <label>Edit location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">

      <label>Edit caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">

      <label>Edit likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">

      <label>Edit dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">

      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
