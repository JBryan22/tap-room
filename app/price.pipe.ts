import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name:'price',
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], desiredPrice) {
    let output: Keg[] = [];
    if(desiredPrice === "cheap") {
      for(let i = 0; i < input.length; i++) {
        if (input[i].price <= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "nice"){
      for(let i = 0; i < input.length; i++) {
        if (input[i].price > 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
