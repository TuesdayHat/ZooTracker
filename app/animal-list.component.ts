import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngFor="let currentAnimal of childAnimalList" class="member">
    <p>{{currentAnimal.name}} the {{currentAnimal.species}}</p>
    <p>{{currentAnimal.age}} years old</p>
    <p>{{currentAnimal.sex}}</p>
    <p>{{currentAnimal.locaton}}</p>
    <p>{{currentAnimal.caretakers}}</p>
    <p>{{currentAnimal.likes}}</p>
    <p>{{currentAnimal.dislikes}}</p>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button>
  </div>
  `
})

export class {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
}
