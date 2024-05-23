import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService extends DataService{

  constructor(http: HttpClient) {
    super(http, "http://api.openweathermap.org/geo/1.0/zip?zip=")
  }
}
