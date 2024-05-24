import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ForecastService } from './services/forecast.service';
import { GeocodingService } from './services/geocoding.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ForecastComponent, 
    ToolbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private forcastService: ForecastService, private geoService: GeocodingService) {}
  
  forecastData: any
  location = '06084,US'

  showNewLocation(event: any) {
    if(event){
      this.location = event
      this.geoService.get(this.location + ",US")
      .subscribe({
        next: (response: any) => {
          this.forcastService.get(`lat=${response.lat}&lon=${response.lon}&units=imperial`)
          .subscribe({
            next: (response: any) => {
              this.forecastData = response
            }
          })
        }
      })
    }
  }

  ngOnInit(): void {
    this.geoService.get(this.location)
    .subscribe(
      {
        next: (response: any) => {
          this.forcastService.get(`lat=${response.lat}&lon=${response.lon}&units=imperial`)
          .subscribe(response => {
            console.log(response)
            this.forecastData = response
          })
        }
        
      })

  }
}
