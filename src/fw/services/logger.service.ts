import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}

/*

try {
    throw new RangeError();
}
catch (e){
    if(e instanceof RangeError){
        console.log('out of range');
    }
}


try {
  throw new TypeError("Error message");
}
catch (e){

  console.log((<Error>e).message);//conversion to Error type
}

EvalError --- Creates an instance representing an error that occurs regarding the global function eval().
InternalError --- Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
RangeError --- Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
ReferenceError --- Creates an instance representing an error that occurs when de-referencing an invalid reference.
SyntaxError --- Creates an instance representing a syntax error that occurs while parsing code in eval().
TypeError --- Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
URIError --- Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
*/