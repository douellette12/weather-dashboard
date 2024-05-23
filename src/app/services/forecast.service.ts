import { Injectable } from '@angular/core';
import { GeocodingService } from './geocoding.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'http://api.openweathermap.org/data/2.5/forecast?')
  }
}
