import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  `
})

export class {
  @Input() childSelectedAnimal: Animal;
  @Output() newTaskSender = new EventEmitter();
}
