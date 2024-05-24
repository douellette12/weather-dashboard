import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent implements OnInit {

  date: Date = new Date()

  datesArray = Array.from({ length: 4 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  });

  @Input()
  forecastData?: any

  ngOnInit(): void {
    setInterval(() => {
          this.date = new Date();
        }, 1000);
    }

}
