import { Component, Input, output } from '@angular/core';
import { FormControl, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Input()
  forecastData: any

  locationForm = new FormRecord({
    location: new FormControl('', Validators.required)
  })

  onLocationChange = output<string>()

  setNewLocation() {
    if(this.locationForm.value['location']){
      this.onLocationChange.emit(this.locationForm.value['location'])
      this.locationForm.reset()
    }
  }
}
