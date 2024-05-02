import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { Card, CardModule } from 'primeng/card';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    SliderModule
  ],
  exports: [
    ButtonModule,   
    CardModule,
    SliderModule
  ]
})
export class PrimengModule { }
