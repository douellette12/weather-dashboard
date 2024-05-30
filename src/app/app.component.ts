import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ForecastService } from './services/forecast.service';
import { GeocodingService } from './services/geocoding.service';
import { OverviewComponent } from './components/overview/overview.component';
import { CurrentWeatherService } from './services/current-weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ForecastComponent, 
    ToolbarComponent,
    OverviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private forcastService: ForecastService, 
    private geoService: GeocodingService,
    private currentWeatherService: CurrentWeatherService
  ) {}
  
  forecastData: any
  currentWeatherData: any
  location = '06074,US'

  showNewLocation(event: any) {
    if(event){
      this.location = event
      this.geoService.get(this.location + ",US")
      .subscribe({
        next: (response: any) => {
          this.forcastService.get(`lat=${response.lat}&lon=${response.lon}`)
          .subscribe({
            next: (response: any) => {
              this.forecastData = response
            }
          })
          this.currentWeatherService.get(`lat=${response.lat}&lon=${response.lon}`)
          .subscribe({
            next: (response: any) => {
              this.currentWeatherData = response
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
          this.forcastService.get(`lat=${response.lat}&lon=${response.lon}`)
          .subscribe(response => {
            this.forecastData = response
            console.log(this.forecastData)
          })
          this.currentWeatherService.get(`lat=${response.lat}&lon=${response.lon}`)
          .subscribe((response: any) => {
              this.currentWeatherData = response
              console.log(this.currentWeatherData)
            })
        }
                
      })

  }
}
