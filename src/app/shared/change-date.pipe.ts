import {Pipe,PipeTransform} from'@angular/core';
@Pipe({name:'datePipe'})
export class datePipe implements PipeTransform {
    transform(value: string): string { //"1983-06-01T20:36:22Z"
        let year: string =  value.substring(0,4);
        let month: string =  value.substring(5,7);
        let day: string =  value.substring(8,10);
        let newStr:string=day+"/"+month+"/"+year;
        // newStr=newStr.split("-").join("/");
        return newStr;
      }

}