import { Component } from '@angular/core';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  slided: boolean;

  setSlide() {
    this.slided = true;
    console.log('bigHit');
  }
}
