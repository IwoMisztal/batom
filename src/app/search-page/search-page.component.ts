import { Component, OnInit } from '@angular/core';
import { Accus } from '../mock-accu';
import { NgModel } from '@angular/forms';
import { delay } from 'q';
import { Accu } from '../Accu';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {


  toSearch:string;
  test: Accu[];

  delay: any;

  search()
  {
    if (this.delay) {
      clearTimeout(this.delay);
    }
    this.delay = setTimeout(() => {
      const hit = Accus.filter(x => x.name.indexOf(this.toSearch) >= 0);
      console.log(hit);
      this.test = hit;
    }, 500);
  }


  constructor() { }

  ngOnInit() {
  }
}


