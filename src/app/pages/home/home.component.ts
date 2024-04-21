import { Component } from '@angular/core';
import { Slide } from 'src/app/shared/models/Slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: Slide[] = [
    {
      imgSrc: 'assets/images/google.png',
      imgAlt: 'Google'
    },
    {
      imgSrc: 'assets/images/apple.png',
      imgAlt: 'Apple'
    },
    {
      imgSrc: 'assets/images/samsung.png',
      imgAlt: 'Samsung'
    },
    {
      imgSrc: 'assets/images/mi.png',
      imgAlt: 'Xiaomi'
    }
  ]

}
