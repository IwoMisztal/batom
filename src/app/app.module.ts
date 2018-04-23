import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './services/items.service';
import { environment } from '../environments/environment';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { ParseCsvtoJsonService } from './services/parse-csvto-json.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FooterComponent } from './footer/footer.component';
import { Router } from './router/routing';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ItemsComponent,
    AdminPanelComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    Router,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    Angular2FontawesomeModule
  ],
  providers: [
    ItemsService,
    ParseCsvtoJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
