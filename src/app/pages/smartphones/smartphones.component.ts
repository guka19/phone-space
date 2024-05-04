import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/shared/models/Product';
import { SmartphoneService } from 'src/app/shared/services/smartphone.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent {

  smartphones: Product[] = [];

  searchForm = this.fb.group({
    priceMin: [null],
    priceMax: [null],
    brand: [''],
    screenSize: [''],
    ram: [0],
  })

  isFilterVisible = false;

  toggleFilterVisibility() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  constructor(private fb: FormBuilder, private smartphoneService: SmartphoneService) {
    this.smartphoneService.getSmartphones().subscribe((data) => {
      this.smartphones = data;
    })
  }
}
