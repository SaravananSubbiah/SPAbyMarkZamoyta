// To conver temperature from Celsius to Fahrenheit pipe

import {Pipe, PipeTransform} from '@angular/core';


// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'tempConvert'
})
// The work of the pipe is handled in the tranform method with our pipe's class
export class TempConvertPipe implements PipeTransform {
  transform(value: number, arg1: any, arg2: any) {   
   if(value && !isNaN(value) && arg1 === 'celsius') {
        
      var temp = (value - 32) * 5/9;
      var places = arg2;
      return temp.toFixed(places) + '° C';       
    }

    return;
  }
}

/*
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
  */