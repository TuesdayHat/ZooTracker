import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model'

@Pipe({
  name: "age",
  pure: false
})

export class agePipe implements PipeTransform {
  transform(input: Animal[]){
    let output: Animal[] = [];



    return output
  }
}
