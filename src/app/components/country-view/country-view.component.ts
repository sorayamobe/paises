import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  country: Country | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }


  ngOnInit(): void {
    //recogemos la ruta y obtenemos el código del país para hacer la petición a la api.
    this.activatedRoute.params.subscribe(async params =>{
      let code = params['idCode'];
      // Devuelve un array de country, queremos qeu eso sea el response 
      let response = await this.countriesService.getByCode(code);
      this.country = response[0];
      console.log(this.country);
    })
  }

}
