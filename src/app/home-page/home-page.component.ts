import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Output() onSlideUp = new EventEmitter<boolean>(); 

slideup() {
  const clicked = true;
  this.onSlideUp.emit(clicked);
}
  constructor() { 
  }

  ngOnInit() {
    
  }

}
