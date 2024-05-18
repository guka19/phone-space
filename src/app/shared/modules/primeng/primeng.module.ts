import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { Card, CardModule } from 'primeng/card';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    SliderModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ConfirmPopupModule,
    GalleriaModule
  ],
  exports: [
    ButtonModule,   
    CardModule,
    SliderModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ConfirmPopupModule,
    GalleriaModule
  ]
})
export class PrimengModule { }
