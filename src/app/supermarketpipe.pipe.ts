import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'supermarketpipe'
})
export class SupermarketpipePipe implements PipeTransform {

  transform(ch:string):string {
    return '"' + ch +'"';
  }

}
