import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ForecastService } from './services/forecast.service';

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

  constructor(private forcastService: ForecastService) {}
  
  getForeCast() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.forcastService.get(`lat=${position.coords.latitude}&lon=${position?.coords.longitude}`)
      .subscribe(response => console.log(response))
    })
  }

  ngOnInit(): void {

  }
}
