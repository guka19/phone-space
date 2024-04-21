import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/shared/models/Slide';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  selectedIndex = 0;

  @Input() images: Slide[] = [];

  showPrev(event: Event, i: number) {
    event.preventDefault(); 
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }

  showNext(event: Event, i: number) {
    event.preventDefault(); 
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex = i + 1;
    }
  }

  moveToPrev() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  moveToNext() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    }
  }

}
