import { Component } from '@angular/core';
import { Options } from '@local/ng5-slider';

@Component({
  selector: 'app-stepped-slider',
  templateUrl: './stepped-slider.component.html'
})
export class SteppedSliderComponent {
  value: number = 12;
  options: Options = {
    floor: 10,
    ceil: 100,
    step: 5
  };
}
