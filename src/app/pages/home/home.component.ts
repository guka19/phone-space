import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { Slide } from 'src/app/shared/models/Slide';
import { SmartphoneService } from 'src/app/shared/services/smartphone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topSellers: Product[] = [];

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
  ];

  navigateToSmartphone(productId: string) {
    this.router.navigate([`/smartphone/${productId}`]);
  }

  constructor(private smService: SmartphoneService, private router: Router) {
    this.smService.getSmartphones().subscribe((data) => {
      this.topSellers = data;
      // console.log(data);
    })
  }
}
