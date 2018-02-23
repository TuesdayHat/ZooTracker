import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Log New Animal</h2>
  <div class="form-group">
    <label>Name: </label>
    <input #newName>

    <label>Species: </label>
    <input #newSpecies>

    <label>Age: </label>
    <input type="number" #newAge>

    <label>Sex: </label>
    <select #newSex>
      <option [value]="Male">Male</option>
      <option [value]="Female">Female</option>
    </select>

    <label>Location: </label>
    <input #newLocation>

    <label>Caretakers: </label>
    <input type="number" #newCaretakers>

    <label>Likes: </label>
    <input #newLikes>

    <label>Dislikes: </label>
    <input #newDislikes>

    <button (click)="submitForm(newName, newSpecies, newAge, newSex.value, newLocation, newCaretakers, newLikes, newDislikes); newName.value=''; newSpecies.value=''; newAge.value=''; newSex.value.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Add New Animal</button>
  </div>
  `
})

export class NewAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(){
    var newAnimalToAdd: Animal = new Animal();
    this.newAnimalSender.emit(newAnimalToAdd)
  }
}
