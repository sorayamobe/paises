
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number;
  long: number;
  arrCountries : Country[] = new Array();
  
  constructor(
    private countriesService: CountriesService
  ) { 
    this.lat= 40;
    this.long= -3;
  }

  async ngOnInit(): Promise<void> {
    this.arrCountries = await this.countriesService.getAll();

    console.log(this.arrCountries)
  }

}
