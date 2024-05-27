import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService extends DataService{

  constructor(http: HttpClient) {
    super(http, 'https://api.openweathermap.org/data/2.5/weather?')
   }
}
