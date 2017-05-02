import {Pipe, PipeTransform} from '@angular/core';


                  //This is a custom Pipe for string
@Pipe({name : 'lengthLimit'})
export class lengthLimitPipe implements PipeTransform{
  transform(value : string,length){
    return value.slice(0,length);
  }

}

@Pipe({name : "arrayLimit"})
export class arrayLimitPipe implements PipeTransform{
  transform(value:Array<number>):Array<number>{
    // It send only first three element of the array
    return value.slice(0,3);
  }
}
