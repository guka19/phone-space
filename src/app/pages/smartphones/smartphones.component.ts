import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent {
  
  searchForm = this.fb.group({
    brand: [''],
    screenSize: [null],
    operatingSystem: [''],
  })

  constructor(private fb: FormBuilder) {}
}
