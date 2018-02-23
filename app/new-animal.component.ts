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

    <button (click)="submitForm(newName, newSpecies, Number(newAge), newSex.value, newLocation, Number(newCaretakers), newLikes, newDislikes); newName.value=''; newSpecies.value=''; newAge.value=''; newSex.value.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Add New Animal</button>
  </div>
  `
})

export class NewAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, sex: string, location: string, caretakers: number, likes:string, dislikes:string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, location, sex, likes, dislikes, caretakers);
    this.newAnimalSender.emit(newAnimalToAdd)
  }
}
