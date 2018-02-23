import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Animals</option>
    <option value="young">Young Animals (2 years or younger)</option>
    <option value="mature">Mature Animals (older than 2 years)</option>
  </select>

  <div *ngFor="let currentAnimal of childAnimalList | age:filterByAge" class="member">
    <p>{{currentAnimal.name}} the {{currentAnimal.species}}</p>
    <p>{{currentAnimal.age}} years old</p>
    <p>{{currentAnimal.sex}}</p>
    <p>Located at the {{currentAnimal.location}}</p>
    <p>Caretakers: {{currentAnimal.caretakers}}</p>
    <p>Likes: {{currentAnimal.likes}}</p>
    <p>Dislikes: {{currentAnimal.dislikes}}</p>
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = 'all';

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }
}
