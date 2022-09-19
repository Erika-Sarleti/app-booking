import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inToArray'
})
export class InToArrayPipe implements PipeTransform {

  transform(value: number) {
    return new Array(value);
  }

}
