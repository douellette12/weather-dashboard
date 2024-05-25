import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, output } from '@angular/core';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent implements OnChanges {

  date?: Date
  
  datesArray = Array.from({ length: 4 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  });

  @Input()
  forecastData?: any

  futureForecast: any[] = []

  ngOnChanges(changes: SimpleChanges): void {
    this.futureForecast = []
    if(this.forecastData){
      
      this.datesArray = Array.from({ length: 4 }, (_, i) => {
        const date = new Date(this.forecastData.list[0].dt*1000);
        date.setDate(date.getDate() + i + 1);
        return date;
      });

      this.date = new Date(this.forecastData.list[0].dt*1000)
      let tomorrow = new Date(this.date)
      tomorrow.setDate(tomorrow.getDate() + 1)
      
      for (let i = 0; i < this.forecastData.list.length; i++){
        this.datesArray.forEach((date) => {
          if (date.toString() == new Date(this.forecastData.list[i].dt*1000).toString()){
            this.futureForecast.push(this.forecastData.list[i])
          }
        })
      }
    }
  }


}
