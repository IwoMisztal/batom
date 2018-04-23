import { Injectable } from '@angular/core';

@Injectable()
export class ParseCsvtoJsonService {

  constructor() { }

  CSVtoJSON(csv: string){
    var lines = csv.split(`"\r\n`);
    lines[0] = lines[0].replace(/"/g, "");
    var headers=lines[0].split(';');
    var result = [];
    for(var i=1;i<lines.length;i+=1){
      var valueToPush = {};
      
      lines[i] = lines[i].replace(/"/g, "");
      var currentline=lines[i].split(';');
      for(var j=0;j<lines.length;j++){
        valueToPush[headers[j]] = currentline[j];
      }
      result.push(valueToPush);
    }
    return result;
  }
}
