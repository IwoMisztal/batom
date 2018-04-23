import { Component, OnInit } from '@angular/core';
import { Accus } from '../mock-accu';
import { NgModel } from '@angular/forms';
import { Accu } from '../Accu';
import { DOCUMENT } from '@angular/platform-browser';
import { HttpClient } from 'selenium-webdriver/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ItemsService } from '../services/items.service';
import { Item } from '../models/Item';

import { ParseCsvtoJsonService } from '../services/parse-csvto-json.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

output: any;
csvData: any;
elements: any;

  constructor(private itemsService: ItemsService, 
  private parseCsvtoJsonService: ParseCsvtoJsonService) { }

  onFileSelected(event) {
    var reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = () => {
      this.csvData = reader.result;
      this.elements = this.parseCsvtoJsonService.CSVtoJSON(this.csvData);
    }
 //   this.selectedFile = event.target.files[0].value;
  }

  goToUrl(link: string) {
      document.location.href = 'http://allegro.pl/i'+link+".html";
  }

  ngOnInit() {
  }

}
