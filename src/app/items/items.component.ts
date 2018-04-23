import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    
   this.itemService.getItems().subscribe(items => {
     this.items = items;
   });
  }

}
