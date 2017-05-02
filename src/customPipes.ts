import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'lengthLimit'})
export class lengthLimitPipe implements PipeTransform{
  transform(value,length){
    console.log("I am in tranform "+ value);
    return "Pullkit "+ (value.slice(0,length));
  }

}

@Pipe({name : "arrayLimit"})
export class arrayLimitPipe implements PipeTransform{
  transform(value:Array<number>):Array<number>{
    console.log();
    return value.slice(0,3);
  }
}
