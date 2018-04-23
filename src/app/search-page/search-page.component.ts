import { Component, OnInit, Inject } from '@angular/core';




@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

// selectedFile = null;
// item: Item = {
//   title: ''
// }


constructor() { 
}

// onSubmit(item) {
//   if (this.item.title != ' ' ) {
//     this.itemsService.addItem(this.item);
//     this.item.title = '';
//   }
// }

 
  // search()
  // {
  //   if (this.delay) {
  //     clearTimeout(this.delay);
  //   }
  //   this.delay = setTimeout(() => {
  //     const hit = Accus.filter(x => x.name.indexOf(this.toSearch) >= 0);
  //     this.test = hit;
  //   }, 500);
  // }


  // csvJSON(csvString: string) {
  //   csvString = csvString.replace(/"/g, "");
  //   var headersLine = this.csvData.split("\r\n", 1);

  //   var rows = [];
  //   do {
  //     for (var i=0; i < headersLine.length; i++) {
  //       var row = csvString.split(";", 1);
  //       rows.push(row);
  //       console.log(rows);
  //     }
  //   } while (rows.length < 30);
  // }

  ngOnInit() {}
  }