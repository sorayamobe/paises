import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { LanguagePipe } from './pipes/language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryViewComponent,
    HeaderComponent,
    CurrencyPipe,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(environment.googleMaps),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
