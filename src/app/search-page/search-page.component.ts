import { Component, OnInit, Inject } from '@angular/core';
import { Accus } from '../mock-accu';
import { NgModel } from '@angular/forms';
import { delay } from 'q';
import { Accu } from '../Accu';
import {CsvService} from "angular2-json2csv";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {




  goTo(url: string) {
    document.location.href = url;
  }

  toSearch:string;
  test: Accu[];
  output: any;
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


  constructor(@Inject(DOCUMENT) private document: any) { 
  }

  csvJSON(csv: string){
    
    var lines=csv.split("\n");
    
    var result = [];
  
    var headers=lines[0].split(';');
    
  
    for(var i=1;i<lines.length;i+=10){
  
      var obj = {};
      var currentline=lines[i].split(';');
      
  
      for(var j=0;j<lines.length;j++){
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    
    
    //return result; //JavaScript object
    return result; //JSON
    
  }



  ngOnInit() {
    const input = `"ID";"SERWIS";"ID_KONTO";"ID_GRUPA";"ID_CENNIK";"LP";"NR_AUKCJI";"DATA_WYST";"DATA_ZAKON";"KAT_ALL_ID";"KAT_ALL_TXT";"KAT_SKLEP_ID";"KAT_SKLEP_TXT";"TYTUL";"KOD";"EAN";"FORMAT";"CZAS";"LICZBA";"LICZBA_RODZAJ";"CENA_KT";"CENA_WYW";"CENA_MIN";"POKRYWA";"DARM_OPCJE_WYS";"WYSYLKA_GODZ";"OPCJE_DOD";"SKLEP_WZN";"NAZWA_SZABLONU";"SZABLON";"DO_WYST";"CZY_NOWY_OPIS";"ARCHIWUM";"KOSZ";"CENNIK";"OPIS_TEKST_1";"OPIS_TEKST_2";"OPIS_TEKST_3";"NR_AUKCJI1";"ALL_CENA";"ALL_WYSW";"ALL_OBSER";"ALL_OFERT";"ALL_SPRZ";"LOGIN";"GRUPA"
    "157625";"1";"8";"261";"1";"99999";"7253058052";"2018-03-24 11:31:40";"2099-01-01 00:00:00";"352";"Telefony i Akcesoria \ Akcesoria GSM \ Baterie";"0";"";"Bateria akumulator 2600mAh do Samsung Galaxy A3";"BATAX_SamA3";"";"1";"99";"20";"0";"44,16";"0";"0";"1";"0|0|1";"0";"0|1|0|0|0|0|0";"0";"";"0";"0";"1";"0";"0";"Allegro MiniPaczka InPost|6,90|0,00|2
    List polecony ekonomiczny|7,60|0,00|10
    List polecony priorytetowy|9,20|0,00|10
    Odbiór w punkcie - Allegro Paczkomaty InPost|12,10|0,00|10
    Odbiór w punkcie po przedpłacie - Allegro Paczkomaty InPost|8,60|0,00|10
    Odbiór w punkcie po przedpłacie - E-PRZESYŁKA / Paczka48 Odbiór w Punkcie|12,00|0,00|10
    Pocztex Kurier24|15,00|0,00|100
    Pocztex Kurier24 pobraniowy|16,00|0,00|100
    Przesyłka kurierska pobraniowa|12,90|0,00|100
    Przesyłka pobraniowa / Paczka48 pobranie|15,50|0,00|100";"";"";"";"7253058052";"44,16";"0";"0";"0";"0";"webskihurt_pl";"BATERIE"
    "157624";"1";"8";"261";"1";"99999";"7253057929";"2018-03-24 11:31:32";"2099-01-01 00:00:00";"352";"Telefony i Akcesoria \ Akcesoria GSM \ Baterie";"0";"";"Bateria akumulator 2600mAh do Sony Xperia M2";"BATAX_SonM2";"";"0";"99";"20";"0";"46,24";"0";"0";"1";"0|0|1";"0";"0|1|0|0|0|0|0";"0";"";"0";"0";"1";"0";"0";"Allegro MiniPaczka InPost|6,90|0,00|2
    List polecony ekonomiczny|7,60|0,00|10
    List polecony priorytetowy|9,20|0,00|10
    Odbiór w punkcie - Allegro Paczkomaty InPost|12,10|0,00|10
    Odbiór w punkcie po przedpłacie - Allegro Paczkomaty InPost|8,60|0,00|10
    Odbiór w punkcie po przedpłacie - E-PRZESYŁKA / Paczka48 Odbiór w Punkcie|12,00|0,00|10
    Pocztex Kurier24|15,00|0,00|100
    Pocztex Kurier24 pobraniowy|16,00|0,00|100
    Przesyłka kurierska pobraniowa|12,90|0,00|100
    Przesyłka pobraniowa / Paczka48 pobranie|15,50|0,00|100";"";"";"";"7253057929";"46,24";"0";"0";"0";"0";"webskihurt_pl";"BATERIE"`

    const input2 = input.replace(/"/g, "");
    this.output = this.csvJSON(input2);

    console.log(this.output[1]);
    console.log(this.output[0].TYTUL);
  }
  }


