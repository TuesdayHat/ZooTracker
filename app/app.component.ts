import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h2>Zoo Animal Tracker</h2>
    <div class="row">
      <div class="col-md-6">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)=editAnimal($event)></animal-list>
      </div>
      <div class="col-md-3">
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <hr>
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [];
  selectedAnimal = null;

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
      this.selectedAnimal = null;
  }

}
