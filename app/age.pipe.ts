import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model'

@Pipe({
  name: "age",
  pure: false
})

export class agePipe implements PipeTransform {
  transform(input: Animal[], ageFilter){
    let output: Animal[] = [];
    switch(ageFilter){
      case "young":
        for(let i=0; i<input.length; i++){
          if(input[i].age <= 2){
            output.push(input[i];)
          }
        }
        break;

      case "mature":
        for(let i=0; i<input.length; i++){
          if(input[i].age >= 2){
            output.push(input[i];)
          }
        }
        break;

      default:
        for(let i=0; i<input.length; i++){
          output.push(input[i];)
        }
        break;
    }
    return output
  }
}
